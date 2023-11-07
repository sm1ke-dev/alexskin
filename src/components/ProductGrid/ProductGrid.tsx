import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./ProductGrid.css";
import arrow from "../../images/product-arrow.svg";
import fullscreenIcon from "../../images/fullscreen-icon.svg";
import mainPic from "../../images/Morning-Masque-pic.png";

const ProductGrid = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="product-grid">
      <div className="product-grid__pics-wrapper">
        <img
          src={arrow}
          alt="arrow"
          className="product-grid__arrow product-grid__arrow_up"
        />
        <div className="product-grid__pic">
          <img
            src={mainPic}
            alt="main picture"
            className="product-grid__main-pic"
          />
        </div>
        <div className="product-grid__pic">
          <img
            src={mainPic}
            alt="main picture"
            className="product-grid__main-pic"
          />
        </div>
        <div className="product-grid__pic">
          <img
            src={mainPic}
            alt="main picture"
            className="product-grid__main-pic"
          />
        </div>
        <img
          src={arrow}
          alt="arrow"
          className="product-grid__arrow product-grid__arrow_down"
        />
      </div>
      <div className="product-grid__main-wrapper">
        <img
          src={mainPic}
          alt="main picture"
          className="product-grid__main-pic"
        />
        <img
          src={arrow}
          alt="arrow"
          className="product-grid__arrow product-grid__arrow_left"
        />
        <img
          src={arrow}
          alt="arrow"
          className="product-grid__arrow product-grid__arrow_right"
        />
        <button className="product-grid__pic-button">
          <img
            src={fullscreenIcon}
            alt="fullscreenIcon"
            className="product-grid__fullscreen-icon"
          />
        </button>
      </div>
      <div className="product-grid__description-wrapper">
        <Breadcrumbs page="Morning Masque" />
        <h2 className="product-grid__title">Morning Masque</h2>
        <div className="product-grid__price-wrapper">
          <p className="product-grid__price">2500 р.</p>
          <p className="product-grid__old-price">2800 р.</p>
        </div>
        <hr className="product-grid__line" />
        <p className="product-grid__text">
          Утренняя маска с дренажным эффектом. Пробужает кожу, устраняя признаки
          усталости и недосыпа. Улучшает микроциркуляцию, снижает отёчность,
          возвращает свежий вид, помогает разгладить тонкие морщинки и заломы,
          подтянуть овал лица и разгладить рельеф. Идеальна для нормальной,
          сухой, обезвоженной и возрастной кожи. <br />
          Удобна в использовании – не стекает с лица. Не забивает поры.
        </p>
        <div className="product-grid__counter">
          <button
            onClick={() => setCount(count - 1)}
            className="product-grid__minus"
            disabled={count === 0}
          >
            -
          </button>
          <div className="product-grid__number-wrapper">
            <p className="product-grid__number">{count}</p>
          </div>
          <button
            onClick={() => setCount(count + 1)}
            className="product-grid__plus"
            disabled={count === 9}
          >
            +
          </button>
        </div>
        <button className="product-grid__button">В корзину</button>
      </div>
    </div>
  );
};

export default ProductGrid;
