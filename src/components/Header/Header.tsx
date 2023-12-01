import React from "react";
import styles from "./Header.module.scss";
import burger from "../../images/burger-menu.svg";
import logo from "../../images/logo.png";
import search from "../../images/search-icon.svg";
import cart from "../../images/cart-icon.svg";
import account from "../../images/account-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <header
        className={`${styles.header} ${
          window.location.pathname === "/alexskin/about" && styles.header_white
        }`}
      >
        <div className={styles.header__wrapper}>
          <img
            className={styles.header__burger}
            src={burger}
            alt="burger-menu"
            onClick={() => setIsMenuOpen(true)}
          />
          <img
            className={styles.header__logo}
            src={logo}
            alt="Логотип"
            onClick={() => navigate("/alexskin/")}
          />
          <ul className={styles.menuList}>
            <li className={styles.menuList__item}>
              <Link className={styles.menuList__link} to="/alexskin/about">
                О бренде
              </Link>
            </li>
            <li className={styles.menuList__item}>
              <Link className={styles.menuList__link} to="/alexskin/catalog">
                Каталог
              </Link>
            </li>
            <li className={styles.menuList__item}>
              <Link className={styles.menuList__link} to="/alexskin/community">
                Коммьюнити
              </Link>
            </li>
            <li className={styles.menuList__item}>
              <Link className={styles.menuList__link} to="/alexskin/service">
                Сервис
              </Link>
            </li>
            <li className={styles.menuList__item}>
              <Link className={styles.menuList__link} to="/alexskin/faq">
                FAQ
              </Link>
            </li>
            <li className={styles.menuList__item}>
              <Link
                className={styles.menuList__link}
                to="/alexskin/partnership"
              >
                Сотрудничество
              </Link>
            </li>
          </ul>
          <ul className={styles.iconsList}>
            <li className={styles.iconsList__item}>
              <img
                className={styles.iconsList__icon}
                src={search}
                alt="search"
              />
            </li>
            <li className={styles.iconsList__item}>
              <img className={styles.iconsList__icon} src={cart} alt="cart" />
            </li>
            <li className={styles.iconsList__item}>
              <img
                className={styles.iconsList__icon}
                src={account}
                alt="account"
              />
            </li>
          </ul>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={setIsMenuOpen} />
    </>
  );
};

export default Header;
