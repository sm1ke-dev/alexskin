import React from "react";
import "./FaqQuestion.css";
import { questionType } from "../../utils/constants/questions";

const FaqQuestion: React.FC<questionType> = ({ id, name, text }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <>
      <li className="faq-question" onClick={() => setIsClicked(!isClicked)}>
        <div className="faq-question__wrapper">
          <h3 className="faq-question__name">{name}</h3>
          <button
            className={`faq-question__button ${
              isClicked && "faq-question__button_clicked"
            }`}
          >
            <span className="line1"></span>
            <span className="line2"></span>
          </button>
        </div>
        <div
          className={`faq-question__answer-wrapper ${
            isClicked && "faq-question__answer-wrapper_opened"
          }`}
        >
          <p className="faq-question__answer">{text}</p>
        </div>
      </li>
      <hr className="faq__line" />
    </>
  );
};

export default FaqQuestion;
