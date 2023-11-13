import React from "react";
import "./Footer.css";
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
    <footer className="footer">
      <div className="footer__top">
        <img
          src={logo}
          alt="logo"
          className="footer__logo"
          onClick={() => navigate("/alexskin/")}
        />
        <div className="footer__info">
          <h4 className="footer__title">Информация</h4>
          <ul className="footer__info-list">
            <li className="footer__info-item">
              <Link to="/alexskin/documents" className="footer__link">
                Документы
              </Link>
            </li>
            <li className="footer__info-item">
              <Link to="/alexskin/service" className="footer__link">
                Оплата и доставка
              </Link>
            </li>
            <li className="footer__info-item">
              <Link to="/alexskin/service" className="footer__link">
                Возврат
              </Link>
            </li>
            <li className="footer__info-item">
              <Link to="/alexskin/community" className="footer__link">
                Блог
              </Link>
            </li>
            <li className="footer__info-item">
              <Link to="/alexskin/catalog" className="footer__link">
                Где купить?
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h4 className="footer__title">Контакты</h4>
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">Тел: +7 (925) 712-10-11</li>
            <li className="footer__contacts-item">E-mail: Info@alexskin.ru</li>
          </ul>
        </div>
        <div className="footer__socials">
          <h4 className="footer__title">Соцсети</h4>
          <ul className="footer__socials-list">
            <li className="footer__socials-item">
              <img src={tg} alt="tg" className="footer__socials-icon" />
            </li>
            <li className="footer__socials-item">
              <img src={inst} alt="inst" className="footer__socials-icon" />
            </li>
            <li className="footer__socials-item">
              <img src={vk} alt="vk" className="footer__socials-icon" />
            </li>
            <li className="footer__socials-item">
              <img src={ok} alt="ok" className="footer__socials-icon" />
            </li>
            <li className="footer__socials-item">
              <img src={zen} alt="zen" className="footer__socials-icon" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__bottom">
        <p className="footer__credits">© 2023 ALEXSKIN</p>
        <img src={cards} alt="cards" className="footer__cards" />
      </div>
    </footer>
  );
};

export default Footer;
