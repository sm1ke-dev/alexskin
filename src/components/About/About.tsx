import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Video from "../Video/Video";
import "./About.css";

const About: React.FC = () => {
  return (
    <main className="about">
      <Breadcrumbs />
      <Video />
    </main>
  );
};

export default About;
