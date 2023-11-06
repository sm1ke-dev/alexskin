import React from "react";
import "./Ingredients.css";
import ingredients from "../../images/ingredients-back.png";
import Ingredient from "../Ingredient/Ingredient";

const Ingredients = () => {
  return (
    <section className="ingredients">
      <hr className="ingredients__line" />
      <h2 className="ingredients__title">Ингредиенты</h2>
      <div className="ingredients__pic-wrapper">
        <img src={ingredients} alt="ingredients" className="ingredients__pic" />
      </div>
      <ul className="ingredients__list">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </ul>
    </section>
  );
};

export default Ingredients;
