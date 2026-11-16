import React from "react";
import Fade from "react-reveal/Fade";
import {
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
  CommandLineIcon,
  BoltIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Applied AI & LLMs",
    description:
      "RAG, LLM document processing, prompt engineering, knowledge bases, tool calling, AI agents, AWS Bedrock, Claude/Anthropic, Microsoft Copilot, and MCP/A2A exploration.",
    icon: <CpuChipIcon className="h-10 w-10 text-fuchsia-400" />,
  },
  {
    title: "Backend & Cloud",
    description:
      "Python, JavaScript/Node.js, REST APIs, AWS, infrastructure-as-code exposure, asynchronous job handling, and reusable service components.",
    icon: <CommandLineIcon className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Data & Document Pipelines",
    description:
      "Azure OCR, Azure Translator, metadata filtering, reranking, key-value extraction, object/data extraction, PDF processing, and data quality for automation.",
    icon: <DocumentTextIcon className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Automation & Product Integration",
    description:
      "UiPath, Power Automate, Power Apps, SharePoint, M365, SAP BAPI, process analysis, accounting and finance workflows, and digital transformation.",
    icon: <BoltIcon className="h-10 w-10 text-cyan-400" />,
  },
  {
    title: "AI Agent Interfaces",
    description:
      "Conversational agents, knowledge-base interfaces, demo/product web apps, LiveKit exposure, and practical user experiences for applied GenAI workflows.",
    icon: <RocketLaunchIcon className="h-10 w-10 text-indigo-400" />,
  },
  {
    title: "Frontend & Web Apps",
    description:
      "React, HTML, CSS, Tailwind, JavaScript, AI-powered product demos, and interfaces that expose automation and knowledge systems clearly.",
    icon: <SparklesIcon className="h-10 w-10 text-sky-400" />,
  },
  {
    title: "AWS Cloud & Serverless",
    description:
      "AWS Lambda, Bedrock integrations, API Gateway patterns, serverless components, scalable processing, and cost-aware AI service design.",
    icon: <CloudIcon className="h-10 w-10 text-violet-400" />,
  },
];

const Familiarities = () => (
  <div className="relative overflow-hidden py-24" id="familiarities">
    <div className="absolute inset-0 pointer-events-none"></div>

    <Fade top>
      <h3 className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-semibold text-3xl sm:text-4xl lg:text-5xl text-center mb-20">
        Skills & Familiarities
      </h3>
    </Fade>

    <div className="container relative mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Fade bottom key={service.title}>
            <div className="group relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 hover:border-cyan-400/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)] hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center space-y-5">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 group-hover:text-cyan-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  </div>
);

export default Familiarities;
