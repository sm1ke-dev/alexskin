import React from "react";
import styles from "./Expert.module.scss";
import play from "../../images/play.svg";
import sun from "../../images/expert-sun.svg";

const Expert: React.FC = () => {
  return (
    <section className={styles.expert}>
      <h2 className={styles.expert__title}>Мнение эксперта</h2>
      <div className={styles.expert__wrapper}>
        <div className={styles.expert__textWrapper}>
          <h3 className={styles.expert__textTitle}>Особенности AlexSkin</h3>
          <p className={styles.expert__text}>
            Lorem ipsum dolor sit amet consectetur. Nisl elementum congue duis
            quis sagittis felis gravida. Hac maecenas elit amet nisi
            pellentesque imperdiet penatibus quam. Ornare aliquam tristique
            lectus interdum tellus amet non. Vel urna a molestie donec et
            posuere enim aenean blandit.
          </p>
          <p className={styles.expert__text}>
            Justo cras iaculis enim donec commodo consectetur nisi. At convallis
            vestibulum adipiscing dis iaculis. Lorem suspendisse lectus
            venenatis tristique dolor commodo. Viverra quam urna donec lectus
            aenean. Nibh nunc malesuada a bibendum. Congue elit mauris in
            euismod sollicitudin pulvinar odio elementum non. Ornare tristique
            purus et euismod eu. Amet tortor in vulputate praesent sem massa. In
            massa euismod felis eleifend adipiscing.
          </p>
        </div>
        <div className={styles.expert__videoWrapper}>
          <div className={styles.expert__playButton}>
            <img src={play} alt="play" className={styles.expert__playIcon} />
          </div>
        </div>
      </div>
      <img src={sun} alt="sun" className={styles.expert__svg} />
    </section>
  );
};

export default Expert;
