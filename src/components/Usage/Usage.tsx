import React from "react";
import "./Usage.css";
import gradient from "../../images/usage-gradient.svg";
import face1 from "../../images/face-image1.svg";
import face2 from "../../images/face-image2.svg";
import face3 from "../../images/face-image3.svg";
import numVector1 from "../../images/usage-vector1.svg";
import numVector2 from "../../images/usage-vector2.svg";
import numVector3 from "../../images/usage-vector3.svg";
import topArrow from "../../images/usage-top-arrow.png";
import bottomArrow from "../../images/usage-bottom-arrow.png";

const Usage = () => {
  return (
    <section className="usage">
      <div className="usage__wrapper">
        <h2 className="usage__title">Способ применения</h2>
        <ul className="usage__list">
          <img src={topArrow} alt="arrow" className="usage__top-arrow" />
          <img src={bottomArrow} alt="arrow" className="usage__bottom-arrow" />
          <li className="usage__item">
            <div className="usage__pic-wrapper">
              <img src={gradient} alt="gradient" className="usage__gradient" />
              <img src={face1} alt="face" className="usage__face" />
              <div className="usage__num-wrapper">
                <img src={numVector1} alt="num" className="usage__num-vector" />
                <span className="usage__num">1</span>
              </div>
            </div>
            <p className="usage__text">
              Нанести тонким слоем на очищенную кожу лица, шеи и декольте,
              избегая области вокруг глаз.
            </p>
          </li>
          <li className="usage__item">
            <div className="usage__pic-wrapper">
              <img src={gradient} alt="gradient" className="usage__gradient" />
              <img src={face2} alt="face" className="usage__face" />
              <div className="usage__num-wrapper">
                <img src={numVector2} alt="num" className="usage__num-vector" />
                <span className="usage__num">2</span>
              </div>
            </div>
            <p className="usage__text">
              Оставьте на 10-15 минут, затем тщательно смойте тёплой водой.
            </p>
          </li>
          <li className="usage__item">
            <div className="usage__pic-wrapper">
              <img src={gradient} alt="gradient" className="usage__gradient" />
              <img src={face3} alt="face" className="usage__face" />
              <div className="usage__num-wrapper">
                <img src={numVector3} alt="num" className="usage__num-vector" />
                <span className="usage__num">3</span>
              </div>
            </div>
            <p className="usage__text">
              Отлично! Ваша кожа сияет и готова к новому дню!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Usage;
