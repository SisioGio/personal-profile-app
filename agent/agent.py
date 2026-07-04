from pathlib import Path
from typing import Iterable

from strands import Agent, tool
from strands_tools import current_time


PROJECT_ROOT = Path(__file__).resolve().parents[1]
PROFILE_FILES = (
    "src/profile/about.js",
    "src/profile/expertise.js",
    "src/profile/familiarities.js",
    "src/profile/projects.js",
    "src/profile/certificates.txt",
    "src/profile/main_projects.txt",
)


@tool
def profile_context(topic: str = "") -> str:
    """
    Read the local portfolio profile content for answering questions about Alessio.

    Args:
        topic: Optional topic to prioritize while reviewing the profile content.

    Returns:
        A compact text summary of available local profile files.
    """
    sections = []

    for relative_path in PROFILE_FILES:
        path = PROJECT_ROOT / relative_path
        if not path.exists():
            continue

        text = path.read_text(encoding="utf-8", errors="ignore").strip()
        if not text:
            continue

        sections.append(f"## {relative_path}\n{text[:3000]}")

    if not sections:
        return "No local profile content was found."

    prefix = f"Relevant topic: {topic}\n\n" if topic else ""
    return prefix + "\n\n".join(sections)[:12000]


def build_system_prompt(role: str, role_description: str, role_task: str) -> str:
    role_line = role or "Profile assistant"
    description = role_description or "Help visitors learn about Alessio and his work."
    task = role_task or "Answer clearly, practically, and conversationally."

    return (
        f"You are {role_line}.\n"
        f"Role description: {description}\n"
        f"Task: {task}\n\n"
        "You are embedded in Alessio's profile app. Use the profile_context tool "
        "when the user asks about Alessio, his projects, skills, experience, or "
        "certifications. Keep answers concise and useful."
    )


def build_prompt(messages: Iterable[dict]) -> str:
    transcript = []

    for message in messages:
        role = message.get("role", "user")
        content = message.get("message", "")
        if not content:
            continue

        speaker = "Assistant" if role in {"you", "assistant"} else "User"
        transcript.append(f"{speaker}: {content}")

    if not transcript:
        return "User: Hello"

    return "\n".join(transcript) + "\nAssistant:"


def ask_profile_agent(
    messages: list[dict],
    role: str = "",
    role_description: str = "",
    role_task: str = "",
) -> str:
    agent = Agent(
        system_prompt=build_system_prompt(role, role_description, role_task),
        tools=[current_time, profile_context],
        callback_handler=None,
    )

    result = agent(build_prompt(messages))
    return str(result)

