import React from "react";

import Fade from "react-reveal/Fade";
import Home from "./home";
import About from "../profile/about";
import Expertise from "./expertise";
import Familiarities from "./familiarities";
import Projects from "./projects";
import CV from "./CV";
import ContactForm from "../components/contactForm";
import Contact from "./contact";
import PlaygroundProfile from "./playground";
const ProfileHome = () => (

  <>
  <Home/>

  <Expertise/>
  <Familiarities/>
  <Projects/>
  <PlaygroundProfile/>
  <About/>
  <CV/>
  <Contact/>
  </>
);

export default ProfileHome;
