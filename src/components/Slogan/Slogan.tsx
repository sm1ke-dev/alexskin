import React from "react";
import "./Slogan.css";
import image1 from "../../images/slogan_image1.png";
import image2 from "../../images/slogan_image2.png";
import image3 from "../../images/slogan_image3.png";

const Slogan: React.FC = () => {
  return (
    <section className="slogan">
      <h2 className="slogan__title">Любить. Ценить. Беречь себя.</h2>
      <div className="slogan__grid-wrapper">
        <img src={image1} alt="фоновое изображение" className="slogan__image" />
        <img src={image2} alt="фоновое изображение" className="slogan__image" />
        <img src={image3} alt="фоновое изображение" className="slogan__image" />
      </div>
    </section>
  );
};

export default Slogan;
