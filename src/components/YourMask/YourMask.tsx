import React from "react";
import Question from "../Question/Question";
import "./YourMask.css";

const YourMask = () => {
  return (
    <section className="your-mask">
      <h2 className="your-mask__title">Какая маска подойдет именно тебе?</h2>
      <Question />
    </section>
  );
};

export default YourMask;
