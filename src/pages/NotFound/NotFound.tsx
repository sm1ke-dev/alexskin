import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.notFound}>
      <h2 className={styles.notFound__title}>404</h2>
      <p className={styles.notFound__subtitle}>Страница не найдена</p>
      <p className={styles.notFound__link} onClick={() => navigate(-1)}>
        Назад
      </p>
    </main>
  );
};

export default NotFound;
