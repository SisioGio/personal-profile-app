import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <section
    id="home"
    className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/70 to-black/90 z-[-1]" />

    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[25%] left-[15%] w-32 h-32 sm:w-44 sm:h-44 bg-cyan-400/20 blur-3xl animate-pulse rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-40 h-40 sm:w-52 sm:h-52 bg-fuchsia-400/25 blur-3xl animate-pulse delay-500 rounded-full" />
    </div>

    <div className="relative px-6 sm:px-10 max-w-4xl flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white font-extrabold leading-tight text-[clamp(2rem,6vw,4.5rem)]"
      >
        <span className="block text-white/90 text-[clamp(1.2rem,3vw,1.75rem)] font-light mb-2">
          Hey there, I'm
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 drop-shadow-lg">
          Alessio Giovannini
        </span>
        <br />
        <span className="text-white/80 text-[clamp(1rem,3vw,1.75rem)] mt-3 block font-medium">
          RPA / AI / Backend Developer building reliable automation and applied AI systems.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-white/80 text-[clamp(1rem,2.5vw,1.25rem)] mt-6 leading-relaxed tracking-wide max-w-2xl"
      >
        I bring 5+ years of experience across automation, backend services,
        document intelligence, RAG, AI agents, AWS Bedrock, and
        Python/JavaScript systems that connect prototypes to real business
        processes.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-10 inline-block bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 transition-all text-[clamp(1rem,2.5vw,1.25rem)]"
      >
        Explore My Work
      </motion.a>
    </div>
  </section>
);

export default Home;
