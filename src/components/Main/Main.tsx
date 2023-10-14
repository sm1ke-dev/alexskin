import React from "react";
import MainCatalog from "../MainCatalog/MainCatalog";
import Slogan from "../Slogan/Slogan";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Slogan />
      <MainCatalog />
    </main>
  );
};

export default Main;
