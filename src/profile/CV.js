import React from "react";

const experiences = [
  {
    role: "RPA Developer",
    company: "N26",
    location: "Barcelona",
    period: "Mar 2026 – Present",
    responsibilities: [
      "Working in an internal banking environment on automation delivery, maintainable workflows, operational reliability, and clear handover documentation.",
    ],
  },
  {
    role: "RPA & Low Code Developer / GenAI Developer",
    company: "Oerlikon Group",
    location: "Warsaw / Milan / Munich",
    period: "Apr 2019 – Feb 2026",
    responsibilities: [
      "Designed and implemented an AWS-based GenAI microservice for intelligent document processing using AWS Bedrock and Azure OCR; reduced UiPath AI Unit costs by 95% and achieved over 90% automated posting on delivery notes.",
      "Built advanced RAG pipelines over 80k+ complex mechanical engineering documents, including classification, object/data extraction, PDF translation, metadata filtering, reranking, and key-value extraction.",
      "Developed internal AI agent prototypes and use cases for reporting, procedure consultation, and Q&A using tool calling, knowledge-base evaluation, Bedrock, Microsoft Copilot, and early agent-to-agent patterns.",
      "Integrated LLM-based systems with UiPath, Power Automate, M365, and SAP-facing workflows to replace legacy automation steps and connect AI services to real business processes.",
      "Built reusable cloud components, internal frameworks, and asynchronous processing packages to reduce implementation time and improve maintainability.",
      "Automated finance and administrative workflows including AP posting, journal entries, and intercompany charges; processed 500k+ journal entries and 20k+ invoices through UiPath, SAP BAPI, and Microsoft Power Platform.",
      "Acted as a bridge between finance, IT, and AI stakeholders; documented architectures, evaluated AI/low-code platforms, and upskilled colleagues on AI, cloud, and automation practices.",
    ],
  },
];

const CV = () => (
  <section id="CV" className="border-t border-line py-24 sm:py-32">
    <div className="wrap">
      <p className="eyebrow">Experience</p>
      <h2 className="h2 mt-4 max-w-3xl">From finance bots to production AI.</h2>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="grid gap-6 py-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16"
          >
            <header>
              <p className="font-mono text-sm text-accent">{exp.period}</p>
              <h3 className="mt-3 font-display text-4xl leading-tight">{exp.company}</h3>
              <p className="mt-2 text-muted">{exp.role}</p>
              <p className="text-sm text-muted">{exp.location}</p>
            </header>
            <ul className="space-y-4 text-base leading-relaxed">
              {exp.responsibilities.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CV;
