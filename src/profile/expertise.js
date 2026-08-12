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
    title: "LLM Document Processing",
    description:
      "Designing document-processing microservices with AWS Bedrock, Azure OCR, dynamic prompts, field descriptions, examples, transformations, and scalable processing below $0.01/page.",
    icon: <HiOutlineDocumentMagnifyingGlass size={50} className="text-indigo-400" />,
  },
  {
    title: "RAG Technical Knowledge Bases",
    description:
      "Building RAG pipelines over large unstructured document sets, including classification, translation, metadata filtering, reranking, retrieval-ready enrichment, and knowledge-base evaluation.",
    icon: <HiOutlineCpuChip size={50} className="text-indigo-400" />,
  },
  {
    title: "Internal AI Agents",
    description:
      "Developing agent use cases for reporting, procedure consultation, and Q&A, with tool calling, knowledge-base access, Bedrock, Microsoft Copilot, and agent collaboration patterns.",
    icon: <HiOutlineSparkles size={50} className="text-indigo-400" />,
  },
  {
    title: "Conversational & Voice AI",
    description:
      "Creating conversational-agent platforms and demos with Bedrock Nova Sonic, ElevenLabs, LiveKit exposure, and practical interfaces for applied GenAI workflows.",
    icon: <HiOutlineChatBubbleBottomCenterText size={50} className="text-indigo-400" />,
  },
  {
    title: "Automation & Cloud Integration",
    description:
      "Connecting LLM systems with UiPath, Power Automate, M365, SAP-facing workflows, AWS Lambda, API services, and asynchronous backend processing.",
    icon: <HiOutlineCloud size={50} className="text-indigo-400" />,
  },
  {
    title: "Production AI Infrastructure",
    description:
      "Turning prototypes into reliable systems through reusable cloud components, internal frameworks, clear documentation, cost reduction, and maintainable operational handovers.",
    icon: <HiOutlineServer size={50} className="text-indigo-400" />,
  },
];

const Expertise = () => (
  <section className="py-20 relative" id="expertise">
    <Fade top>
      <h3 className="text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-4xl sm:text-5xl lg:text-6xl py-10">
        AI-Driven Expertise
      </h3>
    </Fade>
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/70 to-black/90 z-[-1]" />

    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[20%] left-[15%] w-28 h-28 sm:w-40 sm:h-40 bg-cyan-400/20 blur-3xl animate-pulse rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-36 h-36 sm:w-48 sm:h-48 bg-fuchsia-400/20 blur-3xl animate-pulse delay-700 rounded-full" />
    </div>

    <div className="container mx-auto px-4 md:px-10 lg:px-20">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Fade bottom distance="200px" key={service.title}>
            <div className="relative group rounded-3xl bg-gray-900/50 border border-indigo-500/20 p-8 text-center shadow-xl transition-transform transform hover:scale-105 hover:shadow-indigo-500/20">
              <div className="flex justify-center mb-6 transition-transform group-hover:scale-110">
                <div className="p-5 bg-indigo-900/30 rounded-2xl border border-indigo-500/20 backdrop-blur-md">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
