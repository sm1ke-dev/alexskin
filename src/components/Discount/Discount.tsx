import React from "react";
import "./Discount.css";
import vector from "../../images/catalog-vector.svg";
import products from "../../images/catalog-3packs.png";

const Discount: React.FC = () => {
  return (
    <section className="discount">
      <img src={vector} alt="vector" className="discount__vector" />
      <img src={products} alt="products" className="discount__products" />
      <div className="discount__wrapper">
        <h2 className="discount__title">Купите 3 маски и получите скидку</h2>
        <p className="discount__percent">20%</p>
      </div>
    </section>
  );
};

export default Discount;
