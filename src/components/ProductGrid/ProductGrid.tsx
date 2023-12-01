import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import styles from "./ProductGrid.module.scss";
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

  React.useEffect(() => {
    setPicIndex(0);
  }, [window.location.pathname]);

  return (
    <div className={styles.productGrid}>
      <div className={styles.productGrid__picsWrapper}>
        <button
          className={`${styles.productGrid__arrowButton} ${
            styles.productGrid__arrowButton_up
          } ${picIndex === 0 ? styles.productGrid__arrowButton_disabled : ""}`}
          disabled={picIndex === 0}
          onClick={() => setPicIndex(picIndex - 1)}
        >
          <svg
            className={styles.productGrid__arrow}
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
            className={`${styles.productGrid__pic} ${
              item.productPics.indexOf(pic) === picIndex
                ? styles.productGrid__pic_selected
                : ""
            }`}
            onClick={() => setPicIndex(item.productPics.indexOf(pic))}
          >
            <img
              src={pic}
              alt="main picture"
              className={styles.productGrid__mainPic}
            />
          </div>
        ))}
        <button
          className={`${styles.productGrid__arrowButton} ${
            styles.productGrid__arrowButton_down
          } ${
            picIndex === item.productPics.length - 1
              ? styles.productGrid__arrowButton_disabled
              : ""
          }`}
          disabled={picIndex === item.productPics.length - 1}
          onClick={() => setPicIndex(picIndex + 1)}
        >
          <svg
            className={styles.productGrid__arrow}
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
      <div className={styles.productGrid__mainWrapper}>
        <img
          src={item.productPics[picIndex]}
          alt="main picture"
          className={styles.productGrid__mainPic}
        />
        <button
          className={`${styles.productGrid__arrowButton} ${
            styles.productGrid__arrowButton_left
          } ${picIndex === 0 ? styles.productGrid__arrowButton_disabled : ""}`}
          disabled={picIndex === 0}
          onClick={() => setPicIndex(picIndex - 1)}
        >
          <svg
            className={styles.productGrid__arrow}
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
          className={`${styles.productGrid__arrowButton} ${
            styles.productGrid__arrowButton_right
          } ${
            picIndex === item.productPics.length - 1
              ? styles.productGrid__arrowButton_disabled
              : ""
          }`}
          disabled={picIndex === item.productPics.length - 1}
          onClick={() => setPicIndex(picIndex + 1)}
        >
          <svg
            className={styles.productGrid__arrow}
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
          className={styles.productGrid__picButton}
          onClick={() => onClick(item.productPics[picIndex])}
        >
          <img
            src={fullscreenIcon}
            alt="fullscreenIcon"
            className={styles.productGrid__fullscreenIcon}
          />
        </button>
      </div>
      <div className={styles.productGrid__descriptionWrapper}>
        <Breadcrumbs page={item.name} />
        <h2 className={styles.productGrid__title}>{item.name}</h2>
        <div className={styles.productGrid__priceWrapper}>
          <p
            className={`${styles.productGrid__price} ${
              !item.isAvailable ? styles.productGrid__price_unavailable : ""
            }`}
          >
            {item.price} р.
          </p>
          {item.oldPrice !== 0 && (
            <p className={styles.productGrid__oldPrice}>{item.oldPrice} р.</p>
          )}
          {!item.isAvailable && (
            <p className={styles.productGrid__unavailable}>Нет в наличии</p>
          )}
        </div>
        <hr className={styles.productGrid__line} />
        <p
          className={styles.productGrid__text}
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></p>
        {item.isAvailable ? (
          <>
            <div className={styles.productGrid__counter}>
              <button
                onClick={() => setCount(count - 1)}
                className={styles.productGrid__minus}
                disabled={count === 0}
              >
                -
              </button>
              <div className={styles.productGrid__numberWrapper}>
                <p className={styles.productGrid__number}>{count}</p>
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className={styles.productGrid__plus}
                disabled={count === 9}
              >
                +
              </button>
            </div>
            <button className={styles.productGrid__button}>В корзину</button>
          </>
        ) : (
          <>
            <hr className={styles.productGrid__unavailableLine} />
            <p className={styles.productGrid__unavailableText}>
              Продукт полностью распродан!
              <br />
              <br />
              Оставьте свой e-mail и сайт AlexSkin уведомит вас о поступлении
              товара
            </p>
            <form action="" className={styles.productGrid__form}>
              <input
                type="text"
                className={styles.productGrid__input}
                placeholder="Ваш e-mail"
              />
              <button
                type="submit"
                className={`${styles.productGrid__button} ${styles.productGrid__button_submit}`}
              >
                Сообщить о поступлении
              </button>
            </form>
            <div className={styles.productGrid__checkboxWrapper}>
              <div
                className={`product-grid__checkbox ${
                  isChecked ? "product-grid__checkbox_checked" : ""
                }`}
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && <img src={checkMark} alt="checkMark" />}
              </div>
              <p className={styles.productGrid__unavailableText}>
                Согласен(на) с{" "}
                <span className={styles.productGrid__link}>
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
