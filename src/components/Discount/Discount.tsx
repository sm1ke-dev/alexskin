import React from "react";
import styles from "./Discount.module.scss";
import vector from "../../images/catalog-vector.svg";
import products from "../../images/catalog-3packs.png";

const Discount: React.FC = () => {
  return (
    <section className={styles.discount}>
      <img src={vector} alt="vector" className={styles.discount__vector} />
      <img
        src={products}
        alt="products"
        className={styles.discount__products}
      />
      <div className={styles.discount__wrapper}>
        <h2 className={styles.discount__title}>
          Купите 3 маски и получите скидку
        </h2>
        <p className={styles.discount__percent}>20%</p>
      </div>
    </section>
  );
};

export default Discount;
