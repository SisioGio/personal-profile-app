import React from "react";

import Fade from "react-reveal/Fade";
const Home = () => (
  <div className="h-1/2 w-full " id="home">
    <div className="mx-auto flex relative  flex-col text-blue-900 top-0  bg-blue-700 w-full  bg-opacity-80 items-center justify-center  overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full  object-cover z-[-1] h-full">
        <source
          src="https://s3.eu-central-1.amazonaws.com/ag-digitalexpert.com/3129576-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="h-60"></div>
      <Fade left>
        <h3 className="mx-auto font-normal text-center line- text-white text-3xl  lg:text-4xl xl:text-7xl py-5 flex  flex-col lg:flex-row gap-5">
        <span className="block text-3xl lg:text-4xl xl:text-5xl">Welcome to my</span>
        <span className="block text-3xl lg:text-4xl xl:text-5xl">professional portfolio!</span>
        </h3>
      </Fade>

      <Fade bottom distance="100px">
        <p className="text-white   md:text-xl lg:text-3xl   leading-loose md:leading-loose lg:leading-loose tracking-wide lg:w-1/3 text-center">
          <br></br>Dive in to explore my journey, expertise, and the innovative
          solutions I've developed in the world of automation and cloud
          technologies.
        </p>
      </Fade>
      <div className="h-80"></div>
    </div>
  </div>
); 

export default Home;
