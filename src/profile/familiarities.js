import React from "react";
import Fade from "react-reveal/Fade";
import { SparklesIcon, CpuChipIcon, CloudIcon, CommandLineIcon, BoltIcon, RocketLaunchIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "RPA & Workflow Automation",
    description:
      "Expertise in UiPath and Power Automate for enterprise automation. Designing intelligent bots and end-to-end workflows integrated with Microsoft 365 and Teams environments.",
    icon: <BoltIcon className="h-10 w-10 text-cyan-400" />,
  },
  {
    title: "Microsoft 365 & Copilot Studio",
    description:
      "Developing AI copilots and adaptive workflows using Copilot Studio, Power Platform, and Teams integrations for business-ready automation.",
    icon: <RocketLaunchIcon className="h-10 w-10 text-indigo-400" />,
  },
  {
    title: "Python & Backend Development",
    description:
      "Building scalable APIs using Python, AWS Lambda, and API Gateway. Integrating AI services, authentication layers, and backend automation pipelines.",
    icon: <CommandLineIcon className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "AWS Cloud & Infrastructure",
    description:
      "Deploying on AWS  using Lambda, CloudFormation, and AI service integrations for resilient and intelligent infrastructures.",
    icon: <CloudIcon className="h-10 w-10 text-violet-400" />,
  },
  {
    title: "AI & Generative Technologies",
    description:
      "Working with LLMs, AWS Bedrock, and Azure AI Foundry to design intelligent systems for knowledge extraction, document understanding, vision analysis, summarization, and conversational AI solutions.",
  
    icon: <CpuChipIcon className="h-10 w-10 text-fuchsia-400" />,
  },
  {
    title: "Prompt Engineering & Document Understanding",
    description:
      "Designing optimized prompts, fine-tuned reasoning chains, and intelligent document processing workflows powered by AI and semantic search.",
    icon: <DocumentTextIcon className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Frontend & Full-Stack Development",
    description:
      "Building responsive interfaces with React, Tailwind CSS, and JavaScript. Experienced in Node.js, SQL, and integration with AI-enhanced backends.",
    icon: <SparklesIcon className="h-10 w-10 text-sky-400" />,
  },
];

const Familiarities = () => (
  <div className="relative overflow-hidden py-24 " id="familiarities">
    {/* Background glowing grid */}
    <div className="absolute inset-0  pointer-events-none"></div>
    
    <Fade top>
      <h3 className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-semibold text-3xl sm:text-4xl lg:text-5xl text-center mb-20">
        Skills & Familiarities
      </h3>
    </Fade>

    <div className="container relative mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Fade bottom key={index}>
            <div className="group relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 hover:border-cyan-400/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)] hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center space-y-5">
                <div className="transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 group-hover:text-cyan-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  </div>
);

export default Familiarities;
