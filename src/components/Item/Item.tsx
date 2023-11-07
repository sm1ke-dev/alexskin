import React from "react";
import "./Item.css";
import morningMasque from "../../images/morning.png";
import cart from "../../images/cart-icon.svg";

const Item = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  console.log(isHovered);

  return (
    <li className="item">
      <img
        src={morningMasque}
        alt="morningMasque"
        className={`item__image ${isHovered && "item__image_hovered"}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      />
      <div className="item__price-wrapper">
        <p className="item__price item__price_tablet">2500 р.</p>
        <p className="item__old-price item__old-price_tablet">2800 р.</p>
      </div>
      <h3
        className={`item__title ${isHovered && "item__title_hovered"}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        Morning Masque
      </h3>
      <p className="item__description">
        Утренняя витаминная маска с дренажным эффектом
      </p>
      <div className="item__price-wrapper">
        <p className="item__price item__price_desktop">2500 р.</p>
        <p className="item__old-price item__old-price_desktop">2800 р.</p>
        <div className="item__icon-wrapper">
          <img src={cart} alt="cart" className="item__cart-icon" />
        </div>
      </div>
    </li>
  );
};

export default Item;
