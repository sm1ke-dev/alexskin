import React from "react";
import "./Ingredient.css";
import icon from "../../images/ingredients-icon1.svg";

const Ingredient = () => {
  return (
    <li className="ingredient">
      <div className="ingredient__icon-wrapper">
        <img src={icon} alt="icon" className="ingredient__icon" />
      </div>
      <div className="ingredient__text-wrapper">
        <h3 className="ingredient__name">Кофеин</h3>
        <p className="ingredient__text">
          Усиливает микроциркуляцию, снимает отёки
        </p>
      </div>
    </li>
  );
};

export default Ingredient;
