import React from "react";
import Fade from "react-reveal/Fade";
import useIsVisible from "./useIsVisible";

const About = () => {
  const [isVisible, ref] = useIsVisible();

  return (
    <div
      ref={ref}
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-200 overflow-hidden"
    >
      {/* Background blobs */}
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
            Hello! I’m <span className="font-bold text-cyan-400">Alessio Giovannini</span>, born in 1998, passionate about transforming business challenges into smart IT solutions. With broad expertise in <span className="font-semibold text-indigo-400">automation, cloud technologies, and AI</span>, I rapidly learn new technologies and thrive in collaborative, constructive environments. I love tackling complex problems, exchanging ideas, and learning from more experienced colleagues. My work is deeply rooted in <span className="font-bold text-fuchsia-400">Generative AI, vector databases, and modern AI ecosystems</span>.
          </p>
        </Fade>

        {/* Section blocks */}
        <div className="space-y-12">
          {[
            {
              title: "Background & Education",
              content: "I hold a degree in Computer Science Engineering from the Polish-Japanese Institute of Information Technology. Balancing full-time work during my studies taught me how to manage multiple responsibilities and develop strong problem-solving skills.",
            },
            {
              title: "Expertise in RPA",
              content: "I specialize in Robotic Process Automation (RPA), transforming manual, repetitive processes into automated workflows. My solutions improve efficiency, reduce costs, and increase productivity.",
            },
            {
              title: "AWS & Serverless Solutions",
              content: "Using AWS cloud services, I’ve built scalable, secure, and cost-effective serverless applications. For example, this website itself is cloud-native, showcasing real-world AWS integration skills.",
            },
            {
              title: "Generative AI & Vector Databases",
              content: "Generative AI is a key focus area for me. I design systems leveraging LLMs, vector databases, and AI ecosystems to extract knowledge, summarize data, and enable conversational AI solutions.",
            },
            {
              title: "Problem Solving & Collaboration",
              content: "I excel at translating business and use-case problems into IT solutions. I love collaborating with others to exchange ideas, learn from experienced professionals, and tackle challenging, constructive projects.",
            },
            {
              title: "Explore My Work",
              content: "Feel free to explore my portfolio to see projects in RPA, AI, cloud, and automation. I’m always seeking new challenges to innovate and drive digital transformation.",
            },
          ].map((section, index) => (
            <Fade
              key={index}
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
