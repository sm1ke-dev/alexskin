import React from "react";
import AboutGrid from "../AboutGrid/AboutGrid";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Video from "../Video/Video";
import "./About.css";

const About: React.FC = () => {
  return (
    <main className="about">
      <Breadcrumbs />
      <Video />
      <AboutGrid />
    </main>
  );
};

export default About;
