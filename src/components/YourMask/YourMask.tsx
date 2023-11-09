import React from "react";
import Question from "../Question/Question";
import "./YourMask.css";
import { questions } from "../../utils/constants/yourMask";

const YourMask = () => {
  const [questionNumber, setQuestionNumber] = React.useState(1);

  return (
    <section className="your-mask">
      {questionNumber > questions.length ? (
        <div className="your-mask__wrapper">
          <h2 className="your-mask__title">Спасибо за ответы!</h2>
          <p className="your-mask__subtitle">
            Какая маска тебе подошла? Узнаешь, когда сайт будет готов &#128579;
          </p>
        </div>
      ) : (
        <>
          <h2 className="your-mask__title">
            Какая маска подойдет именно тебе?
          </h2>
          <Question
            {...questions[questionNumber - 1]}
            length={questions.length}
            questionNumber={questionNumber}
            onClick={setQuestionNumber}
          />
        </>
      )}
    </section>
  );
};

export default YourMask;
