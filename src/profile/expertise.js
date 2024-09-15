import React from "react";
import Fade from "react-reveal/Fade";
const services = [
  {
    title: "Process Automation",
    fade_direction: "top",
    description:
      "Harnessing top RPA technologies like UiPath and AWS, I excel in designing seamless, fully automated processes. My approach transforms complex workflows into efficient, error-free systems, boosting productivity and integration across platforms. From tailored automation solutions to real-time insights with Power BI, I deliver innovation that drives operational excellence.",
    imageUrl:
      "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg",
  },
  {
    title: "Digitalization",
    fade_direction: "right",
    description:
      "Specializing in digital transformation within the 365 environment, I leverage tools like Power Automate, Power Apps, and SharePoint to drive innovation and efficiency. My solutions streamline processes, enhance collaboration, and automate workflows, transforming traditional operations into agile, data-driven systems.",
    imageUrl:
      "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg",
  },
  {
    title: "GenAi Integration",
    fade_direction: "left",
    description:
      "Leveraging GenAi, I enhance robotic software to make rule-based processes smarter and more adaptive. By integrating advanced AI capabilities, I optimize automation, enabling systems to learn, predict, and evolve. This fusion transforms traditional RPA into intelligent, decision-making solutions.",
    imageUrl:
      "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
  },
];
const Expertise = () => (
  <div className="bg-white " id="expertise">
  <Fade top>
    <h3 className="text-blue-900 text-center font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl py-10 sm:py-16">
      Areas of Expertise
    </h3>
  </Fade>

  <div className="container mx-auto px-3 md:px-6 lg:px-12">
    <div className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 sm:pb-20">
      {services.map((service, index) => (
        <Fade bottom distance="200px" key={index}>
          <div className="rounded-2xl shadow-lg px-4 py-6 sm:px-6 lg:px-8 border-2 border-indigo-200 bg-gradient-to-r from-white to-indigo-50 hover:from-indigo-50 hover:to-white transition-transform hover:scale-105">
            <div className="space-y-4 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 tracking-wide leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  </div>
</div>
);

export default Expertise;
