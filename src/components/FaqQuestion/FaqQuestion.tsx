import React from "react";
import styles from "./FaqQuestion.module.scss";
import { questionType } from "../../utils/constants/questions";

const FaqQuestion: React.FC<questionType> = ({ id, name, text }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <>
      <li
        className={styles.faqQuestion}
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className={styles.faqQuestion__wrapper}>
          <h3 className={styles.faqQuestion__name}>{name}</h3>
          <button
            className={`${styles.faqQuestion__button} ${
              isClicked && styles.faqQuestion__button_clicked
            }`}
          >
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
          </button>
        </div>
        <div
          className={`${styles.faqQuestion__answerWrapper} ${
            isClicked && styles.faqQuestion__answerWrapper_opened
          }`}
        >
          <p className={styles.faqQuestion__answer}>{text}</p>
        </div>
      </li>
      <hr className={styles.line3} />
    </>
  );
};

export default FaqQuestion;
