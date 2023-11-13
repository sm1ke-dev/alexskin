import React from "react";
import "./Usage.css";
import { usageType } from "../../utils/constants/items";

type UsageProps = {
  item: usageType;
};

const Usage: React.FC<UsageProps> = ({ item }) => {
  return (
    <section className="usage">
      {item.methods.map((method) => (
        <div
          key={method.id}
          className={`usage__wrapper ${
            method.id === 2 ? "usage__wrapper_second" : ""
          }`}
        >
          <h2 className="usage__title">
            {item.methods.length > 1 && `${method.id} `}Способ применения
          </h2>
          <ul className="usage__list">
            {method.list.map((i) => (
              <li key={i.id} className="usage__item">
                {i.id === 1 && (
                  <img
                    src={item.arrows[0]}
                    alt="arrow"
                    className="usage__top-arrow"
                  />
                )}
                {method.list.length > 2 && i.id === 2 && (
                  <img
                    src={item.arrows[1]}
                    alt="arrow"
                    className="usage__bottom-arrow"
                  />
                )}
                <div className="usage__pic-wrapper">
                  <img
                    src={item.circle}
                    alt="gradient"
                    className="usage__gradient"
                  />
                  <img src={i.face} alt="face" className="usage__face" />
                  <div className="usage__num-wrapper">
                    <img
                      src={i.numVector}
                      alt="num"
                      className="usage__num-vector"
                    />
                    <span className="usage__num">{i.id}</span>
                  </div>
                </div>
                <p className="usage__text">{i.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Usage;