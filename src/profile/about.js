import React from "react";

const sections = [
  {
    title: "Background and education",
    content:
      "B.Sc. in Computer Science from the Polish-Japanese Institute of Information Technology. Working while studying gave me a practical, resilient way of learning and solving problems.",
  },
  {
    title: "Automation roots",
    content:
      "I started in RPA and process automation: finance, accounting, SAP-facing, administrative and operational workflows with UiPath, Power Automate, M365 and reusable components.",
  },
  {
    title: "Applied AI engineering",
    content:
      "Lately I work on LLM document processing, RAG, AI agents, AWS Bedrock, Azure OCR, tool calling and knowledge-base evaluation.",
  },
  {
    title: "Current focus",
    content:
      "Production-grade automation delivery, maintainable workflows, operational reliability, document intelligence, RAG pipelines and practical AI agents.",
  },
];

const About = () => (
  <section id="about" className="border-t border-line py-24 sm:py-32">
    <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
      <div>
        <p className="eyebrow">About</p>
        <h2 className="h2 mt-4">I take a prototype and make it work in production.</h2>
        <p className="mt-8 text-lg leading-relaxed text-muted">
          I am based in Barcelona, with 5+ years in automation, backend work and
          applied AI. I like the practical part: connecting an idea to a real
          business process, then making it reliable, maintainable and cheap
          enough to keep.
        </p>
        <p className="mt-6 leading-relaxed text-muted">
          I enjoy documenting architectures clearly, reducing costs, and
          acting as the bridge between finance, IT, automation and AI teams.
        </p>
      </div>

      <dl className="divide-y divide-line border-y border-line">
        {sections.map((s) => (
          <div key={s.title} className="grid gap-2 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-accent sm:pt-1">
              {s.title}
            </dt>
            <dd className="leading-relaxed">{s.content}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default About;
