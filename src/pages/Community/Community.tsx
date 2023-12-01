import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "./Community.module.scss";
import features from "../../images/features.png";
import phones from "../../images/phones.png";
import { Link } from "react-router-dom";

const Community: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.community}>
      <div className={styles.community__breadcrumbs}>
        <Breadcrumbs page="Коммьюнити" />
      </div>
      <div className={styles.community__wrapper}>
        <h2 className={styles.community__title}>Коммьюнити</h2>
        <p className={styles.community__subtitle}>
          ALEXSKIN - больше, чем косметический бренд
        </p>
        <p className={styles.community__text}>
          Приглашаем в наше телеграм-коммьюнити ALEXSKIN
          <br />
          Это открытое пространство для женщин, где мы пишем об уходе и
          психологии самоценности. Место, где ты можешь оставаться собой.
        </p>
        <img
          src={features}
          alt="features"
          className={styles.community__photo}
        />
        <span className={styles.community__line}></span>
        <ul className={styles.community__list}>
          <li className={styles.community__feature}>Новости бренда</li>
          <li className={styles.community__feature}>Подкасты на важные темы</li>
          <li className={styles.community__feature}>Поддержка и легкость</li>
          <li className={styles.community__feature}>Полезные посты</li>
          <li className={styles.community__feature}>Акции и розыгрыши</li>
        </ul>
      </div>
      <Link to="/alexskin/" className={styles.community__link}>
        Вступить
      </Link>
      <img src={phones} alt="phones" className={styles.community__phones} />
    </main>
  );
};

export default Community;
