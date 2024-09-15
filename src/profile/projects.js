import React, { useState } from "react";
import Fade from "react-reveal/Fade";
const technologies = {
  UiPath: "bg-blue-600", // Slightly darker blue
  DU: "bg-red-500", // Slightly darker red
  SharePoint: "bg-green-700", // Slightly darker green
  BAPI: "bg-indigo-700", // Slightly lighter indigo
  PA: "bg-orange-500", // Slightly lighter orange
  AWS: "bg-yellow-600", // Slightly darker yellow
  IaC: "bg-purple-700", // Darker purple
  PowerBI: "bg-teal-700", // Darker teal
  Approvals: "bg-pink-600", // Darker pink
  365: "bg-gray-700", // Darker gray
  GenAi: "bg-cyan-600", // Slightly darker cyan
};
const projects = [
  {
    title: "PO Invoices Automation",
    description:
      "Implemented automation for processing PO invoices using UiPath, Document Understanding, and AWS GenAI integration. This solution performs all the required checks before posting the final document:  VAT, vendor, extraction, payment details, and missing GRs. GenAI enhanced UiPath extraction accuracy through prompt engineering, optimizing PDF data extraction.",
    technologies: ["UiPath", "DU", "SharePoint", "BAPI", "GenAi"],
  },
  {
    title: "Journal Entries Automation",
    description:
      "Automated the finance team's Journal Entries process, successfully processing and approving over 500,000 entries. Integrated with SharePoint, Power Automate, and Power Apps, the solution manages the entire request lifecycle, including necessary approvals.",
    technologies: ["UiPath", "SharePoint", "PA"],
  },
  {
    title: "IC Back Charges Invoices Automation",
    description:
      "Digitized and automated over 15,000 IC back charge invoices. The process includes request management via SharePoint/Power Automate, posting in SAP, and PDF file creation.",
    technologies: ["UiPath", "PA", "SharePoint"],
  },
  {
    title: "Fixed Assets Workflow Automation",
    description:
      "Digitized the fixed asset request process by creating a custom SharePoint list integrated with Power Apps and Power Automate. This new solution replaces the email-based process, ensuring proper approval and access management.",
    technologies: ["UiPath", "PA", "SharePoint"],
  },
  {
    title: "Automated Monthly Reports",
    description:
      "Automated the generation of monthly reports for the reporting and finance teams, enhancing data accessibility and report frequency.",
    technologies: ["UiPath", "SharePoint"],
  },
  {
    title: "GenAi Integration",
    description:
      "Integrated GenAi to existing RPA solution by creating a serverless application that communicates with AWS and enables the interaction between Bedrock and UiPath",
    technologies: ["UiPath", "AWS", "IaC"],
  },
];

const Projects = () => {
  return (
    <div className="bg-white -mt-1" id="projects">
      <div className="h-12"></div>
      <div className="w-full md:w-5/6  mx-auto p-4 md:p-6 lg:p-8">
        <Fade top distance="300px">
          <h2 className="text-center text-blue-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl py-10 sm:py-16">
            My Projects
          </h2>
        </Fade>

        <Fade left>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {projects.map((experience, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg p-6 sm:p-8 bg-gradient-to-r from-white via-indigo-50 to-gray-50 border border-indigo-200 flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-indigo-900 transition-colors hover:text-indigo-700">
                  {experience.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed text-base lg:text-lg flex-grow">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                  {experience.technologies.map((tech, i) => (
                    <small
                      key={i}
                      className={`${technologies[tech]} py-1 px-3 sm:py-1.5 sm:px-4 rounded-full text-white font-semibold text-xs sm:text-sm lg:text-base transition-colors duration-200`}
                    >
                      {tech}
                    </small>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      <div className="h-24"></div>
    </div>
  );
};

export default Projects;
