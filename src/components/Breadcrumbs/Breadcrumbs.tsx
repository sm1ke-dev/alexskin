import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <p className="breadcrumbs">
      <Link to="/" className="breadcrumbs__link">
        Главная
      </Link>
      <span className="breadcrumbs__slash"> /</span> О бренде
    </p>
  );
};

export default Breadcrumbs;
