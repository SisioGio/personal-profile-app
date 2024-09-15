import React from "react";
import useIsVisible from "./useIsVisible";
import Fade from "react-reveal/Fade";

const About = () => {
  const [isVisible, ref] = useIsVisible();

  return (

    <div className="bg-white p-5 sm:p-6 lg:p-8 xl:p-10" id="about">
    <div className="h-24"></div>
    <div className="mx-auto space-y-12 max-w-6xl">
      {/* Introduction Section */}
      <section>
        <Fade top big>
          <h5 className="text-blue-900 font-semibold text-2xl lg:text-4xl xl:text-5xl pb-10 leading-loose">
            About Me
          </h5>
        </Fade>
        <p className="text-lg leading-relaxed">
          Hello! My name is{" "}
          <span className="font-bold">Alessio Giovannini</span>, and I’m passionate about transforming business processes through automation, cloud technologies, and AI. Born in 1998, I specialize in Robotic Process Automation (RPA) and Generative AI to drive impactful digital transformations.
        </p>
      </section>
  
      {/* Background & Education Section */}
      <Fade right>
        <section>
          <h3 className="text-blue-900 text-2xl lg:text-3xl font-semibold mb-3">
            Background & Education
          </h3>
          <p className="text-lg leading-relaxed">
            I hold a degree in{" "}
            <span className="font-bold">Computer Science Engineering</span> from
            the{" "}
            <span className="font-bold">Polish-Japanese Institute of Information Technology</span>
            . During my studies, I balanced a full-time job, which taught me how
            to effectively manage multiple responsibilities and develop strong
            problem-solving skills. This experience laid the foundation for my
            career in technology.
          </p>
        </section>
      </Fade>
  
      {/* Expertise in RPA Section */}
      <Fade left>
        <section>
          <h3 className="text-blue-900 text-2xl lg:text-3xl font-semibold mb-3">
            Expertise in Robotic Process Automation (RPA)
          </h3>
          <p className="text-lg leading-relaxed">
            I specialize in{" "}
            <span className="font-bold">Robotic Process Automation (RPA)</span>,
            helping businesses transform manual, repetitive processes into
            automated workflows. Whether it's for back-office operations or
            customer-facing systems, my solutions improve efficiency, reduce
            costs, and increase productivity.
          </p>
        </section>
      </Fade>
  
      {/* AWS & Serverless Solutions Section */}
      <Fade right>
        <section>
          <h3 className="text-blue-900 text-2xl lg:text-3xl font-semibold mb-3">
            AWS & Serverless Solutions
          </h3>
          <p className="text-lg leading-relaxed">
            My expertise extends into the realm of{" "}
            <span className="font-bold">AWS</span> cloud services. Using
            serverless architecture, I’ve built scalable, secure, and
            cost-effective solutions. For instance, this very website is powered
            by AWS, highlighting my ability to create cloud-native applications
            that address real-world challenges with agility and scalability.
          </p>
        </section>
      </Fade>
  
      {/* Generative AI Integration Section */}
      <Fade left>
        <section>
          <h3 className="text-blue-900 text-2xl lg:text-3xl font-semibold mb-3">
            Generative AI Integration
          </h3>
          <p className="text-lg leading-relaxed">
            One of my key areas of focus is{" "}
            <span className="font-bold">Generative AI</span> and its ability to
            revolutionize business processes. By integrating Generative AI with
            AWS services, I help organizations unlock new capabilities, from
            automating complex workflows to creating adaptive, AI-driven
            systems. My goal is to continuously innovate and help companies
            leverage AI to stay ahead in the digital landscape.
          </p>
        </section>
      </Fade>
  
      {/* Call to Action Section */}
      <Fade right>
        <section>
          <h3 className="text-blue-900 text-2xl lg:text-3xl font-semibold mb-3">
            Explore My Work
          </h3>
          <p className="text-lg leading-relaxed">
            Feel free to explore the website to learn more about my projects and
            expertise in areas like RPA, AWS, and Generative AI. I am always
            looking for opportunities to collaborate on exciting new challenges
            and drive digital innovation.
          </p>
        </section>
      </Fade>
    </div>
  </div>
  
  );
};

export default About;
