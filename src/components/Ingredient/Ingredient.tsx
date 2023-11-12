import React from "react";
import "./Ingredient.css";

type IngredientProps = {
  img: string;
  name: string;
  text: string;
  borderColor: string;
};

const Ingredient: React.FC<IngredientProps> = ({
  img,
  name,
  text,
  borderColor,
}) => {
  return (
    <li className="ingredient">
      <div className="ingredient__icon-wrapper" style={{ borderColor }}>
        <img src={img} alt="icon" className="ingredient__icon" />
      </div>
      <div className="ingredient__text-wrapper">
        <h3 className="ingredient__name">{name}</h3>
        <p className="ingredient__text">{text}</p>
      </div>
    </li>
  );
};

export default Ingredient;
