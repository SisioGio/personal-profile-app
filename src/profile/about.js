import React from "react";
import Fade from "react-reveal/Fade";
import useIsVisible from "./useIsVisible";

const sections = [
  {
    title: "Background & Education",
    content:
      "I hold a B.Sc. in Computer Science from the Polish-Japanese Institute of Information Technology. Working while studying helped me build a practical, resilient way of learning and solving problems.",
  },
  {
    title: "Automation Roots",
    content:
      "My path started in RPA and process automation. I have delivered finance, accounting, SAP-facing, administrative, and operational workflows with UiPath, Power Automate, M365, and reusable automation components.",
  },
  {
    title: "Applied AI Engineering",
    content:
      "In recent years I moved deeper into LLM-based document processing, RAG, AI agents, AWS Bedrock, Azure OCR, prompt engineering, tool calling, and knowledge-base evaluation.",
  },
  {
    title: "Backend & Cloud",
    content:
      "I build Python and JavaScript/Node.js services, REST APIs, asynchronous processing packages, serverless components, and cloud-native integrations that make AI systems reliable and maintainable.",
  },
  {
    title: "Business Bridge",
    content:
      "I enjoy connecting prototypes to real business processes, documenting architectures clearly, reducing costs, and acting as a bridge between finance, IT, automation, and AI stakeholders.",
  },
  {
    title: "Current Focus",
    content:
      "I am focused on production-grade automation delivery, maintainable workflows, operational reliability, document intelligence, RAG pipelines, and practical AI agents.",
  },
];

const About = () => {
  const [, ref] = useIsVisible();

  return (
    <div
      ref={ref}
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-200 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-blob opacity-50 mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-2xl animate-blob animation-delay-2000 opacity-50 mix-blend-multiply"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 space-y-16">
        <Fade top big>
          <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-bold text-4xl sm:text-5xl lg:text-6xl">
            About Me
          </h2>
        </Fade>

        <Fade bottom distance="50px">
          <p className="text-lg sm:text-xl leading-relaxed text-center">
            I am <span className="font-bold text-cyan-400">Alessio Giovannini</span>,
            an <span className="font-semibold text-indigo-400">RPA / AI / Backend Developer</span>{" "}
            based in Barcelona, with 5+ years of experience in automation,
            backend work, and applied AI. I like the practical part of AI
            engineering: taking an idea or prototype, connecting it to real
            business processes, and making it reliable, maintainable, and
            cost-effective enough to be useful in production.
          </p>
        </Fade>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <Fade
              key={section.title}
              direction={index % 2 === 0 ? "left" : "right"}
              distance="50px"
            >
              <div className="relative p-6 sm:p-8 bg-white/5 border border-cyan-500/20 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.4)] transition-all duration-500">
                <h3 className="text-cyan-400 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
