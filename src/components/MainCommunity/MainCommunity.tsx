import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainCommunity.module.scss";
import qrcode from "../../images/qrcode.png";

const MainCommunity: React.FC = () => {
  return (
    <section className={styles.mainCommunity}>
      <div className={styles.mainCommunity__wrapper}>
        <div className={styles.mainCommunity__firstColumn}>
          <h2 className={styles.mainCommunity__header}>
            Вступай в наше коммьюнити
          </h2>
          <ul className={styles.mainCommunity__list}>
            <li className={styles.mainCommunity__feature}>Новости бренда</li>
            <li className={styles.mainCommunity__feature}>Акции и розыгрыши</li>
            <li className={styles.mainCommunity__feature}>
              Полезный контент, поддержка и лёгкость
            </li>
          </ul>
        </div>
        <div className={styles.mainCommunity__secondColumn}>
          <Link to="#" className={styles.mainCommunity__link}>
            Вступить
          </Link>
          <img
            src={qrcode}
            alt="QR-code"
            className={styles.mainCommunity__qrcode}
          />
        </div>
      </div>
    </section>
  );
};

export default MainCommunity;
