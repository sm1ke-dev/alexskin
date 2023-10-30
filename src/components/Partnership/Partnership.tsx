import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./Partnership.css";

const Partnership = () => {
  return (
    <main className="partner">
      <Breadcrumbs />
      <h2 className="partner__title">Сотрудничество</h2>
      <ul className="partner__grid">
        <li className="partner-item">
          <h3 className="partner-item__title">
            Приглашаем к сотрудничеству коммерческие организации:
          </h3>
          <p className="partner-item__text">
            - Косметические розничные магазины
            <br />
            - Косметологические клиники и салоны красоты
            <br />
            - Врачей-косметологов и мастеров-эстетистов
            <br />- Желающих стать офиц.представителями бренда в вашем городе
          </p>
        </li>
        <li className="partner-item">
          <h3 className="partner-item__title">
            По другим вопросам сотрудничества с брендом:
          </h3>
          <p className="partner-item__text partner-item__text_wide">
            Тел: +7 925 712 10 11
            <br />
            E-mail: pr.alexskin@gmail.com
            <br />
            WhatsApp: https://l.clck.bar/9cf76
          </p>
        </li>
        <li className="partner-item">
          <h3 className="partner-item__title">
            По вопросам дистрибуции продукции ALEXSKIN:
          </h3>
          <p className="partner-item__text">E-mail: acosmetic23@gmail.com</p>
        </li>
      </ul>
    </main>
  );
};

export default Partnership;
