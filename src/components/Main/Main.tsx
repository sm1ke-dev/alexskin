import React from "react";
import Features from "../Featrures/Features";
import MainAbout from "../MainAbout/MainAbout";
import MainCatalog from "../MainCatalog/MainCatalog";
import MainCommunity from "../MainCommunity/MainCommunity";
import Slogan from "../Slogan/Slogan";
import YourMask from "../YourMask/YourMask";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Slogan />
      <MainCatalog page="main" />
      <MainAbout />
      <Features />
      <YourMask />
      <MainCommunity />
    </main>
  );
};

export default Main;
