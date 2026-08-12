import React from "react";
import Fade from "react-reveal/Fade";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, SparklesIcon } from "@heroicons/react/24/outline";

const projects = [
  {
  title: "Document Processing Automation",
  description:
    "End-to-end document understanding system for invoices and delivery notes, combining AWS Lambda, Bedrock, LLMs, and UiPath. Leveraging prompt engineering and generative AI, it extracts, validates, and posts data automatically with over 95% accuracy while keeping costs minimal.",
  technologies: ["AWS", "LLM", "RPA", "UiPath", "APIGateway", "Prompting", "Generative AI"],

},
  {
    title: "Knowledge Bases AI",
    description:
      "Built knowledge retrieval systems using AWS Bedrock and LLMs for document processing, embedding generation, and dynamic Q&A. Enables intelligent context retrieval from large unstructured datasets.",
    technologies: ["LLM", "Bedrock", "DocProcessing"],
  },
  {
    title: "SAP Automations",
    description:
      "Developed RPA bots and Power Automate workflows for SAP finance operations — journal entries, purchase orders, and approval chains — increasing speed and reducing manual work.",
    technologies: ["RPA", "PowerAutomate", "SAP"],
  },
  {
    title: "Reporting Automations",
    description:
      "Automated financial and operational reports using RPA, SQL, and Power Automate. Enabled continuous insights without manual intervention.",
    technologies: ["RPA", "SQL", "PowerAutomate"],
  },
  {
    title: "AI Gallery — Storaro Art",
    description:
      "Developed an AI art gallery (vsvision.storaroart.com) that reconstructs Vittorio Storaro’s creative vision. Extracted text & visuals from books and videos, created a structured knowledge base, cloned his voice, and generated an AI presentation.",
    technologies: ["AI", "Vision", "LLM", "Text2Speech"],
    link: "https://vsvision.storaroart.com",
  },
  {
    title: "Email Marketing Generator",
    description:
      "Combined Bedrock and Perplexity APIs to generate hyper-personalized marketing campaigns from input data files. Powers emailifit.com with tailored copywriting automation.",
    technologies: ["Bedrock", "Perplexity", "API"],
    link: "https://emailifit.com",
  },
  {
    title: "Archintel — Document PDF Automation",
    description:
      "Internal tool for architects — automatically fills PDF forms from uploaded documents using LLM-driven field mapping and validation.",
    technologies: ["LLM", "PDF", "Automation"],
  },
  {
    title: "Automated BNB Check-in",
    description:
      "Fully automated guest onboarding process including document upload, face verification, and data preparation for Italian compliance systems.",
    technologies: ["AI", "Vision", "Verification"],
  },
  {
    title: "Customer Service Agent",
    description:
      "Voice-based customer service agent for US scooter rentals, developed using LiveKit, Bedrock Nova Sonic, and Python to handle natural call interactions.",
    technologies: ["Bedrock", "NovaSonic", "VoiceAI", "Python"],
  },
  {
    title: "Platform for AI Agents",
    description:
      "Built Agents4People (www.agents4people.com), a modular platform for hosting AI-powered task-specific agents with secure authentication and API orchestration.",
    technologies: ["LLM", "Bedrock", "WebApp"],
    link: "https://www.agents4people.com",
  },
  {
    title: "Document Extraction with LLM",
    description:
      "Created Docaiextractor.com to showcase multi-step LLM extraction (PDF → Text → Transformation → Prompt Enrichment → LLM). Stack includes Bedrock, Textract, DynamoDB, Lambda, API, and integrated payment processing.",
    technologies: ["Bedrock", "Textract", "Lambda", "LLM", "Payments"],
    link: "https://docaiextractor.com",
  },
  {
    title: "NFT Collections",
    description:
      "Developed and deployed Ethereum NFT collections (StoraroArt, GreenGangPumpkins). Designed Solidity contracts, rarity algorithms, and full deployment via Remix to mainnet.",
    technologies: ["Solidity", "NFT", "Blockchain", "Remix"],
    link: [{"label":"Storaro Art NFT",'url':"https://opensea.io/collection/storaroart"},{"label":"GreenGangPumpkins NFT",'url':"https://opensea.io/collection/greengangpumpkins"}],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="relative py-20 bg-transparent">
      {/* Section Title */}
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-semibold text-4xl sm:text-5xl lg:text-6xl mb-12">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="container mx-auto px-5 sm:px-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <Fade key={index} bottom duration={800} distance="20px">
            <div className="group relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 hover:border-cyan-400/60 rounded-3xl p-6 flex flex-col transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.4)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-cyan-300 text-lg sm:text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <SparklesIcon className="h-5 w-5 text-fuchsia-400 opacity-70 group-hover:opacity-100 transition" />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-white bg-gradient-to-r from-cyan-600 to-indigo-700 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={typeof project.link === "string" ? project.link : project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-400 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                  {typeof project.link === "string"
                    ? "View Project"
                    : project.link.label || "View Project"}
                </a>
              )}

              {/* Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
