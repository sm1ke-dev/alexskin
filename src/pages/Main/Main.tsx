import React from "react";
import Features from "../../components/Features/Features";
import MainAbout from "../../components/MainAbout/MainAbout";
import MainCatalog from "../../components/MainCatalog/MainCatalog";
import MainCommunity from "../../components/MainCommunity/MainCommunity";
import Slogan from "../../components/Slogan/Slogan";
import YourMask from "../../components/YourMask/YourMask";
import styles from "./Main.module.scss";

const Main: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.main}>
      <Slogan />
      <MainCatalog />
      <MainAbout />
      <Features />
      <YourMask />
      <MainCommunity />
    </main>
  );
};

export default Main;
