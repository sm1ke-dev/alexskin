import React from "react";
import "./Question.css";
import arrow from "../../images/arrow.svg";
import Answer from "../Answer/Answer";
import { QuestionType } from "../../utils/constants/yourMask";
type QuestionProps = QuestionType & {
  length: number;
  questionNumber: number;
  onClick: (num: number) => void;
};
type AnswersStates = {
  [index: string]: string;
};

const Question: React.FC<QuestionProps> = ({
  id,
  name,
  answers,
  length,
  questionNumber,
  onClick,
}) => {
  const [isQuestionChanged, setIsQuestionChanged] = React.useState(false);
  const [answersObj, setAnswersObj] = React.useState<AnswersStates>({
    "01": "",
    "02": "",
    "03": "",
    "04": "",
    "05": "",
    "06": "",
    "07": "",
    "08": "",
    "09": "",
    "10": "",
    "11": "",
  });

  const nextQuestion = (answerId?: any) => {
    setIsQuestionChanged(true);
    if (typeof answerId === "string") {
      setAnswersObj({ ...answersObj, [id]: answerId });
    }

    setTimeout(() => {
      onClick(questionNumber + 1);
      setIsQuestionChanged(false);
    }, 500);
  };

  const prevQuestion = () => {
    setIsQuestionChanged(true);

    setTimeout(() => {
      onClick(questionNumber - 1);
      setIsQuestionChanged(false);
    }, 500);
  };

  return (
    <div className="question">
      <h4 className="question__name">
        {id} {name}
      </h4>
      <ul
        className={`question__answers-list ${
          answers.length > 5 && "question__answers-list_big"
        }`}
      >
        {answers.map((answer) => (
          <Answer
            key={answer.id}
            {...answer}
            isQuestionChanged={isQuestionChanged}
            nextQuestion={nextQuestion}
            questionId={id}
            answersObj={answersObj}
          />
        ))}
      </ul>
      <div className="question__pagination">
        <button
          className={`question__arrow ${
            questionNumber === 1 ? "question__arrow_disabled" : ""
          }`}
          onClick={prevQuestion}
          disabled={questionNumber === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="12"
            viewBox="0 0 48 12"
            fill="none"
          >
            <path
              d="M47 6L2 6"
              stroke={questionNumber === 1 ? "#A5A8AF" : "#323640"}
              strokeLinecap="round"
            />
            <path
              d="M9 1C6.5 4.63636 2 6 2 6C2 6 6.5 7.5 9 11"
              stroke={questionNumber === 1 ? "#A5A8AF" : "#323640"}
              strokeLinecap="round"
            />
          </svg>
        </button>
        <p className="question__number">
          {id} / {length < 10 ? `0${length}` : length}
        </p>
        <button
          className={`question__arrow ${
            questionNumber === length || answersObj[id] === ""
              ? "question__arrow_disabled"
              : ""
          }`}
          onClick={nextQuestion}
          disabled={questionNumber === length || answersObj[id] === ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="12"
            viewBox="0 0 48 12"
            fill="none"
          >
            <path
              d="M1 6L46 6"
              stroke={
                questionNumber === length || answersObj[id] === ""
                  ? "#A5A8AF"
                  : "#323640"
              }
              strokeLinecap="round"
            />
            <path
              d="M39 1C41.5 4.63636 46 6 46 6C46 6 41.5 7.5 39 11"
              stroke={
                questionNumber === length || answersObj[id] === ""
                  ? "#A5A8AF"
                  : "#323640"
              }
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Question;
