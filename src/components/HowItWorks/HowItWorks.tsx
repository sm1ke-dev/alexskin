import React from "react";
import "./HowItWorks.css";
import howItWorksImg from "../../images/how-it-work1.png";
import morningMasqueItem from "../../images/morning-masque-noback.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <img
        src={howItWorksImg}
        alt="Как действует"
        className="how-it-works__img"
      />
      <img
        src={morningMasqueItem}
        alt="cream"
        className="how-it-works__cream"
      />
      <h2 className="how-it-works__title">Как действует Morning Masque?</h2>
      <ul className="how-it-works__list">
        <li className="how-it-works__item">
          <div className="how-it-works__text-wrapper how-it-works__text-wrapper_gap">
            <div className="how-it-works__num">01</div>
            <p className="how-it-works__text">Возвращает здоровый тон</p>
          </div>
          <div className="how-it-works__line-wrapper">
            <hr className="how-it-works__line" />
            <div className="how-it-works__circle"></div>
          </div>
        </li>
        <li className="how-it-works__item">
          <div className="how-it-works__text-wrapper">
            <div className="how-it-works__num">02</div>
            <p className="how-it-works__text">Снижает отёчность</p>
          </div>
          <div className="how-it-works__line-wrapper">
            <hr className="how-it-works__line" />
            <div className="how-it-works__circle"></div>
          </div>
        </li>
        <li className="how-it-works__item">
          <div className="how-it-works__text-wrapper">
            <div className="how-it-works__num">03</div>
            <p className="how-it-works__text">Интенсивно питает</p>
          </div>
          <div className="how-it-works__line-wrapper">
            <hr className="how-it-works__line" />
            <div className="how-it-works__circle"></div>
          </div>
        </li>
        <li className="how-it-works__item">
          <div className="how-it-works__text-wrapper">
            <div className="how-it-works__num">04</div>
            <p className="how-it-works__text">Тонизирует и уплотняет</p>
          </div>
          <div className="how-it-works__line-wrapper">
            <hr className="how-it-works__line" />
            <div className="how-it-works__circle"></div>
          </div>
        </li>
        <li className="how-it-works__item">
          <div className="how-it-works__text-wrapper">
            <div className="how-it-works__num">05</div>
            <p className="how-it-works__text">Разглаживает заломы и морщинки</p>
          </div>
          <div className="how-it-works__line-wrapper">
            <hr className="how-it-works__line" />
            <div className="how-it-works__circle"></div>
          </div>
        </li>
        <li className="how-it-works__item">
          <div className="how-it-works__text-wrapper">
            <div className="how-it-works__num">06</div>
            <p className="how-it-works__text">Предотвращает пигментацию</p>
          </div>
          <div className="how-it-works__line-wrapper">
            <hr className="how-it-works__line" />
            <div className="how-it-works__circle"></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default HowItWorks;
