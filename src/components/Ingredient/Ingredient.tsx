import React from "react";
import styles from "./Ingredient.module.scss";

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
    <li className={styles.ingredient}>
      <div className={styles.ingredient__iconWrapper} style={{ borderColor }}>
        <img src={img} alt="icon" className={styles.ingredient__icon} />
      </div>
      <div className={styles.ingredient__textWrapper}>
        <h3 className={styles.ingredient__name}>{name}</h3>
        <p className={styles.ingredient__text}>{text}</p>
      </div>
    </li>
  );
};

export default Ingredient;
