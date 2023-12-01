import React from "react";
import Question from "../Question/Question";
import styles from "./YourMask.module.scss";
import { questions } from "../../utils/constants/yourMask";

const YourMask: React.FC = () => {
  const [questionNumber, setQuestionNumber] = React.useState(1);

  return (
    <section className={styles.yourMask}>
      {questionNumber > questions.length ? (
        <div className={styles.yourMask__wrapper}>
          <h2 className={styles.yourMask__title}>Спасибо за ответы!</h2>
          <p className={styles.yourMask__subtitle}>
            Какая маска тебе подошла? Узнаешь, когда сайт будет готов &#128579;
          </p>
        </div>
      ) : (
        <>
          <h2 className={styles.yourMask__title}>
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
