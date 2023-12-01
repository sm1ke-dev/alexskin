import React from "react";
import styles from "./Answer.module.scss";
import { AnswerType } from "../../utils/constants/yourMask";
type AnswerProps = AnswerType & {
  isQuestionChanged: boolean;
  nextQuestion: (answerId: string) => void;
  questionId: string;
  answersObj: {
    [index: string]: string;
  };
};

const Answer: React.FC<AnswerProps> = ({
  id,
  text,
  pic,
  isQuestionChanged,
  nextQuestion,
  questionId,
  answersObj,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const onClick = () => {
    setIsClicked(true);
    nextQuestion(id);

    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <li
      className={`${styles.answer} ${
        isQuestionChanged ? styles.answer_faded : ""
      }`}
    >
      <div
        className={styles.answer__circlesWrapper}
        onClick={onClick}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className={styles.answer__circle}>
          <img
            src={pic}
            alt="background"
            className={styles.answer__background}
          />
        </div>
        <div
          className={`${styles.answer__checkbox} ${
            isHovered ? styles.answer__checkbox_hovered : ""
          }`}
        >
          {(isClicked || answersObj[questionId] === id) && (
            <div className={styles.answer__point}></div>
          )}
        </div>
      </div>
      <p className={styles.answer__name}>{text}</p>
    </li>
  );
};

export default Answer;
