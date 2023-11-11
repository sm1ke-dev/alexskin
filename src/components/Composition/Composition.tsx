import React from "react";
import "./Composition.css";
import pic from "../../images/composition-pic.png";
import { compositionType } from "../../utils/constants/items";

type CompositionProps = {
  item: compositionType;
};

const Composition: React.FC<CompositionProps> = ({ item }) => {
  return (
    <section className="composition">
      <h2 className="composition__title">Состав</h2>
      <p className="composition__text">{item.text}</p>
      <div className="composition__pic-wrapper">
        <img src={item.image} alt="pic" className="composition__pic" />
      </div>
    </section>
  );
};

export default Composition;
