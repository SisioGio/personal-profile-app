import React from "react";
import { motion } from "framer-motion";

// Every figure below comes from the CV section.
const facts = [
  { value: "95%", label: "lower UiPath AI Unit cost on document processing" },
  { value: "90%+", label: "of delivery notes posted with no manual step" },
  { value: "80k+", label: "engineering documents behind one RAG knowledge base" },
  { value: "500k+", label: "journal entries automated through SAP and UiPath" },
];

// Sample document and sample output: shows what the microservice does, not client data.
const fields = [
  ["document", '"delivery_note"'],
  ["supplier", '"ACME GmbH"'],
  ["po_number", '"4500123456"'],
  ["total_eur", "1280.50"],
  ["confidence", "0.98"],
  ["posted", "true"],
];

const enter = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Pipeline = () => (
  <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-30px_rgba(245,165,36,0.18)]">
    <div className="flex items-center gap-2 border-b border-line px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="ml-3 font-mono text-xs text-muted">bedrock · extract</span>
    </div>

    <div className="grid sm:grid-cols-[0.8fr_1.2fr]">
      {/* the document being read */}
      <div className="relative border-b border-line p-5 sm:border-b-0 sm:border-r">
        <p className="mb-3 font-mono text-[11px] text-muted">delivery-note-sample.pdf</p>
        <div className="relative space-y-2.5 overflow-hidden rounded-lg bg-paper p-4">
          <div className="scan-line" />
          <div className="h-2.5 w-1/2 rounded bg-ink/30" />
          <div className="h-2 w-3/4 rounded bg-line" />
          <div className="h-2 w-2/3 rounded bg-line" />
          <div className="my-3 h-px bg-line" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2">
              <div className="h-2 w-1/4 rounded bg-line" />
              <div className="h-2 flex-1 rounded bg-line" />
              <div className="h-2 w-8 rounded bg-line" />
            </div>
          ))}
          <div className="ml-auto mt-3 h-2.5 w-1/3 rounded bg-ink/30" />
        </div>
      </div>

      {/* what comes out */}
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-muted">
        <span className="text-ink">{"{"}</span>
        {fields.map(([k, v], i) => (
          <span key={k} className="doc-line block pl-4" style={{ "--i": i }}>
            <span className="text-muted">"{k}"</span>
            <span className="text-ink">: </span>
            <span className="doc-mark rounded px-1 text-accent" style={{ "--i": i }}>
              {v}
            </span>
            {i < fields.length - 1 ? "," : ""}
          </span>
        ))}
        <span className="text-ink">{"}"}</span>
      </pre>
    </div>
  </div>
);

const Home = () => (
  <section id="home" className="relative flex min-h-screen flex-col justify-end pt-28">
    <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

    <div className="wrap relative grid flex-1 items-center gap-14 py-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div>
        <motion.p {...enter(0)} className="eyebrow flex items-center gap-3">
          <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Alessio Giovannini · Barcelona
        </motion.p>

        <motion.h1
          {...enter(0.1)}
          className="mt-6 font-display text-[clamp(2.9rem,7.2vw,6.2rem)] leading-[0.98]"
        >
          I make AI work inside <span className="text-accent">real business processes.</span>
        </motion.h1>

        <motion.p {...enter(0.2)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          RPA, AI and backend developer with 5+ years of experience. Document
          processing, RAG and agents on AWS Bedrock, wired into the finance
          and banking systems that run on UiPath and SAP. Now at N26.
        </motion.p>

        <motion.div {...enter(0.3)} className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="btn btn-solid">
            See my projects
          </a>
          <a href="#contact" className="btn btn-line">
            Send a message
          </a>
        </motion.div>
      </div>

      <motion.div {...enter(0.35)}>
        <Pipeline />
      </motion.div>
    </div>

    <motion.dl
      {...enter(0.5)}
      className="wrap relative grid grid-cols-2 border-t border-line lg:grid-cols-4"
    >
      {facts.map((f, i) => (
        <div
          key={f.value}
          className={`py-7 pr-6 ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${
            i % 2 === 1 ? "border-l border-line pl-6 lg:pl-8" : ""
          }`}
        >
          <dt className="font-display text-4xl leading-none text-accent sm:text-5xl">{f.value}</dt>
          <dd className="mt-3 max-w-[16rem] text-sm leading-snug text-muted">{f.label}</dd>
        </div>
      ))}
    </motion.dl>
  </section>
);

export default Home;
