import React from "react";
import styles from "./Faq.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FaqQuestion from "../../components/FaqQuestion/FaqQuestion";
import { questions } from "../../utils/constants/questions";

const Faq: React.FC = () => {
  return (
    <main className={styles.faq}>
      <div className={styles.faq__breadcrumbs}>
        <Breadcrumbs page="Часто задаваемые вопросы" />
      </div>
      <h2 className={styles.faq__title}>Часто задаваемые вопросы</h2>
      <ul className={styles.faq__list}>
        <hr className={styles.faq__line} />
        {questions.map((question) => (
          <FaqQuestion key={question.id} {...question} />
        ))}
      </ul>
      <div className={styles.faq__support}>
        <p className={styles.faq__supportText}>
          По любым вопросам, связанных с качеством продукции, обращайтесь в наш
          отдел заботы о клиентах.
        </p>
        <button className={styles.faq__button}>Написать в поддержку</button>
      </div>
    </main>
  );
};

export default Faq;
