import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/white-logo.png";
import tg from "../../images/tg-icon.svg";
import inst from "../../images/inst-icon.svg";
import vk from "../../images/vk-icon.svg";
import ok from "../../images/ok-icon.svg";
import zen from "../../images/zen-icon.svg";
import cards from "../../images/cards.png";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <img
          src={logo}
          alt="logo"
          className={styles.footer__logo}
          onClick={() => navigate("/alexskin/")}
        />
        <div className={styles.footer__info}>
          <h4 className={styles.footer__title}>Информация</h4>
          <ul className={styles.footer__infoList}>
            <li className={styles.footer__infoItem}>
              <Link to="/alexskin/documents" className={styles.footer__link}>
                Документы
              </Link>
            </li>
            <li className={styles.footer__infoItem}>
              <Link to="/alexskin/service" className={styles.footer__link}>
                Оплата и доставка
              </Link>
            </li>
            <li className={styles.footer__infoItem}>
              <Link to="/alexskin/service" className={styles.footer__link}>
                Возврат
              </Link>
            </li>
            <li className={styles.footer__infoItem}>
              <Link to="/alexskin/community" className={styles.footer__link}>
                Блог
              </Link>
            </li>
            <li className={styles.footer__infoItem}>
              <Link to="/alexskin/catalog" className={styles.footer__link}>
                Где купить?
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__contacts}>
          <h4 className={styles.footer__title}>Контакты</h4>
          <ul className={styles.footer__contactsList}>
            <li className={styles.footer__contactsItem}>
              Тел: +7 (925) 712-10-11
            </li>
            <li className={styles.footer__contactsItem}>
              E-mail: Info@alexskin.ru
            </li>
          </ul>
        </div>
        <div className={styles.footer__socials}>
          <h4 className={styles.footer__title}>Соцсети</h4>
          <ul className={styles.footer__socialsList}>
            <li className={styles.footer__socialsItem}>
              <img src={tg} alt="tg" className={styles.footer__socialsIcon} />
            </li>
            <li className={styles.footer__socialsItem}>
              <img
                src={inst}
                alt="inst"
                className={styles.footer__socialsIcon}
              />
            </li>
            <li className={styles.footer__socialsItem}>
              <img src={vk} alt="vk" className={styles.footer__socialsIcon} />
            </li>
            <li className={styles.footer__socialsItem}>
              <img src={ok} alt="ok" className={styles.footer__socialsIcon} />
            </li>
            <li className={styles.footer__socialsItem}>
              <img src={zen} alt="zen" className={styles.footer__socialsIcon} />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__bottom}>
        <p className={styles.footer__credits}>© 2023 ALEXSKIN</p>
        <img src={cards} alt="cards" className={styles.footer__cards} />
      </div>
    </footer>
  );
};

export default Footer;
