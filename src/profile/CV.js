import React from "react";
import Fade from "react-reveal/Fade";

const experiences = [
  {
    role: "RPA Developer",
    company: "N26",
    location: "Barcelona",
    period: "Mar 2026 - Present",
    responsibilities: [
      "Working in an internal banking environment on automation delivery, maintainable workflows, operational reliability, and clear handover documentation.",
    ],
  },
  {
    role: "RPA & Low Code Developer / GenAI Developer",
    company: "Oerlikon Group",
    location: "Warsaw / Milan / Munich",
    period: "Apr 2019 - Feb 2026",
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

const CV = () => {
  return (
    <div
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-200 relative overflow-hidden py-24"
      id="CV"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-blob opacity-50 mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-2xl animate-blob animation-delay-2000 opacity-50 mix-blend-multiply"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 space-y-16 z-10">
        <Fade top big>
          <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-bold text-4xl sm:text-5xl lg:text-6xl">
            Professional Experience
          </h2>
        </Fade>

        <div className="space-y-10 mt-12">
          {experiences.map((exp) => (
            <Fade key={`${exp.company}-${exp.period}`} left distance="50px">
              <div className="relative border-l-4 border-cyan-500 pl-6 sm:pl-10 py-6">
                <div className="absolute -left-2 sm:-left-3 top-6 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <h3 className="text-cyan-400 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1">
                  {exp.role}
                </h3>
                <p className="text-gray-200 text-lg sm:text-xl">{exp.company}</p>
                <p className="text-gray-400 text-base sm:text-lg mb-4">
                  {exp.location} - {exp.period}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
