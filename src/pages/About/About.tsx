import React from "react";
import AboutGrid from "../../components/AboutGrid/AboutGrid";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Video from "../../components/Video/Video";
import styles from "./About.module.scss";

const About: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.about}>
      <div className={styles.about__breadcrumbs}>
        <Breadcrumbs page="О бренде" />
      </div>
      <Video />
      <AboutGrid />
    </main>
  );
};

export default About;
