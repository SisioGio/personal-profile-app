# Profile Strands Agent

This service exposes a Strands-powered chat endpoint that matches the existing React app payload:

```text
POST /bedrock/chat
```

## Setup

```powershell
cd agent
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn agent.server:app --reload --host 127.0.0.1 --port 8000 --app-dir ..
```

Strands uses Amazon Bedrock by default. Configure AWS credentials and model access before invoking the agent, or configure another Strands model provider in `agent.py`.

Point the React app at the local service:

```text
REACT_APP_BEDROCK_ENDPOINT=http://127.0.0.1:8000
```

