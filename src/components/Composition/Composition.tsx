import React from "react";
import styles from "./Composition.module.scss";
import { compositionType } from "../../utils/constants/items";

type CompositionProps = {
  item: compositionType;
};

const Composition: React.FC<CompositionProps> = ({ item }) => {
  return (
    <section className={styles.composition}>
      <h2 className={styles.composition__title}>Состав</h2>
      <p className={styles.composition__text}>{item.text}</p>
      <div className={styles.composition__picWrapper}>
        <img src={item.image} alt="pic" className={styles.composition__pic} />
      </div>
    </section>
  );
};

export default Composition;
