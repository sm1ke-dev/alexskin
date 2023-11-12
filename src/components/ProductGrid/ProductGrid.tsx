import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./ProductGrid.css";
import fullscreenIcon from "../../images/fullscreen-icon.svg";
import checkMark from "../../images/check-mark.svg";
import { itemsType } from "../../utils/constants/items";

type ProductGridProps = {
  item: itemsType;
  onClick: (img: string) => void;
};

const ProductGrid: React.FC<ProductGridProps> = ({ item, onClick }) => {
  const [count, setCount] = React.useState(0);
  const [picIndex, setPicIndex] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="product-grid">
      <div className="product-grid__pics-wrapper">
        <button
          className={`product-grid__arrow-button product-grid__arrow-button_up ${
            picIndex === 0 ? "product-grid__arrow-button_disabled" : ""
          }`}
          disabled={picIndex === 0}
          onClick={() => setPicIndex(picIndex - 1)}
        >
          <svg
            className="product-grid__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
          >
            <path
              d="M2 8L8 2L14 8"
              stroke={picIndex === 0 ? "#9C9EA9" : "#383B47"}
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
        {item.productPics.map((pic) => (
          <div
            key={item.productPics.indexOf(pic)}
            className={`product-grid__pic ${
              item.productPics.indexOf(pic) === picIndex
                ? "product-grid__pic_selected"
                : ""
            }`}
            onClick={() => setPicIndex(item.productPics.indexOf(pic))}
          >
            <img
              src={pic}
              alt="main picture"
              className="product-grid__main-pic"
            />
          </div>
        ))}
        <button
          className={`product-grid__arrow-button product-grid__arrow-button_down ${
            picIndex === item.productPics.length - 1
              ? "product-grid__arrow-button_disabled"
              : ""
          }`}
          disabled={picIndex === item.productPics.length - 1}
          onClick={() => setPicIndex(picIndex + 1)}
        >
          <svg
            className="product-grid__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
          >
            <path
              d="M2 2L8 8L14 2"
              stroke={
                picIndex === item.productPics.length - 1 ? "#9C9EA9" : "#383B47"
              }
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
      <div className="product-grid__main-wrapper">
        <img
          src={item.productPics[picIndex]}
          alt="main picture"
          className="product-grid__main-pic"
        />
        <button
          className={`product-grid__arrow-button product-grid__arrow-button_left ${
            picIndex === 0 ? "product-grid__arrow-button_disabled" : ""
          }`}
          disabled={picIndex === 0}
          onClick={() => setPicIndex(picIndex - 1)}
        >
          <svg
            className="product-grid__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M8 2L2 8L8 14"
              stroke={picIndex === 0 ? "#9C9EA9" : "#383B47"}
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
        <button
          className={`product-grid__arrow-button product-grid__arrow-button_right ${
            picIndex === item.productPics.length - 1
              ? "product-grid__arrow-button_disabled"
              : ""
          }`}
          disabled={picIndex === item.productPics.length - 1}
          onClick={() => setPicIndex(picIndex + 1)}
        >
          <svg
            className="product-grid__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M2 2L8 8L2 14"
              stroke={
                picIndex === item.productPics.length - 1 ? "#9C9EA9" : "#383B47"
              }
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
        <button
          className="product-grid__pic-button"
          onClick={() => onClick(item.productPics[picIndex])}
        >
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
            <p className="product-grid__old-price">{item.oldPrice} р.</p>
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
