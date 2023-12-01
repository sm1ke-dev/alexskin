import React from "react";
import styles from "./Catalog.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import MainCatalog from "../../components/MainCatalog/MainCatalog";
import Discount from "../../components/Discount/Discount";
import Expert from "../../components/Expert/Expert";

const Catalog: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.catalog}>
      <div className={styles.catalog__breadcrumbs}>
        <Breadcrumbs page="Каталог" />
      </div>
      <div className={styles.catalog__catalogList}>
        <MainCatalog />
      </div>
      <Discount />
      <Expert />
    </main>
  );
};

export default Catalog;
