import React from "react";
import MainCatalog from "../MainCatalog/MainCatalog";
import styles from "./Other.module.scss";

const Other: React.FC = () => {
  return (
    <section className={styles.other}>
      <MainCatalog title="Другие продукты" />
    </section>
  );
};

export default Other;
