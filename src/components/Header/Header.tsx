import React from "react";
import "./Header.css";
import burger from "../../images/burger-menu.svg";
import logo from "../../images/logo.svg";
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
        className={`header ${
          window.location.pathname === "/alexskin/about" && "header_white"
        }`}
      >
        <div className="header__wrapper">
          <img
            className="header__burger"
            src={burger}
            alt="burger-menu"
            onClick={() => setIsMenuOpen(true)}
          />
          <img
            className="header__logo"
            src={logo}
            alt="logo"
            onClick={() => navigate("/alexskin/")}
          />
          <ul className="menu-list">
            <li className="menu-list__item">
              <Link className="menu-list__link" to="/alexskin/about">
                О бренде
              </Link>
            </li>
            <li className="menu-list__item">
              <Link className="menu-list__link" to="/alexskin/catalog">
                Каталог
              </Link>
            </li>
            <li className="menu-list__item">
              <Link className="menu-list__link" to="/alexskin/community">
                Коммьюнити
              </Link>
            </li>
            <li className="menu-list__item">
              <Link className="menu-list__link" to="/alexskin/service">
                Сервис
              </Link>
            </li>
            <li className="menu-list__item">
              <Link className="menu-list__link" to="/alexskin/faq">
                FAQ
              </Link>
            </li>
            <li className="menu-list__item">
              <Link className="menu-list__link" to="/alexskin/partnership">
                Сотрудничество
              </Link>
            </li>
          </ul>
          <ul className="icons-list">
            <li className="icons-list__item">
              <img className="icons-list__icon" src={search} alt="search" />
            </li>
            <li className="icons-list__item">
              <img className="icons-list__icon" src={cart} alt="cart" />
            </li>
            <li className="icons-list__item">
              <img className="icons-list__icon" src={account} alt="account" />
            </li>
          </ul>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={setIsMenuOpen} />
    </>
  );
};

export default Header;
