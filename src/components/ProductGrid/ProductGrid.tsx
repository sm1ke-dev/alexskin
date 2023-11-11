import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./ProductGrid.css";
import arrow from "../../images/product-arrow.svg";
import fullscreenIcon from "../../images/fullscreen-icon.svg";
import mainPic from "../../images/Morning-Masque-pic.png";
import checkMark from "../../images/check-mark.svg";
import { itemsType } from "../../utils/constants/items";

type ProductGridProps = {
  item: itemsType;
};

const ProductGrid: React.FC<ProductGridProps> = ({ item }) => {
  const [count, setCount] = React.useState(0);
  const [picIndex, setPicIndex] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="product-grid">
      <div className="product-grid__pics-wrapper">
        <img
          src={arrow}
          alt="arrow"
          className="product-grid__arrow product-grid__arrow_up"
        />
        {item.productPics.map((pic) => (
          <div className="product-grid__pic">
            <img
              src={pic}
              alt="main picture"
              className="product-grid__main-pic"
            />
          </div>
        ))}
        <img
          src={arrow}
          alt="arrow"
          className="product-grid__arrow product-grid__arrow_down"
        />
      </div>
      <div className="product-grid__main-wrapper">
        <img
          src={item.productPics[picIndex]}
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
        <Breadcrumbs page={item.name} />
        <h2 className="product-grid__title">{item.name}</h2>
        <div className="product-grid__price-wrapper">
          <p
            className={`product-grid__price ${
              !item.isAvailable ? "product-grid__price_unavailable" : ""
            }`}
          >
            {item.price} р.
          </p>
          {item.oldPrice !== 0 && (
            <p className="product-grid__old-price">2800 р.</p>
          )}
          {!item.isAvailable && (
            <p className="product-grid__unavailable">Нет в наличии</p>
          )}
        </div>
        <hr className="product-grid__line" />
        <p
          className="product-grid__text"
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></p>
        {item.isAvailable ? (
          <>
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
          </>
        ) : (
          <>
            <hr className="product-grid__unavailable-line" />
            <p className="product-grid__unavailable-text">
              Продукт полностью распродан!
              <br />
              <br />
              Оставьте свой e-mail и сайт AlexSkin уведомит вас о поступлении
              товара
            </p>
            <form action="" className="product-grid__form">
              <input
                type="text"
                className="product-grid__input"
                placeholder="Ваш e-mail"
              />
              <button
                type="submit"
                className="product-grid__button product-grid__button_submit"
              >
                Сообщить о поступлении
              </button>
            </form>
            <div className="product-grid__checkbox-wrapper">
              <div
                className={`product-grid__checkbox ${
                  isChecked ? "product-grid__checkbox_checked" : ""
                }`}
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && <img src={checkMark} alt="checkMark" />}
              </div>
              <p className="product-grid__unavailable-text">
                Согласен(на) с{" "}
                <span className="product-grid__link">
                  политикой конфиденциальности
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
