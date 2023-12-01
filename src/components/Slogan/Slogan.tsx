import React from "react";
import styles from "./Slogan.module.scss";
import image1 from "../../images/slogan_image1.png";
import image2 from "../../images/slogan_image2.png";
import image3 from "../../images/slogan_image3.png";

const Slogan: React.FC = () => {
  return (
    <section className={styles.slogan}>
      <h2 className={styles.slogan__title}>Любить. Ценить. Беречь себя.</h2>
      <div className={styles.slogan__gridWrapper}>
        <img
          src={image1}
          alt="фоновое изображение"
          className={styles.slogan__image}
        />
        <img
          src={image2}
          alt="фоновое изображение"
          className={styles.slogan__image}
        />
        <img
          src={image3}
          alt="фоновое изображение"
          className={styles.slogan__image}
        />
      </div>
    </section>
  );
};

export default Slogan;
