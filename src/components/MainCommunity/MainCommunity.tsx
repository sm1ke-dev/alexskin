import React from "react";
import { Link } from "react-router-dom";
import "./MainCommunity.css";
import qrcode from "../../images/qrcode.png";

const MainCommunity: React.FC = () => {
  return (
    <section className="main-community">
      <div className="main-community__wrapper">
        <div className="main-community__first-column">
          <h2 className="main-community__header">Вступай в наше коммьюнити</h2>
          <ul className="main-community__list">
            <li className="main-community__feature">Новости бренда</li>
            <li className="main-community__feature">Акции и розыгрыши</li>
            <li className="main-community__feature">
              Полезный контент, поддержка и лёгкость
            </li>
          </ul>
        </div>
        <div className="main-community__second-column">
          <Link to="#" className="main-community__link">
            Вступить
          </Link>
          <img src={qrcode} alt="QR-code" className="main-community__qrcode" />
        </div>
      </div>
    </section>
  );
};

export default MainCommunity;
