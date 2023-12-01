import React from "react";
import styles from "./MainCatalog.module.scss";
import Item from "../Item/Item";
import { items } from "../../utils/constants/items";

type MainCatalogProps = {
  title?: string;
};

const MainCatalog: React.FC<MainCatalogProps> = ({ title = "Каталог" }) => {
  return (
    <section className={styles.catalogList}>
      <h2 className={styles.catalogList__title}>{title}</h2>
      <ul className={styles.catalogList__items}>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default MainCatalog;
