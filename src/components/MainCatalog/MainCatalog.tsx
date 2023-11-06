import React from "react";
import "./MainCatalog.css";
import Item from "../Item/Item";

type MainCatalogProps = {
  page: string;
  title?: string;
};

const MainCatalog: React.FC<MainCatalogProps> = ({
  page,
  title = "Каталог",
}) => {
  return (
    <section className={`catalog-list ${page}__catalog-list`}>
      <h2 className="catalog-list__title">{title}</h2>
      <ul className="catalog-list__items">
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </section>
  );
};

export default MainCatalog;
