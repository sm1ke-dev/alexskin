import React from "react";
import "./Footer.css";
import logo from "../../images/white-logo.svg";
import tg from "../../images/tg-icon.svg";
import inst from "../../images/inst-icon.svg";
import vk from "../../images/vk-icon.svg";
import ok from "../../images/ok-icon.svg";
import zen from "../../images/zen-icon.svg";
import cards from "../../images/cards.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src={logo} alt="logo" className="footer__logo" />
        <div className="footer__info">
          <h4 className="footer__title">Информация</h4>
          <ul className="footer__info-list">
            <li className="footer__info-item">Документы</li>
            <li className="footer__info-item">Оплата и доставка</li>
            <li className="footer__info-item">Возврат</li>
            <li className="footer__info-item">Блог</li>
            <li className="footer__info-item">Где купить?</li>
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
