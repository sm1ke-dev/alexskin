import React from "react";
import styles from "./Video.module.scss";
import play from "../../images/play.svg";

const Video: React.FC = () => {
  return (
    <section className={`${styles.video} ${styles.main__video}`}>
      <h2 className={styles.video__title}>
        Бренд, родившийся из детской мечты
      </h2>
      <div className={styles.video__wrapper}>
        <div className={styles.video__playButton}>
          <img src={play} alt="play" className={styles.video__playIcon} />
        </div>
      </div>
    </section>
  );
};

export default Video;
