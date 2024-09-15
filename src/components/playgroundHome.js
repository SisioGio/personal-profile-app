import Fade from "react-reveal/Fade";

import Picture from "./pexels-tara-winstead-8386365.jpg";
import ContactForm from "./contactForm";
import Services from "./services";
import About from "./about";
import { Link } from "react-router-dom";
function PlagroundHome() {
  const tools = [
    {
      name: "Chat With God",
      description:
        "Engage in deep conversations, seek guidance, or ask philosophical questions with our AI-driven spiritual assistant.",
    },
    {
      name: "Virtual Psychologist",
      description:
        "Get mental health support and advice from an AI-powered virtual psychologist, offering a confidential and non-judgmental space.",
    },
    {
      name: "Financial Advisor",
      description:
        "Receive smart financial planning tips, investment advice, and budget management solutions with our AI financial advisor.",
    },
    {
      name: "Recipe Generator",
      description:
        "Input your ingredients and discover creative, delicious recipes instantly with the AI-powered recipe generator.",
    },
    {
      name: "Chef",
      description:
        "An AI-driven virtual chef that helps you cook step-by-step and suggests culinary techniques for your favorite dishes.",
    },
    {
      name: "Document Summarization",
      description:
        "Summarize lengthy articles, reports, or documents into concise, easy-to-read overviews using our advanced AI summarizer.",
    },
  ];

  return (
    <div className="     w-full ">
      <div
        id="home"
        className="mx-auto flex relative  flex-col text-blue-900 top-0  bg-blue-700 w-full  bg-opacity-80 items-center justify-center  overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full  object-cover z-[-1]">
          <source
            src="https://s3.eu-central-1.amazonaws.com/ag-digitalexpert.com/3129576-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="h-60"></div>
        <Fade left>
          <h3 className="mx-auto font-normal text-white text-2xl  lg:text-4xl xl:text-7xl py-5">
            GenAi Tools for Everyday Life
          </h3>
        </Fade>

        <Fade bottom distance="100px">
          <p className="text-white   md:text-xl lg:text-3xl   leading-loose md:leading-loose lg:leading-loose tracking-wide lg:w-1/3 text-center">
            <br></br>Simplify your tasks with powerful, AI-powered tools.
          </p>
        </Fade>
        <div className="h-20"></div>

        <Link
          to="#services"
          href="#services"
          className="mr-5 hover:text-indigo-300 bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
          Discover Tools
        </Link>

        <div className="h-80"></div>
      </div>

      <Services />

      <div className="h-52"></div>

      <About />

      <div className="h-52"></div>

      <ContactForm id="contact" />
    </div>
  );
}

export default PlagroundHome;
