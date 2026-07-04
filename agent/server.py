from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel, Field

from .agent import ask_profile_agent


class ChatMessage(BaseModel):
    role: str = Field(default="user")
    message: str = Field(default="")


class ChatRequest(BaseModel):
    messages: list[ChatMessage] = Field(default_factory=list)
    role: str = Field(default="")
    role_description: str = Field(default="")
    role_task: str = Field(default="")


app = FastAPI(title="Profile Strands Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/bedrock/chat", response_class=PlainTextResponse)
def chat(request: ChatRequest) -> PlainTextResponse:
    try:
        response = ask_profile_agent(
            messages=[message.model_dump() for message in request.messages],
            role=request.role,
            role_description=request.role_description,
            role_task=request.role_task,
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc

    return PlainTextResponse(response)

