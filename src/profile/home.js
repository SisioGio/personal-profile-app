import React from "react";
import { motion } from "framer-motion";

// Every figure below comes from the CV section.
const facts = [
  { value: "95%", label: "lower UiPath AI Unit cost on document processing" },
  { value: "90%+", label: "of delivery notes posted with no manual step" },
  { value: "80k+", label: "engineering documents behind one RAG knowledge base" },
  { value: "500k+", label: "journal entries automated through SAP and UiPath" },
];

const enter = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Home = () => (
  <section
    id="home"
    className="flex min-h-screen items-center pt-24 pb-12"
  >
    <div className="wrap grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
      <div>
        <motion.p {...enter(0)} className="eyebrow flex items-center gap-3">
          <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Barcelona · RPA Developer at N26
        </motion.p>

        <motion.h1
          {...enter(0.1)}
          className="mt-6 font-display text-[clamp(3.25rem,8.5vw,7rem)] leading-[0.95] tracking-tight"
        >
          Alessio Giovannini.
          <span className="mt-3 block text-[0.52em] leading-[1.05] text-muted">
            RPA, AI and backend developer.
          </span>
        </motion.h1>

        <motion.p {...enter(0.2)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          I build document processing, RAG and AI agents on AWS Bedrock, and
          connect them to the finance and banking processes that run on UiPath
          and SAP. 5+ years, from the first bot to production.
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

      <motion.dl
        {...enter(0.4)}
        className="grid grid-cols-2 border-l border-t border-line"
      >
        {facts.map((f) => (
          <div
            key={f.value}
            className="border-b border-r border-line p-6 transition duration-200 hover:bg-surface sm:p-8"
          >
            <dt className="font-display text-5xl leading-none text-accent sm:text-6xl">
              {f.value}
            </dt>
            <dd className="mt-4 text-sm leading-snug text-muted">{f.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Home;
