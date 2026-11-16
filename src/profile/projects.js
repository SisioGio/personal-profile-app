import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "LLM document-processing microservice",
    description:
      "AWS Bedrock and Azure OCR service for PDF extraction with dynamic prompt generation, field descriptions, examples, transformations, and low-cost scalable processing below $0.01/page.",
    technologies: ["AWS", "Bedrock", "Azure OCR", "LLM", "PDF", "Prompting"],
  },
  {
    title: "RAG technical knowledge base",
    description:
      "AI-powered knowledge base over 80k+ unstructured mechanical engineering documents with classification, translation, metadata filtering, reranking, and retrieval-ready enrichment.",
    technologies: ["RAG", "Knowledge Base", "Reranking", "Translation", "Metadata"],
  },
  {
    title: "Internal AI agents",
    description:
      "Agent use cases for reporting, procedure consultation, and Q&A, including tool calling, knowledge-base access, and agent collaboration patterns.",
    technologies: ["AI Agents", "Tool Calling", "Bedrock", "Copilot", "Q&A"],
  },
  {
    title: "docaiextractor.com",
    description:
      "Public demo of a custom document-processing approach focused on practical extraction quality, cost efficiency, and applied AI delivery.",
    technologies: ["Document AI", "Extraction", "Textract", "Lambda", "Payments"],
    links: [{ label: "Open docaiextractor.com", url: "https://docaiextractor.com" }],
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
    title: "Finbotix property apps",
    description:
      "Document-understanding apps for Italian property managers and architects, extracting data from uploaded documents and generating required forms and files.",
    technologies: ["Document AI", "PDF", "Forms", "Automation", "Property Tech"],
    links: [
      { label: "Airbnb Finbotix", url: "https://airbnb.finbotix.de" },
      { label: "Archintel", url: "https://archintel.finbotix.de" },
    ],
  },
  {
    title: "SAP & finance automations",
    description:
      "Automation of AP posting, journal entries, intercompany charges, and finance workflows using UiPath, SAP BAPI, Power Automate, and Microsoft Power Platform.",
    technologies: ["UiPath", "SAP BAPI", "Power Automate", "Finance", "RPA"],
  },
  {
    title: "AI gallery for Storaro Art",
    description:
      "AI gallery built from historical books and video data around Vittorio Storaro, with unstructured data processing, a knowledge base, voice cloning, and AI-generated presentation material.",
    technologies: ["AI", "Vision", "LLM", "Text-to-Speech"],
    links: [{ label: "Open the gallery", url: "https://vsvision.storaroart.com" }],
  },
  {
    title: "NFT collections",
    description:
      "Ethereum NFT collections including StoraroArt and GreenGangPumpkins, with Solidity contracts, rarity logic, and mainnet deployment through Remix.",
    technologies: ["Solidity", "NFT", "Blockchain", "Remix"],
    links: [
      { label: "StoraroArt", url: "https://opensea.io/collection/storaroart" },
      { label: "GreenGangPumpkins", url: "https://opensea.io/collection/greengangpumpkins" },
    ],
  },
];

const spans = [
  "lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2",
  "lg:col-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-3",
];

const Projects = () => (
  <section id="projects" className="border-t border-line bg-surface py-24 sm:py-32">
    <div className="wrap">
      <p className="eyebrow">Projects</p>
      <h2 className="h2 mt-4 max-w-3xl">Nine things I built, from bank workflows to NFT contracts.</h2>

      <ul className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className={`group flex flex-col bg-paper p-7 transition duration-200 hover:bg-surface ${spans[i]} ${i < 2 ? "lg:p-10" : ""}`}
          >
            <span className="font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={`mt-4 font-display leading-tight ${i === 0 || i === 6 ? "text-4xl" : "text-3xl"}`}>{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {project.links && (
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-6">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-accent"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
