import React from "react";
import MainAbout from "../MainAbout/MainAbout";
import MainCatalog from "../MainCatalog/MainCatalog";
import Slogan from "../Slogan/Slogan";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Slogan />
      <MainCatalog />
      <MainAbout />
    </main>
  );
};

export default Main;
