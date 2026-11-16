import React from "react";
import Fade from "react-reveal/Fade";
import { ArrowTopRightOnSquareIcon, SparklesIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "LLM Document-Processing Microservice",
    description:
      "AWS Bedrock and Azure OCR service for PDF extraction with dynamic prompt generation, field descriptions, examples, transformations, and low-cost scalable processing below $0.01/page.",
    technologies: ["AWS", "Bedrock", "Azure OCR", "LLM", "PDF", "Prompting"],
  },
  {
    title: "RAG Technical Knowledge Base",
    description:
      "AI-powered knowledge base over 80k+ unstructured mechanical engineering documents with classification, translation, metadata filtering, reranking, and retrieval-ready enrichment.",
    technologies: ["RAG", "Knowledge Base", "Reranking", "Translation", "Metadata"],
  },
  {
    title: "Internal AI Agents",
    description:
      "Agent use cases for reporting, procedure consultation, and Q&A, including tool calling, knowledge-base access, and agent collaboration patterns.",
    technologies: ["AI Agents", "Tool Calling", "Bedrock", "Copilot", "Q&A"],
  },
  {
    title: "docaiextractor.com",
    description:
      "Public demo of a custom document-processing approach focused on practical extraction quality, cost efficiency, and applied AI delivery.",
    technologies: ["Document AI", "Extraction", "Textract", "Lambda", "Payments"],
    links: [{ label: "View Project", url: "https://docaiextractor.com" }],
  },
  {
    title: "Agents4People & Emailifit",
    description:
      "Conversational-agents platform using ElevenLabs and Bedrock Nova Sonic S2S, plus AI email-generation demos using customer research and Claude-based generation.",
    technologies: ["Bedrock", "Nova Sonic", "ElevenLabs", "Claude", "Voice AI"],
    links: [
      { label: "Agents4People", url: "https://www.agents4people.com" },
      { label: "Emailifit", url: "https://emailifit.com" },
    ],
  },
  {
    title: "Finbotix Property Apps",
    description:
      "Document-understanding apps for Italian property managers and architects, extracting data from uploaded documents and generating required forms and files.",
    technologies: ["Document AI", "PDF", "Forms", "Automation", "Property Tech"],
    links: [
      { label: "Airbnb Finbotix", url: "https://airbnb.finbotix.de" },
      { label: "Archintel", url: "https://archintel.finbotix.de" },
    ],
  },
  {
    title: "SAP & Finance Automations",
    description:
      "Automation of AP posting, journal entries, intercompany charges, and finance workflows using UiPath, SAP BAPI, Power Automate, and Microsoft Power Platform.",
    technologies: ["UiPath", "SAP BAPI", "Power Automate", "Finance", "RPA"],
  },
  {
    title: "AI Gallery - Storaro Art",
    description:
      "AI gallery built from historical books and video data around Vittorio Storaro, with unstructured data processing, a knowledge base, voice cloning, and AI-generated presentation material.",
    technologies: ["AI", "Vision", "LLM", "Text-to-Speech"],
    links: [{ label: "View Project", url: "https://vsvision.storaroart.com" }],
  },
  {
    title: "NFT Collections",
    description:
      "Ethereum NFT collections including StoraroArt and GreenGangPumpkins, with Solidity contracts, rarity logic, and mainnet deployment through Remix.",
    technologies: ["Solidity", "NFT", "Blockchain", "Remix"],
    links: [
      { label: "Storaro Art NFT", url: "https://opensea.io/collection/storaroart" },
      { label: "GreenGangPumpkins NFT", url: "https://opensea.io/collection/greengangpumpkins" },
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="relative py-20 bg-transparent">
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-semibold text-4xl sm:text-5xl lg:text-6xl mb-12">
        Key Projects & Initiatives
      </h2>

      <div className="container mx-auto px-5 sm:px-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project) => (
          <Fade key={project.title} bottom duration={800} distance="20px">
            <div className="group relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 hover:border-cyan-400/60 rounded-3xl p-6 flex flex-col transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.4)]">
              <div className="flex items-center justify-between mb-3 gap-3">
                <h3 className="text-cyan-300 text-lg sm:text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <SparklesIcon className="h-5 w-5 shrink-0 text-fuchsia-400 opacity-70 group-hover:opacity-100 transition" />
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-white bg-gradient-to-r from-cyan-600 to-indigo-700 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.links && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-400 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
