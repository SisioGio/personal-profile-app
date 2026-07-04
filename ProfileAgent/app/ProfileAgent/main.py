from collections import OrderedDict
from typing import Any

from bedrock_agentcore.runtime import BedrockAgentCoreApp
from strands import Agent, tool
from strands.agent.conversation_manager.null_conversation_manager import (
    NullConversationManager,
)
from strands_tools import current_time

from model.load import load_model


app = BedrockAgentCoreApp()
log = app.logger

PROFILE_CONTEXT = """
Alessio Giovannini is a Computer Science Engineering graduate from the
Polish-Japanese Institute of Information Technology. He is focused on
automation, cloud technologies, AWS, serverless systems, Robotic Process
Automation, Generative AI, vector databases, retrieval augmented generation,
document intelligence, and conversational AI.

Core expertise:
- AI LLM and knowledge-base systems with contextual retrieval.
- AI document intelligence for OCR, entity recognition, semantic search,
  embeddings, and vector databases.
- Conversational agents on AWS Bedrock, including specialized task agents.
- Microsoft Teams chatbots for secure internal data and workflow access.
- Automation and cloud integration with RPA, Power Automate, AWS Lambda, and
  API Gateway.
- Enterprise AI infrastructure using vector databases, APIs, microservices,
  monitoring, and production deployment patterns.

Projects:
- Document Processing Automation for invoices and delivery notes using AWS
  Lambda, Bedrock, LLMs, UiPath, API Gateway, prompt engineering, and RPA.
- Knowledge Bases AI using AWS Bedrock and LLMs for document processing,
  embeddings, and dynamic Q&A.
- SAP Automations using RPA and Power Automate for finance operations.
- Reporting Automations using RPA, SQL, and Power Automate.
- AI Gallery - Storaro Art at https://vsvision.storaroart.com, built from
  historical books/videos, structured knowledge, voice cloning, and AI
  presentation generation.
- Email Marketing Generator at https://emailifit.com, combining Bedrock and
  Perplexity APIs for personalized marketing campaigns.
- Archintel, an internal LLM-based PDF form automation tool for architects.
- Automated BNB check-in with document upload, face verification, data
  extraction, and Italian compliance preparation.
- Customer Service Agent for US scooter rentals using LiveKit, Bedrock Nova
  Sonic, and Python.
- Agents4People at https://www.agents4people.com, a modular platform for
  hosting secure AI task agents.
- Docaiextractor at https://docaiextractor.com, an LLM document extraction
  showcase using Bedrock, Textract, DynamoDB, Lambda, API, authentication, and
  payments.
- NFT collections including StoraroArt and GreenGangPumpkins, with Solidity
  contracts designed, compiled, and deployed through Remix to Ethereum.

Certifications:
- Oracle AI Vector Search Certified Professional.
- Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.
- HackerRank Software Engineer.
- HackerRank Rest API.
"""

DEFAULT_SYSTEM_PROMPT = """
You are Alessio's profile assistant, deployed on Amazon Bedrock AgentCore with
Strands Agents.

Answer in a concise, helpful, conversational style. Use the profile_context tool
when users ask about Alessio, his background, work, skills, certifications,
projects, or portfolio. If the profile context does not contain the answer, say
what is known and avoid inventing details.
"""


@tool
def profile_context(topic: str = "") -> str:
    """
    Return local portfolio context for questions about Alessio.

    Args:
        topic: Optional topic to prioritize.
    """
    if topic:
        return f"Requested topic: {topic}\n\n{PROFILE_CONTEXT}"

    return PROFILE_CONTEXT


tools = [current_time, profile_context]


def _make_conversation_manager() -> NullConversationManager:
    return NullConversationManager()


def agent_factory():
    cache: OrderedDict[str, Agent] = OrderedDict()

    def get_or_create_agent(session_id: str) -> Agent:
        if session_id in cache:
            cache.move_to_end(session_id)
            return cache[session_id]

        if len(cache) >= 128:
            cache.popitem(last=False)

        cache[session_id] = Agent(
            model=load_model(),
            system_prompt=DEFAULT_SYSTEM_PROMPT,
            tools=tools,
            conversation_manager=_make_conversation_manager(),
        )
        return cache[session_id]

    return get_or_create_agent


get_or_create_agent = agent_factory()


def _extract_prompt(payload: dict[str, Any]) -> Any:
    if "messages" in payload:
        transcript = []
        for message in payload["messages"]:
            role = message.get("role", "user")
            content = message.get("message") or message.get("content") or ""
            if not content:
                continue
            speaker = "Assistant" if role in {"you", "assistant"} else "User"
            transcript.append(f"{speaker}: {content}")

        if transcript:
            return "\n".join(transcript) + "\nAssistant:"

        return "User: Hello"

    if "input" in payload and isinstance(payload["input"], dict):
        return payload["input"].get("prompt", "")

    return payload.get("prompt", "")


@app.entrypoint
async def invoke(payload, context):
    session_id = getattr(context, "session_id", "default-session")
    agent = get_or_create_agent(session_id)
    prompt = _extract_prompt(payload)

    log.info("Invoking ProfileAgent for session %s", session_id)

    async for event in agent.stream_async(prompt):
        if isinstance(event, dict) and "event" in event:
            yield event


if __name__ == "__main__":
    app.run()
