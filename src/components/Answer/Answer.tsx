import React from "react";
import "./Answer.css";
import background from "../../images/background.png";

const Answer = () => {
  return (
    <li className="answer">
      <div className="answer__circle">
        <img src={background} alt="" className="answer__background" />
      </div>
      <div className="answer__checkbox"></div>
      <p className="answer__name">Нормальная</p>
    </li>
  );
};

export default Answer;
