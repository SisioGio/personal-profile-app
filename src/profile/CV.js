import React from "react";
import Fade from "react-reveal/Fade";

const experiences = [
  {
    role: "RPA & Low Code Developer",
    company: "Oerlikon Digital Hub",
    location: "Munich, Germany",
    period: "August 2023 - Present",
    responsibilities: [
  "Design and implement GenAI solutions for intelligent document processing using LLMs, including extraction, transformation, enrichment, and workflow automation.",
  "Identify and implement solutions to reduce running costs and optimize existing processes.",
  "Develop AI-driven automations and GenAI agents using cloud services (prompt engineering, AWS Bedrock, Azure AI Foundry).",
  "Develop automation solutions with UiPath and Power Automate.",
  "Analyze business processes for optimization and automation.",
  "Evaluate and select low-code and AI tools based on requirements.",
  "Build cloud-based applications and reusable libraries.",
  "Integrate UiPath, M365, and LLM systems for advanced automation workflows.",
  "Replace and improve legacy solutions.",
  "Document AI-driven automations and guide colleagues on architecture, tool selection, and best practices.",
]
  },
  {
    role: "Business Process Automation Consultant",
    company: "Oerlikon Business Services / Oerlikon Balzers Coating Italy (remote)",
    location: "Warsaw, Poland / Milan, Italy (remote)",
    period: "Feb 2021 - July 2023",
    responsibilities: [
      "Identify key business processes for automation and optimization.",
      "Design and implement RPA, low-code, and AI solutions tailored to business needs.",
      "Optimize workflow efficiency and enhance productivity.",
      "Ensure accuracy and compliance in automated processes.",
      "Disclaimer: Already developing UiPath, Python, and M365 solutions during this period.",
    ],
  },
  {
    role: "AP Accountant",
    company: "Oerlikon Business Services Sp.z o.o.",
    location: "Warsaw, Poland",
    period: "April 2019 - Jan 2021",
    responsibilities: [
      "Manage accounts payable processes ensuring compliance and accuracy.",
      "Identify inefficiencies and suggest process improvements.",
      "Lay the foundation for automation initiatives in finance.",
      "Disclaimer: Already developing UiPath, Python, and M365 solutions in parallel to accounting work.",
    ],
  },
  {
    role: "Cash Collection Clerk",
    company: "Accenture",
    location: "Warsaw, Poland",
    period: "Oct 2017 - Mar 2019",
    responsibilities: [
      "Manage cash collections and maintain accurate financial records.",
      "Identify and resolve process inefficiencies.",
      "Develop attention to detail and understanding of financial processes.",
    ],
  },
];

const CV = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-200 relative overflow-hidden py-24" id="CV">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-blob opacity-50 mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-2xl animate-blob animation-delay-2000 opacity-50 mix-blend-multiply"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 space-y-16 z-10">
        <Fade top big>
          <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-bold text-4xl sm:text-5xl lg:text-6xl">
            Professional Experience
          </h2>
        </Fade>

        <div className="space-y-10 mt-12">
          {experiences.map((exp, index) => (
            <Fade key={index} left distance="50px">
              <div className="relative border-l-4 border-cyan-500 pl-6 sm:pl-10 py-6">
                <div className="absolute -left-2 sm:-left-3 top-6 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <h3 className="text-cyan-400 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-gray-200 text-lg sm:text-xl">{exp.company}</p>
                <p className="text-gray-400 text-base sm:text-lg mb-4">{exp.location} - {exp.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
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
