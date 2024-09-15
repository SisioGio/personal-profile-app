import React from "react";
import Fade from "react-reveal/Fade";
const services = [
  {
    title: "Backend Development",
    description:
      "I have a good understanding of backend development concepts and practices. I am familiar with creating APIs, managing databases, and handling server-side logic using various programming languages and frameworks. While I am not an expert, I can effectively contribute to backend projects and collaborate with more experienced developers.",
    imageUrl:
      "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg",
  },
  {
    title: "AWS",
    description:
      "I have a working knowledge of Amazon Web Services (AWS) and its various offerings such as EC2, S3, RDS, and Lambda. I can set up and manage cloud infrastructure, deploy applications, and utilize basic AWS services for development and testing purposes. My understanding allows me to navigate and leverage AWS resources, though I continually seek to deepen my expertise.",
    imageUrl:
      "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg",
  },
  {
    title: "IaC",
    description:
      "I am acquainted with Infrastructure as Code (IaC) principles and CloudFormation. I can write and maintain scripts to automate the provisioning and management of cloud resources. My familiarity with IaC helps me  understand the importance of reproducible and scalable environments.",

    imageUrl:
      "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
  },
];
const Familiarities = () => (
  <div className="bg-white" id="familiarities">
  <div className="h-24"></div>
  <Fade top>
    <h3 className="text-blue-900 font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl py-10 sm:py-16 mx-auto w-full sm:w-5/6 xl:w-3/5 text-center">
      Skills and Familiarities
    </h3>
  </Fade>

  <div className="container mx-auto px-3 md:px-6 lg:px-12">
    <div className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 sm:pb-20">
      {services.map((service, index) => (
        <Fade bottom key={index}>
          <div className="bg-white rounded-2xl shadow-md px-4 py-6 sm:px-6 lg:px-8 border-2 border-indigo-100 hover:shadow-lg transition-shadow duration-200">
            <div className="text-indigo-900 space-y-4 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-blue-900 transition-colors duration-200 hover:text-indigo-700">
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
</div>);

export default Familiarities;
