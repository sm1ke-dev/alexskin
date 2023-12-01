import React from "react";
import styles from "./Features.module.scss";
import firstFeaturePic from "../../images/feature1-pic.png";
import secondFeaturePic from "../../images/feature2-pic.png";
import thirdFeaturePic from "../../images/feature3-pic.png";
import featureImage from "../../images/feature-image.png";

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.features__title}>В чем особенность AlexSkin?</h2>
      <ul className={styles.features__wrapper}>
        <li className={`${styles.features__feature} ${styles.feature}`}>
          <div className={styles.feature__titleWrapper}>
            <img
              src={firstFeaturePic}
              alt="feature pic"
              className={styles.feature__pic1}
            />
            <span className={styles.feature__line}></span>
            <h3 className={styles.feature__title}>Эффективность</h3>
          </div>
          <p className={styles.feature__description}>
            Вам не нужны миллионы баночек, чтобы получить крутой результат. Наши
            технологи разработали профессиональный уход, эффект от которого
            сравним с посещением косметолога.
          </p>
        </li>
        <li className={`${styles.features__feature} ${styles.feature}`}>
          <div className={styles.feature__titleWrapper}>
            <img
              src={secondFeaturePic}
              alt="feature pic"
              className={styles.feature__pic2}
            />
            <span className={styles.feature__line}></span>
            <h3 className={styles.feature__title}>Эстетика</h3>
          </div>
          <p className={styles.feature__description}>
            Мы продумали нашу упаковку таким образом, чтобы не отвлекать вас от
            главного - заботы о себе. Лаконичность, простота и приятные
            ощущения. Мы за уход не только ради результата, но и ради самого
            процесса.
          </p>
        </li>
        <li className={`${styles.features__feature} ${styles.feature}`}>
          <div className={styles.feature__titleWrapper}>
            <img
              src={thirdFeaturePic}
              alt="feature pic"
              className={styles.feature__pic3}
            />
            <span className={styles.feature__line}></span>
            <h3 className={styles.feature__title}>Качество</h3>
          </div>
          <p className={styles.feature__description}>
            Современное безопасное производство, сырье от надёжных европейских
            поставщиков, удобная упаковка. ALEXSKIN - про качество и ценность.
            Для нас это не просто слова.
          </p>
        </li>
      </ul>
      <div className={styles.features__imageWrapper}>
        <img
          src={featureImage}
          alt="design pic"
          className={styles.features__image}
        />
      </div>
    </section>
  );
};

export default Features;
