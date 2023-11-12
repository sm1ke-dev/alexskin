import React from "react";
import MainCatalog from "../MainCatalog/MainCatalog";
import "./Other.css";

const Other: React.FC = () => {
  return (
    <section className="other">
      <MainCatalog page="product" title="Другие продукты" />
    </section>
  );
};

export default Other;
