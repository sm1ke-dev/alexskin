import React from "react";
import styles from "./Breadcrumbs.module.scss";
import { Link } from "react-router-dom";
type BreadcrumbsProps = {
  page: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ page }) => {
  return (
    <p className={styles.breadcrumbs}>
      <Link to="/alexskin/" className={styles.breadcrumbs__link}>
        Главная
      </Link>
      <span className={styles.breadcrumbs__slash}> /</span>
      {` ${page}`}
    </p>
  );
};

export default Breadcrumbs;
