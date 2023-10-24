import React from "react";
import "./Catalog.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import MainCatalog from "../MainCatalog/MainCatalog";
import Discount from "../Discount/Discount";
import Expert from "../Expert/Expert";

const Catalog = () => {
  return (
    <main className="catalog">
      <Breadcrumbs />
      <MainCatalog page="catalog" />
      <Discount />
      <Expert />
    </main>
  );
};

export default Catalog;
