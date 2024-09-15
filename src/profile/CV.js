import React from "react";

import Fade from "react-reveal/Fade";
const experiences = [
  {
    role: "RPA & Low Code Developer",
    company: "Oerlikon Digital Hub",

    location: "Munich,Germany",
    period: "August 2023 - Present",
    description:
      "As an RPA & Low Code Developer, I specialize in designing and implementing automated solutions that streamline business processes and enhance efficiency. Leveraging my extensive experience in accounting, finance, and reporting, I excel at converting complex business problems into practical, automated solutions. In my current role, I integrated Generative AI into UiPath, transforming a rule-based process into a smart, cost-effective solution. This innovation has significantly decreased operational costs while improving process accuracy and efficiency. My ability to find the best ideas and design well-crafted bots ensures that every solution I create is both effective and efficient.",
  },

  {
    role: "Business Process Automation Consultant",
    company:
      "Oerlikon Business Services Sp.z o.o. / Oerlikon Balzers Coating Italy S.p.a (remote)",

    location: "Warsaw,Poland / Milan,Italy (remote)",
    period: "February 2021 - December 2021 / January 2022 - July 2023",
    description:
      "In my role as a Business Process Automation Consultant, I use my deep understanding of accounting, finance, and reporting to identify and automate key business processes. My expertise enables me to quickly understand business challenges and develop automated solutions that optimize workflow and enhance productivity. I am adept at designing and implementing automation strategies that are tailored to meet the specific needs of each business, always ensuring the best possible outcome.",
  },

  {
    role: "AP Accountant",
    company: "Oerlikon Business Services Sp.z o.o.",
    location: "Warsaw,Poland",
    period: "April 2019 - January 2021",
    description:
      "As an AP Accountant, I was responsible for managing accounts payable processes, ensuring accuracy and compliance in financial transactions. My experience in finance and reporting provided me with a strong foundation to identify inefficiencies and implement solutions that streamline operations. This role honed my ability to convert business problems into practical solutions, laying the groundwork for my future success in automation and process optimization.",
  },
  {
    role: "Cash Collection Clerk",
    company: "Accenture",
    location: "Warsaw,Poland",
    period: "Ocotber 2017 - March 2019",
    description:
      "In my role as a Cash Collection Clerk, I managed cash collections and maintained accurate financial records. This position required a keen eye for detail and a deep understanding of financial processes. My experience in this role allowed me to identify and resolve issues efficiently, demonstrating my capability to design solutions that improve process efficiency and accuracy. My background in accounting and finance has been invaluable in developing my skills in automation and process optimization.",
  },
];
const CV = () => (
  <div className="bg-blue-800 text-white relative overflow-hidden" id='CV'>
  {/* Top SVG for background wave */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full h-auto">
    <path
      fill="white"
      d="M0,160L48,160C96,160,192,160,288,149.3C384,139,480,117,576,122.7C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>

  <div className="relative mx-auto w-full sm:w-5/6 xl:w-3/5 px-4 sm:px-6 lg:px-8 py-12 z-10">
    <div className="h-24 md:h-56 lg:h-56"></div>
    <Fade top distance="300px" >
      <h2  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-10 text-center">
        Professional Experience
      </h2>
    </Fade>
    <div className="space-y-8">
      <Fade right>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-transform hover:scale-105 hover:shadow-2xl border border-indigo-200"
          >
            <h3 className="font-semibold text-2xl md:text-3xl text-blue-900 mb-2">
              {experience.role}
            </h3>
            <p className="text-lg md:text-xl text-gray-700">{experience.company}</p>
            <p className="text-base md:text-lg text-gray-500">
              {experience.location} - {experience.period}
            </p>
            <p className="mt-4 text-gray-800 text-base md:text-lg leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </Fade>
    </div>
  </div>
  <div className="h-24 md:h-56 lg:h-56"></div>
  {/* Bottom SVG for background wave */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-auto">
    <path
      fill="black"
      d="M0,160L48,160C96,160,192,160,288,149.3C384,139,480,117,576,122.7C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</div>

);

export default CV;
