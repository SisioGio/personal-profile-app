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
import Certifications from "./Certifications";
import ProfileAgentChat from "./profileAgentChat";
const ProfileHome = () => (

  <div className='bg-gradient-to-b from-slate-950 via-slate-900 to-black'>
      <Home/>

      <Expertise/>
      <Familiarities/>
      <Projects/>
      {/* <PlaygroundProfile/> */}
      <About/>
      <Certifications/>
      <CV/>
      <Contact/>
      <ProfileAgentChat/>
  </div>
);

export default ProfileHome;
