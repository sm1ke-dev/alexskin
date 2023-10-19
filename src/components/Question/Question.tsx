import React from "react";
import "./Question.css";
import arrow from "../../images/arrow.svg";
import Answer from "../Answer/Answer";

const Question = () => {
  return (
    <div className="question">
      <h4 className="question__name">01 Какой у вас тип кожи?</h4>
      <ul className="question__answers-list">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </ul>
      <div className="question__pagination">
        <img src={arrow} alt="arrow" className="question__prev" />
        <p className="question__number">01 / 07</p>
        <img src={arrow} alt="arrow" className="question__next" />
      </div>
    </div>
  );
};

export default Question;
