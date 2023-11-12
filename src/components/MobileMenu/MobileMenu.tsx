import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: (i: boolean) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu_opened" : ""}`}>
      <button
        type="button"
        className="mobile-menu__button"
        onClick={() => onClose(false)}
      >
        <span className="mobile-menu__line-1"></span>
        <span className="mobile-menu__line-2"></span>
      </button>
      <ul className="mobile-menu__list">
        <li className="mobile-menu__item">
          <Link
            to="/alexskin/about"
            className="mobile-menu__link"
            onClick={() => onClose(false)}
          >
            О бренде
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/alexskin/catalog"
            className="mobile-menu__link"
            onClick={() => onClose(false)}
          >
            Каталог
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/alexskin/community"
            className="mobile-menu__link"
            onClick={() => onClose(false)}
          >
            Коммьюнити
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/alexskin/service"
            className="mobile-menu__link"
            onClick={() => onClose(false)}
          >
            Сервис
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/alexskin/faq"
            className="mobile-menu__link"
            onClick={() => onClose(false)}
          >
            FAQ
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/alexskin/partnership"
            className="mobile-menu__link"
            onClick={() => onClose(false)}
          >
            Сотрудничество
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
