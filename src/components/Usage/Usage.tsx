import React from "react";
import styles from "./Usage.module.scss";
import { usageType } from "../../utils/constants/items";

type UsageProps = {
  item: usageType;
};

const Usage: React.FC<UsageProps> = ({ item }) => {
  return (
    <section className={styles.usage}>
      {item.methods.map((method) => (
        <div
          key={method.id}
          className={`${styles.usage__wrapper} ${
            method.id === 2 ? styles.usage__wrapper_second : ""
          }`}
        >
          <h2 className={styles.usage__title}>
            {item.methods.length > 1 && `${method.id} `}Способ применения
          </h2>
          <ul className={styles.usage__list}>
            {method.list.map((i) => (
              <li key={i.id} className={styles.usage__item}>
                {i.id === 1 && (
                  <img
                    src={item.arrows[0]}
                    alt="arrow"
                    className={styles.usage__topArrow}
                  />
                )}
                {method.list.length > 2 && i.id === 2 && (
                  <img
                    src={item.arrows[1]}
                    alt="arrow"
                    className={styles.usage__bottomArrow}
                  />
                )}
                <div className={styles.usage__picWrapper}>
                  <img
                    src={item.circle}
                    alt="gradient"
                    className={styles.usage__gradient}
                  />
                  <img src={i.face} alt="face" className={styles.usage__face} />
                  <div className={styles.usage__numWrapper}>
                    <img
                      src={i.numVector}
                      alt="num"
                      className={styles.usage__numVector}
                    />
                    <span className={styles.usage__num}>{i.id}</span>
                  </div>
                </div>
                <p className={styles.usage__text}>{i.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Usage;
