import React from "react";
import "./FaqQuestion.css";

const FaqQuestion = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <>
      <li className="faq-question">
        <div className="faq-question__wrapper">
          <h3 className="faq-question__name">Как оплатить заказ?</h3>
          <button
            className={`faq-question__button ${
              isClicked && "faq-question__button_clicked"
            }`}
            onClick={() => setIsClicked(!isClicked)}
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
          <p className="faq-question__answer">
            Оплата заказа производится на сайте с помощью банковской карты (Мир,
            Visa, MasterCard и др.) Отправка товара осуществляется только по
            100% предоплате. Чек поступит на вашу электронную почту
          </p>
        </div>
      </li>
      <hr className="faq__line" />
    </>
  );
};

export default FaqQuestion;
