import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: (i: boolean) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.mobileMenu} ${
        isOpen ? styles.mobileMenu_opened : ""
      }`}
    >
      <button
        type="button"
        className={styles.mobileMenu__button}
        onClick={() => onClose(false)}
      >
        <span className={styles.mobileMenu__line1}></span>
        <span className={styles.mobileMenu__line2}></span>
      </button>
      <ul className={styles.mobileMenu__list}>
        <li className={styles.mobileMenu__item}>
          <Link
            to="/alexskin/about"
            className={styles.mobileMenu__link}
            onClick={() => onClose(false)}
          >
            О бренде
          </Link>
        </li>
        <li className={styles.mobileMenu__item}>
          <Link
            to="/alexskin/catalog"
            className={styles.mobileMenu__link}
            onClick={() => onClose(false)}
          >
            Каталог
          </Link>
        </li>
        <li className={styles.mobileMenu__item}>
          <Link
            to="/alexskin/community"
            className={styles.mobileMenu__link}
            onClick={() => onClose(false)}
          >
            Коммьюнити
          </Link>
        </li>
        <li className={styles.mobileMenu__item}>
          <Link
            to="/alexskin/service"
            className={styles.mobileMenu__link}
            onClick={() => onClose(false)}
          >
            Сервис
          </Link>
        </li>
        <li className={styles.mobileMenu__item}>
          <Link
            to="/alexskin/faq"
            className={styles.mobileMenu__link}
            onClick={() => onClose(false)}
          >
            FAQ
          </Link>
        </li>
        <li className={styles.mobileMenu__item}>
          <Link
            to="/alexskin/partnership"
            className={styles.mobileMenu__link}
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
