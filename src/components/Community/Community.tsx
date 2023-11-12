import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./Community.css";
import features from "../../images/features.png";
import phones from "../../images/phones.png";
import { Link } from "react-router-dom";

const Community: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="community">
      <Breadcrumbs page="Коммьюнити" urlPath="community" />
      <div className="community__wrapper">
        <h2 className="community__title">Коммьюнити</h2>
        <p className="community__subtitle">
          ALEXSKIN - больше, чем косметический бренд
        </p>
        <p className="community__text">
          Приглашаем в наше телеграм-коммьюнити ALEXSKIN
          <br />
          Это открытое пространство для женщин, где мы пишем об уходе и
          психологии самоценности. Место, где ты можешь оставаться собой.
        </p>
        <img src={features} alt="features" className="community__photo" />
        <span className="community__line"></span>
        <ul className="community__list">
          <li className="community__feature">Новости бренда</li>
          <li className="community__feature">Подкасты на важные темы</li>
          <li className="community__feature">Поддержка и легкость</li>
          <li className="community__feature">Полезные посты</li>
          <li className="community__feature">Акции и розыгрыши</li>
        </ul>
      </div>
      <Link to="/alexskin/" className="community__link">
        Вступить
      </Link>
      <img src={phones} alt="phones" className="community__phones" />
    </main>
  );
};

export default Community;
