import React from "react";
import AboutGrid from "../AboutGrid/AboutGrid";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Video from "../Video/Video";
import "./About.css";

const About: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about">
      <Breadcrumbs page="О бренде" urlPath="about" />
      <Video />
      <AboutGrid />
    </main>
  );
};

export default About;
