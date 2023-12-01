import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "./Documents.module.scss";
import doc from "../../images/document.png";

const Documents: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.docs}>
      <div className={styles.docs__breadcrumbs}>
        <Breadcrumbs page="Документы" />
      </div>
      <h2 className={styles.docs__title}>Документы</h2>
      <div className={styles.docs__wrapper}>
        <h3 className={styles.docs__name}>Декларация соответствия</h3>
        <p className={styles.docs__text}>
          Продукция ALEXSKIN отвечает всем требованиям качества и безопасности:
        </p>
        <div className={styles.docs__scanWrapper}>
          <img src={doc} alt="doc" className={styles.docs__scan} />
        </div>
        <h3 className={styles.docs__name}>Свидетельство на товарный знак</h3>
        <div className={styles.docs__scanWrapper}></div>
        <h3 className={styles.docs__name}>Свидетельство регистрации ООО</h3>
        <div className={styles.docs__scanWrapper}></div>
      </div>
    </main>
  );
};

export default Documents;
