import React from "react";
import {
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiAmazonwebservices,
  SiAwslambda,
  SiMicrosoftazure,
  SiAnthropic,
  SiUipath,
  SiPowerautomate,
  SiMicrosoftsharepoint,
  SiSap,
  SiSolidity,
} from "react-icons/si";

// Each icon keeps its product's own colour.
const groups = [
  {
    title: "Applied AI and LLMs",
    note: "RAG, prompt engineering, knowledge bases, tool calling, Microsoft Copilot, MCP and A2A exploration.",
    tools: [
      { name: "AWS Bedrock", Icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Claude", Icon: SiAnthropic, color: "#191919" },
      { name: "Azure OCR", Icon: SiMicrosoftazure, color: "#0078D4" },
    ],
  },
  {
    title: "Backend and cloud",
    note: "REST APIs, asynchronous job handling, reusable service components, infrastructure-as-code exposure.",
    tools: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "AWS Lambda", Icon: SiAwslambda, color: "#FF9900" },
    ],
  },
  {
    title: "Automation and finance",
    note: "Process analysis, accounting and finance workflows, digital transformation.",
    tools: [
      { name: "UiPath", Icon: SiUipath, color: "#FA4616" },
      { name: "Power Automate", Icon: SiPowerautomate, color: "#0066FF" },
      { name: "SharePoint", Icon: SiMicrosoftsharepoint, color: "#0078D4" },
      { name: "SAP BAPI", Icon: SiSap, color: "#0FAAFF" },
    ],
  },
  {
    title: "Frontend and web apps",
    note: "Product demos and interfaces that expose automation and knowledge systems clearly.",
    tools: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Solidity", Icon: SiSolidity, color: "#363636" },
    ],
  },
];

const Familiarities = () => (
  <section id="familiarities" className="border-t border-line bg-surface py-24 sm:py-32">
    <div className="wrap">
      <p className="eyebrow">Skills</p>
      <h2 className="h2 mt-4 max-w-3xl">The tools I use every week.</h2>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {groups.map((g) => (
          <div key={g.title} className="grid gap-6 py-8 lg:grid-cols-[1fr_1.4fr_1.4fr] lg:items-center lg:gap-10">
            <h3 className="font-display text-3xl leading-tight">{g.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{g.note}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {g.tools.map(({ name, Icon, color }) => (
                <li key={name} className="flex items-center gap-2.5 text-sm font-medium">
                  <Icon size={24} color={color} aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Familiarities;
