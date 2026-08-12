import React from "react";
import Fade from "react-reveal/Fade";
import {
  HiOutlineCpuChip,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCloud,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineServer,
  HiOutlineSparkles,
} from "react-icons/hi2";

const services = [
  {
    title: "AI LLM & Knowledge Bases",
    description:
      "Designing intelligent systems powered by Large Language Models (LLMs) that understand organizational context. I build domain-specific knowledge bases, enabling retrieval-augmented generation (RAG) for smarter, context-aware AI responses.",
    icon: <HiOutlineCpuChip size={50} className="text-indigo-400" />,
  },
  {
    title: "AI Document Intelligence",
    description:
      "Building document extraction pipelines using LLMs for OCR, entity recognition, and semantic search. Transform unstructured data into actionable knowledge using advanced embeddings and vector databases.",
    icon: <HiOutlineDocumentMagnifyingGlass size={50} className="text-indigo-400" />,
  },
  {
    title: "Conversational Agents & Bedrock",
    description:
      "Developing agent systems with AWS Bedrock — orchestrating specialized AI agents that collaborate intelligently across tasks like data retrieval, reasoning, and user engagement.",
    icon: <HiOutlineSparkles size={50} className="text-indigo-400" />,
  },
  {
    title: "Chatbots for Microsoft Teams",
    description:
      "Integrating conversational AI directly within Teams. Empowering users to interact with internal data, automate workflows, and retrieve documents via natural dialogue — securely and in real time.",
    icon: <HiOutlineChatBubbleBottomCenterText size={50} className="text-indigo-400" />,
  },
  {
    title: "Automation & Cloud Integration",
    description:
      "Connecting AI workflows with RPA, Power Automate, and AWS Lambda for seamless orchestration. Automate decision-making and data flows with intelligent, serverless backend systems.",
    icon: <HiOutlineCloud size={50} className="text-indigo-400" />,
  },
  {
    title: "Enterprise AI Infrastructure",
    description:
      "Architecting scalable AI solutions using vector databases, API gateways, and microservices. Secure deployment and monitoring pipelines ensure compliance and reliability in production environments.",
    icon: <HiOutlineServer size={50} className="text-indigo-400" />,
  },
];

const Expertise = () => (
  <section className=" py-20 relative" id="expertise">
    <Fade top>
      <h3 className="text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-4xl sm:text-5xl lg:text-6xl py-10">
        AI-Driven Expertise
      </h3>
    </Fade>
 <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/70 to-black/90 z-[-1]" />

    {/* Floating light orbs (soft on mobile) */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[20%] left-[15%] w-28 h-28 sm:w-40 sm:h-40 bg-cyan-400/20 blur-3xl animate-pulse rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-36 h-36 sm:w-48 sm:h-48 bg-fuchsia-400/20 blur-3xl animate-pulse delay-700 rounded-full" />
    </div>



    <div className="container mx-auto px-4 md:px-10 lg:px-20">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Fade bottom distance="200px" key={index}>
            <div className="relative group rounded-3xl bg-gray-900/50 border border-indigo-500/20 p-8 text-center shadow-xl transition-transform transform hover:scale-105 hover:shadow-indigo-500/20">
              {/* Icon */}
              <div className="flex justify-center mb-6 transition-transform group-hover:scale-110">
                <div className="p-5 bg-indigo-900/30 rounded-2xl border border-indigo-500/20 backdrop-blur-md">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                {service.description}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
