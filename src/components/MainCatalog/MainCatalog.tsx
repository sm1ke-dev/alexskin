import React from "react";
import "./MainCatalog.css";
import Item from "../Item/Item";

const MainCatalog = () => {
  return (
    <section className="main-catalog">
      <h2 className="main-catalog__title">Каталог</h2>
      <ul className="main-catalog__items">
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </section>
  );
};

export default MainCatalog;
