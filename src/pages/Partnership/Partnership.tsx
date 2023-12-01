import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "./Partnership.module.scss";

const Partnership: React.FC = () => {
  return (
    <main className={styles.partner}>
      <div className={styles.partner__breadcrumbs}>
        <Breadcrumbs page="Сотрудничество" />
      </div>
      <h2 className={styles.partner__title}>Сотрудничество</h2>
      <ul className={styles.partner__grid}>
        <li className={styles.partnerItem}>
          <h3 className={styles.partnerItem__title}>
            Приглашаем к сотрудничеству коммерческие организации:
          </h3>
          <p className={styles.partnerItem__text}>
            - Косметические розничные магазины
            <br />
            - Косметологические клиники и салоны красоты
            <br />
            - Врачей-косметологов и мастеров-эстетистов
            <br />- Желающих стать офиц.представителями бренда в вашем городе
          </p>
        </li>
        <li className={styles.partnerItem}>
          <h3 className={styles.partnerItem__title}>
            По другим вопросам сотрудничества с брендом:
          </h3>
          <p
            className={`${styles.partnerItem__text} ${styles.partnerItem__text_wide}`}
          >
            Тел: +7 925 712 10 11
            <br />
            E-mail: pr.alexskin@gmail.com
            <br />
            WhatsApp: https://l.clck.bar/9cf76
          </p>
        </li>
        <li className={styles.partnerItem}>
          <h3 className={styles.partnerItem__title}>
            По вопросам дистрибуции продукции ALEXSKIN:
          </h3>
          <p className={styles.partnerItem__text}>
            E-mail: acosmetic23@gmail.com
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Partnership;
