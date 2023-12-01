import React from "react";
import styles from "./Item.module.scss";
import cart from "../../images/cart-icon.svg";
import { useNavigate } from "react-router-dom";

type ItemProps = {
  name: string;
  url: string;
  isAvailable: boolean;
  price: number;
  oldPrice: number;
  mainPic: string;
  shortDescription: string;
};

const Item: React.FC<ItemProps> = ({
  name,
  url,
  isAvailable,
  price,
  oldPrice,
  mainPic,
  shortDescription,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    window.scrollTo(0, 0);
    navigate(`/alexskin/catalog/${url}`);
  };

  return (
    <li className={styles.item}>
      <img
        src={mainPic}
        alt="morningMasque"
        className={`${styles.item__image} ${
          isHovered && styles.item__image_hovered
        }`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={onClick}
      />
      <div className={styles.item__priceWrapper}>
        <p
          className={`${styles.item__price} ${styles.item__price_tablet} ${
            !isAvailable ? styles.item__price_unavailable : ""
          }`}
        >
          {price} р.
        </p>
        {oldPrice !== 0 && (
          <p
            className={`${styles.item__oldPrice} ${styles.item__oldPrice_tablet}`}
          >
            {oldPrice} р.
          </p>
        )}
      </div>
      <h3
        className={`${styles.item__title} ${
          isHovered && styles.item__title_hovered
        }`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={onClick}
      >
        {name}
      </h3>
      <p className={styles.item__description}>{shortDescription}</p>
      <div className={styles.item__priceWrapper}>
        <p
          className={`${styles.item__price} ${styles.item__price_desktop} ${
            !isAvailable ? styles.item__price_unavailable : ""
          }`}
        >
          {price} р.
        </p>
        {oldPrice !== 0 && (
          <p
            className={`${styles.item__oldPrice} ${styles.item__oldPrice_desktop}`}
          >
            {oldPrice} р.
          </p>
        )}
        {isAvailable ? (
          <div className={styles.item__iconWrapper}>
            <img src={cart} alt="cart" className={styles.item__cartIcon} />
          </div>
        ) : (
          <p className={styles.item__unavailable}>Нет в наличии</p>
        )}
      </div>
    </li>
  );
};

export default Item;
