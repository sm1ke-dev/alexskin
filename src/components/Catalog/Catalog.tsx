import React from "react";
import "./Catalog.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import MainCatalog from "../MainCatalog/MainCatalog";
import Discount from "../Discount/Discount";
import Expert from "../Expert/Expert";

const Catalog: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="catalog">
      <Breadcrumbs page="Каталог" urlPath="catalog" />
      <MainCatalog page="catalog" />
      <Discount />
      <Expert />
    </main>
  );
};

export default Catalog;
