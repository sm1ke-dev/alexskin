import React from "react";
import styles from "./HowItWorks.module.scss";
import { howItWorksType } from "../../utils/constants/items";

type HowItWorksProps = {
  item: howItWorksType;
  name: string;
};

const HowItWorks: React.FC<HowItWorksProps> = ({ item, name }) => {
  const isPeptides = name === "Peptides Patches";

  return (
    <section
      className={`${styles.howItWorks} ${
        isPeptides ? styles.howItWorks_peptides : ""
      }`}
      style={{ backgroundColor: item.backgroundColor }}
    >
      <img
        src={item.image}
        alt="Как действует"
        className={styles.howItWorks__img}
      />
      <h2 className={styles.howItWorks__title}>Как действует {name}?</h2>
      <img
        src={item.itemPic}
        alt="cream"
        className={`${styles.howItWorks__cream} ${
          isPeptides ? styles.howItWorks__cream_peptides : ""
        }`}
      />
      <ul className={styles.howItWorks__list}>
        {item.list.map((i) => (
          <li
            key={i.id}
            className={`${styles.howItWorks__item} ${
              isPeptides ? styles.howItWorks__item_peptides : ""
            }`}
          >
            <div
              className={`${styles.howItWorks__textWrapper} ${
                isPeptides ? styles.howItWorks__textWrapper_peptides : ""
              }`}
            >
              <div
                className={`${styles.howItWorks__num} ${
                  isPeptides ? styles.howItWorks__num_peptides : ""
                }`}
              >
                {i.id}
              </div>
              <p className={styles.howItWorks__text}>{i.text}</p>
            </div>
            {!isPeptides && (
              <div className={styles.howItWorks__lineWrapper}>
                <hr
                  className={styles.howItWorks__line}
                  style={{ borderColor: item.lineColor }}
                />
                <div
                  className={styles.howItWorks__circle}
                  style={{ borderColor: item.lineColor }}
                ></div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowItWorks;
