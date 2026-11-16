import React from "react";

const services = [
  {
    title: "LLM document processing",
    description:
      "Microservices on AWS Bedrock and Azure OCR with dynamic prompts, field descriptions, examples and transformations, at under $0.01 a page.",
  },
  {
    title: "RAG knowledge bases",
    description:
      "Pipelines over large unstructured document sets: classification, translation, metadata filtering, reranking and evaluation.",
  },
  {
    title: "Internal AI agents",
    description:
      "Agents for reporting, procedure consultation and Q&A, with tool calling, knowledge-base access, Bedrock and Microsoft Copilot.",
  },
  {
    title: "Conversational and voice AI",
    description:
      "Agent platforms and demos with Bedrock Nova Sonic and ElevenLabs, with LiveKit exposure.",
  },
  {
    title: "Automation and cloud integration",
    description:
      "LLM systems wired into UiPath, Power Automate, M365 and SAP workflows through AWS Lambda and asynchronous APIs.",
  },
  {
    title: "Production AI infrastructure",
    description:
      "Reusable cloud components and internal frameworks, with the documentation and handover that keep them running.",
  },
];

const Expertise = () => (
  <section id="expertise" className="border-t border-line py-24 sm:py-32">
    <div className="wrap">
      <p className="eyebrow">What I build</p>
      <h2 className="h2 mt-4 max-w-3xl">Six kinds of work I can take on.</h2>

      <ol className="mt-16 grid gap-x-16 sm:grid-cols-2">
        {services.map((s, i) => (
          <li
            key={s.title}
            className="group grid grid-cols-[3rem_1fr] border-t border-line py-8"
          >
            <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-3xl leading-tight transition-colors duration-200 group-hover:text-accent">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Expertise;
