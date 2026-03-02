import React from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Education from "../pages/education";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Contact from "../pages/contact";

const Body = () => {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Body;