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
        payload: Buffer.from(JSON.stringify(body)),
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
