import React from "react";

import Home from "./home";
import About from "../profile/about";
import Expertise from "./expertise";
import Familiarities from "./familiarities";
import Projects from "./projects";
import CV from "./CV";
import Contact from "./contact";
import Certifications from "./Certifications";
import ProfileAgentChat from "./profileAgentChat";

const ProfileHome = () => (
  <main className="bg-paper">
    <Home />
    <CV />
    <Projects />
    <Expertise />
    <Familiarities />
    <About />
    <Certifications />
    <Contact />
    <ProfileAgentChat />
  </main>
);

export default ProfileHome;
