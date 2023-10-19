import React from "react";
import Features from "../Featrures/Features";
import MainAbout from "../MainAbout/MainAbout";
import MainCatalog from "../MainCatalog/MainCatalog";
import Slogan from "../Slogan/Slogan";
import YourMask from "../YourMask/YourMask";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Slogan />
      <MainCatalog />
      <MainAbout />
      <Features />
      <YourMask />
    </main>
  );
};

export default Main;
