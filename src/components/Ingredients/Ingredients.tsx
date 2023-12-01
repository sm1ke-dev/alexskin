import React from "react";
import styles from "./Ingredients.module.scss";
import Ingredient from "../Ingredient/Ingredient";
import { ingredientsType } from "../../utils/constants/items";

type IngredientsProps = {
  item: ingredientsType;
};

const Ingredients: React.FC<IngredientsProps> = ({ item }) => {
  return (
    <section
      className={styles.ingredients}
      style={{ background: item.backgroundColor }}
    >
      <hr className={styles.ingredients__line} />
      <h2 className={styles.ingredients__title}>Ингредиенты</h2>
      <div className={styles.ingredients__picWrapper}>
        <img
          src={item.image}
          alt="ingredients"
          className={styles.ingredients__pic}
        />
      </div>
      <ul className={styles.ingredients__list}>
        {item.list.map((i) => (
          <Ingredient key={i.id} {...i} borderColor={item.borderColor} />
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
