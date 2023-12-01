import React from "react";
import "./Faq.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FaqQuestion from "../../components/FaqQuestion/FaqQuestion";
import { questions } from "../../utils/constants/questions";

const Faq: React.FC = () => {
  return (
    <main className="faq">
      <Breadcrumbs page="Часто задаваемые вопросы" urlPath="faq" />
      <h2 className="faq__title">Часто задаваемые вопросы</h2>
      <ul className="faq__list">
        <hr className="faq__line" />
        {questions.map((question) => (
          <FaqQuestion key={question.id} {...question} />
        ))}
      </ul>
      <div className="faq__support">
        <p className="faq__support-text">
          По любым вопросам, связанных с качеством продукции, обращайтесь в наш
          отдел заботы о клиентах.
        </p>
        <button className="faq__button">Написать в поддержку</button>
      </div>
    </main>
  );
};

export default Faq;
