import React from "react";
import "./Catalog.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import MainCatalog from "../../components/MainCatalog/MainCatalog";
import Discount from "../../components/Discount/Discount";
import Expert from "../../components/Expert/Expert";

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
