import React from "react";
import "./HowItWorks.css";
import howItWorksImg from "../../images/how-it-work1.png";
import morningMasqueItem from "../../images/morning-masque-noback.png";
import { howItWorksType } from "../../utils/constants/items";

type HowItWorksProps = {
  item: howItWorksType;
  name: string;
};

const HowItWorks: React.FC<HowItWorksProps> = ({ item, name }) => {
  const isPeptides = name === "Peptides Patches";

  return (
    <section
      className={`how-it-works ${isPeptides ? "how-it-works_peptides" : ""}`}
      style={{ backgroundColor: item.backgroundColor }}
    >
      <img src={item.image} alt="Как действует" className="how-it-works__img" />
      {/* <img src={item.itemPic} alt="cream" className="how-it-works__cream" /> */}
      <h2 className="how-it-works__title">Как действует {name}?</h2>
      <img
        src={item.itemPic}
        alt="cream"
        className={`how-it-works__cream ${
          isPeptides ? "how-it-works__cream_peptides" : ""
        }`}
      />
      <ul className="how-it-works__list">
        {item.list.map((i) => (
          <li
            className={`how-it-works__item ${
              isPeptides ? "how-it-works__item_peptides" : ""
            }`}
          >
            <div
              className={`how-it-works__text-wrapper ${
                isPeptides ? "how-it-works__text-wrapper_peptides" : ""
              }`}
            >
              <div
                className={`how-it-works__num ${
                  isPeptides ? "how-it-works__num_peptides" : ""
                }`}
              >
                {i.id}
              </div>
              <p className="how-it-works__text">{i.text}</p>
            </div>
            {!isPeptides && (
              <div className="how-it-works__line-wrapper">
                <hr
                  className="how-it-works__line"
                  style={{ borderColor: item.lineColor }}
                />
                <div
                  className="how-it-works__circle"
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
