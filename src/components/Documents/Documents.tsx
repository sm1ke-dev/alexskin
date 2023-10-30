import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./Documents.css";
import doc from "../../images/document.png";

const Documents = () => {
  return (
    <main className="docs">
      <Breadcrumbs />
      <h2 className="docs__title">Документы</h2>
      <div className="docs__wrapper">
        <h3 className="docs__name">Декларация соответствия</h3>
        <p className="docs__text">
          Продукция ALEXSKIN отвечает всем требованиям качества и безопасности:
        </p>
        <div className="docs__scan-wrapper">
          <img src={doc} alt="doc" className="docs__scan" />
        </div>
        <h3 className="docs__name">Свидетельство на товарный знак</h3>
        <div className="docs__scan-wrapper"></div>
        <h3 className="docs__name">Свидетельство регистрации ООО</h3>
        <div className="docs__scan-wrapper"></div>
      </div>
    </main>
  );
};

export default Documents;
