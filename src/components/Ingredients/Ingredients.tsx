import React from "react";
import "./Ingredients.css";
import Ingredient from "../Ingredient/Ingredient";
import { ingredientsType } from "../../utils/constants/items";

type IngredientsProps = {
  item: ingredientsType;
};

const Ingredients: React.FC<IngredientsProps> = ({ item }) => {
  return (
    <section
      className="ingredients"
      style={{ background: item.backgroundColor }}
    >
      <hr className="ingredients__line" />
      <h2 className="ingredients__title">Ингредиенты</h2>
      <div className="ingredients__pic-wrapper">
        <img src={item.image} alt="ingredients" className="ingredients__pic" />
      </div>
      <ul className="ingredients__list">
        {item.list.map((i) => (
          <Ingredient key={i.id} {...i} borderColor={item.borderColor} />
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
