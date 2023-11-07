import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
type BreadcrumbsProps = {
  page: string;
  urlPath?: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ page, urlPath }) => {
  return (
    <p className={`breadcrumbs ${urlPath && `${urlPath}__breadcrumbs`}`}>
      <Link to="/" className="breadcrumbs__link">
        Главная
      </Link>
      <span className="breadcrumbs__slash"> /</span>
      {` ${page}`}
    </p>
  );
};

export default Breadcrumbs;
