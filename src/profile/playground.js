import React from "react";
import Fade from "react-reveal/Fade";
import Services from "../components/services";
const PlaygroundProfile = () => {
  return (
    <div className="bg-blue-800 text-white -mt-1" id="playground">
      <div className="h-12"></div>
      <div className="w-full md:w-5/6 xl:w-3/5 mx-auto p-4 md:p-6 lg:p-8">
        <Fade top distance="300px">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold py-10 md:py-16">
            Let Me Show You Something
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Words alone can't always capture the full picture, so I’ve prepared
            a selection of tools to illustrate how seamlessly you can integrate
            with powerful LLM models. These examples demonstrate their
            versatility and potential for various tasks. While these scenarios
            are just the beginning, they showcase the immense capabilities of
            LLMs and their ability to tackle complex challenges effectively.
          </p>
        </Fade>
        <div className="h-12 md:h-24"></div>
        <div className="py-5">
          <p className="text-red-600  py-">Important Info</p>
          <p className="text-sm text-gray-200 py-5">
            Please note that the endpoint has a usage limit, and if too many
            requests are made, it may not provide a response. Additionally, the
            data and responses provided by this tool are for demonstration
            purposes only and should not be taken seriously. By using this tool,
            you agree not to rely on or follow any advice or information
            provided. This tool is designed solely to showcase potential use
            cases, and we are not responsible for any actions taken based on the
            responses.
          </p>
        </div>
        <Fade left>
          <Services />
        </Fade>

        <div className="h-12 md:h-24"></div>
      </div>
    </div>
  );
};

export default PlaygroundProfile;
