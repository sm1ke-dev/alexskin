import React from "react";
import "./Item.css";
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
    navigate(`/catalog/${url}`);
  };

  return (
    <li className="item">
      <img
        src={mainPic}
        alt="morningMasque"
        className={`item__image ${isHovered && "item__image_hovered"}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={onClick}
      />
      <div className="item__price-wrapper">
        <p
          className={`item__price item__price_tablet ${
            !isAvailable ? "item__price_unavailable" : ""
          }`}
        >
          {price} р.
        </p>
        {oldPrice !== 0 && (
          <p className="item__old-price item__old-price_tablet">
            {oldPrice} р.
          </p>
        )}
      </div>
      <h3
        className={`item__title ${isHovered && "item__title_hovered"}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={onClick}
      >
        {name}
      </h3>
      <p className="item__description">{shortDescription}</p>
      <div className="item__price-wrapper">
        <p
          className={`item__price item__price_desktop ${
            !isAvailable ? "item__price_unavailable" : ""
          }`}
        >
          {price} р.
        </p>
        {oldPrice !== 0 && (
          <p className="item__old-price item__old-price_desktop">
            {oldPrice} р.
          </p>
        )}
        {isAvailable ? (
          <div className="item__icon-wrapper">
            <img src={cart} alt="cart" className="item__cart-icon" />
          </div>
        ) : (
          <p className="item__unavailable">Нет в наличии</p>
        )}
      </div>
    </li>
  );
};

export default Item;
