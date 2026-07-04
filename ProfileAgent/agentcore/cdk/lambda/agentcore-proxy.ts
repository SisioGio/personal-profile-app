import {
  BedrockAgentCoreClient,
  InvokeAgentRuntimeCommand,
} from '@aws-sdk/client-bedrock-agentcore';
import type {
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
} from 'aws-lambda';
import { randomUUID } from 'crypto';

const client = new BedrockAgentCoreClient({});
const runtimeArn = process.env.AGENTCORE_RUNTIME_ARN;
const maxMessages = Number(process.env.MAX_MESSAGES ?? '12');
const maxUserMessageLength = Number(process.env.MAX_USER_MESSAGE_LENGTH ?? '700');

const refusalMessage =
  "I can only answer questions about Alessio, his projects, skills, certifications, experience, and ways to contact or work with him.";

const allowedTopicPattern =
  /\b(alessio|giovannini|portfolio|profile|project|projects|skill|skills|experience|certification|certifications|certificate|background|education|work|career|contact|hire|cv|resume|expertise|ai|llm|agent|agents|automation|rpa|uipath|power automate|aws|bedrock|lambda|textract|cloud|serverless|vector|rag|knowledge base|document|documents|extraction|ocr|chatbot|teams|sap|reporting|emailifit|docaiextractor|agents4people|storaro|nft|solidity|livekit|nova sonic)\b/i;

const greetingPattern =
  /^(hi|hello|hey|ciao|good morning|good afternoon|good evening|who are you|help|what can you do)[\s?.!]*$/i;

const corsHeaders = {
  'access-control-allow-origin': process.env.CORS_ALLOW_ORIGIN ?? '*',
  'access-control-allow-headers': 'content-type,authorization,x-session-id',
  'access-control-allow-methods': 'OPTIONS,POST',
};

function response(
  statusCode: number,
  body: string,
  contentType = 'text/plain'
): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode,
    headers: {
      ...corsHeaders,
      'content-type': contentType,
    },
    body,
  };
}

function extractTextFromEventData(data: string): string {
  const trimmed = data.trim();
  if (!trimmed || trimmed === '[DONE]') {
    return '';
  }

  try {
    const parsed = JSON.parse(trimmed);
    return (
      parsed?.event?.contentBlockDelta?.delta?.text ??
      parsed?.contentBlockDelta?.delta?.text ??
      parsed?.delta?.text ??
      parsed?.text ??
      ''
    );
  } catch {
    return trimmed;
  }
}

async function collectAgentResponse(agentResponse: Awaited<ReturnType<typeof client.send>>) {
  if (!agentResponse.response) {
    return '';
  }

  const raw = await agentResponse.response.transformToString();
  if (!raw) {
    return '';
  }

  if (agentResponse.contentType?.includes('text/event-stream')) {
    return raw
      .split(/\r?\n/)
      .filter((line) => line.startsWith('data: '))
      .map((line) => extractTextFromEventData(line.slice(6)))
      .join('');
  }

  if (agentResponse.contentType?.includes('application/json')) {
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed === 'string'
        ? parsed
        : parsed?.message ?? parsed?.response ?? JSON.stringify(parsed);
    } catch {
      return raw;
    }
  }

  return raw;
}

function normalizeMessageText(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === 'string') return item;
        if (item && typeof item === 'object' && 'text' in item) {
          return String((item as { text?: unknown }).text ?? '');
        }
        return '';
      })
      .join(' ');
  }

  return '';
}

function getMessages(body: Record<string, unknown>): Array<Record<string, unknown>> {
  return Array.isArray(body.messages)
    ? body.messages.filter((message): message is Record<string, unknown> => {
        return !!message && typeof message === 'object';
      })
    : [];
}

function getLatestUserMessage(messages: Array<Record<string, unknown>>): string {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message.role === 'user') {
      return normalizeMessageText(message.message ?? message.content).trim();
    }
  }

  return '';
}

function isAllowedProfileQuestion(text: string): boolean {
  const normalized = text.trim();
  return (
    normalized.length > 0 &&
    (greetingPattern.test(normalized) || allowedTopicPattern.test(normalized))
  );
}

function sanitizePayload(body: Record<string, unknown>): Record<string, unknown> {
  const messages = getMessages(body);
  const limitedMessages = messages.slice(-maxMessages).map((message) => {
    const text = normalizeMessageText(message.message ?? message.content).slice(
      0,
      maxUserMessageLength
    );

    return {
      ...message,
      message: text,
      content: undefined,
    };
  });

  return {
    ...body,
    messages: limitedMessages,
  };
}

export async function handler(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> {
  try {
    if (event.requestContext.http.method === 'OPTIONS') {
      return response(204, '');
    }

    if (!runtimeArn) {
      return response(500, 'AGENTCORE_RUNTIME_ARN is not configured.');
    }

    let payload: unknown;
    try {
      payload = event.body ? JSON.parse(event.body) : {};
    } catch {
      return response(400, 'Request body must be valid JSON.');
    }

    const body = payload as Record<string, unknown>;
    const messages = getMessages(body);
    const latestUserMessage = getLatestUserMessage(messages);

    if (!latestUserMessage) {
      return response(400, 'A user message is required.');
    }

    if (latestUserMessage.length > maxUserMessageLength) {
      return response(
        413,
        `Please keep questions under ${maxUserMessageLength} characters.`
      );
    }

    if (!isAllowedProfileQuestion(latestUserMessage)) {
      return response(200, refusalMessage);
    }

    const sanitizedBody = sanitizePayload(body);
    const sessionId =
      event.headers['x-session-id'] ??
      event.headers['X-Session-Id'] ??
      (typeof body.sessionId === 'string' ? body.sessionId : undefined) ??
      randomUUID();

    const invokeResponse = await client.send(
      new InvokeAgentRuntimeCommand({
        agentRuntimeArn: runtimeArn,
        runtimeSessionId: sessionId,
        qualifier: 'DEFAULT',
        contentType: 'application/json',
        accept: 'text/event-stream',
        payload: Buffer.from(JSON.stringify(sanitizedBody)),
      })
    );

    const text = await collectAgentResponse(invokeResponse);
    return response(200, text);
  } catch (error) {
    console.error('AgentCore proxy failed', error);

    const err = error as {
      name?: string;
      message?: string;
      $metadata?: { httpStatusCode?: number; requestId?: string };
    };

    return response(
      500,
      JSON.stringify({
        error: err.name ?? 'AgentCoreProxyError',
        message: err.message ?? String(error),
        requestId: err.$metadata?.requestId,
        statusCode: err.$metadata?.httpStatusCode,
      }),
      'application/json'
    );
  }
}
