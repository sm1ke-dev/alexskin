import React from "react";
import "./Catalog.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import MainCatalog from "../MainCatalog/MainCatalog";
import Discount from "../Discount/Discount";

const Catalog = () => {
  return (
    <main className="catalog">
      <Breadcrumbs />
      <MainCatalog page="catalog" />
      <Discount />
    </main>
  );
};

export default Catalog;
