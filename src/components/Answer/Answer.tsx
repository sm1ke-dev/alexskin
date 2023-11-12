import React from "react";
import "./Answer.css";
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
    <li className={`answer ${isQuestionChanged ? "answer_faded" : ""}`}>
      <div
        className="answer__circles-wrapper"
        onClick={onClick}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="answer__circle">
          <img src={pic} alt="background" className="answer__background" />
        </div>
        <div
          className={`answer__checkbox ${
            isHovered ? "answer__checkbox_hovered" : ""
          }`}
        >
          {(isClicked || answersObj[questionId] === id) && (
            <div className="answer__point"></div>
          )}
        </div>
      </div>
      <p className="answer__name">{text}</p>
    </li>
  );
};

export default Answer;
