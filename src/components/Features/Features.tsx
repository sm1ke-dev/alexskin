import React from "react";
import "./Features.css";
import firstFeaturePic from "../../images/feature1-pic.png";
import secondFeaturePic from "../../images/feature2-pic.png";
import thirdFeaturePic from "../../images/feature3-pic.png";
import featureImage from "../../images/feature-image.png";

const Features: React.FC = () => {
  return (
    <section className="features">
      <h2 className="features__title">В чем особенность AlexSkin?</h2>
      <ul className="features__wrapper">
        <li className="features__feature feature">
          <div className="feature__title-wrapper">
            <img
              src={firstFeaturePic}
              alt="feature pic"
              className="feature__pic1"
            />
            <span className="feature__line"></span>
            <h3 className="feature__title">Эффективность</h3>
          </div>
          <p className="feature__description">
            Вам не нужны миллионы баночек, чтобы получить крутой результат. Наши
            технологи разработали профессиональный уход, эффект от которого
            сравним с посещением косметолога.
          </p>
        </li>
        <li className="features__feature feature">
          <div className="feature__title-wrapper">
            <img
              src={secondFeaturePic}
              alt="feature pic"
              className="feature__pic2"
            />
            <span className="feature__line"></span>
            <h3 className="feature__title">Эстетика</h3>
          </div>
          <p className="feature__description">
            Мы продумали нашу упаковку таким образом, чтобы не отвлекать вас от
            главного - заботы о себе. Лаконичность, простота и приятные
            ощущения. Мы за уход не только ради результата, но и ради самого
            процесса.
          </p>
        </li>
        <li className="features__feature feature">
          <div className="feature__title-wrapper">
            <img
              src={thirdFeaturePic}
              alt="feature pic"
              className="feature__pic3"
            />
            <span className="feature__line"></span>
            <h3 className="feature__title">Качество</h3>
          </div>
          <p className="feature__description">
            Современное безопасное производство, сырье от надёжных европейских
            поставщиков, удобная упаковка. ALEXSKIN - про качество и ценность.
            Для нас это не просто слова.
          </p>
        </li>
      </ul>
      <div className="features__image-wrapper">
        <img src={featureImage} alt="design pic" className="features__image" />
      </div>
    </section>
  );
};

export default Features;
