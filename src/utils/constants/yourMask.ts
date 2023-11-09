import q1_pic1 from "../../images/yourMask/question1/pic1.png";
import q1_pic2 from "../../images/yourMask/question1/pic2.png";
import q1_pic3 from "../../images/yourMask/question1/pic3.png";
import q1_pic4 from "../../images/yourMask/question1/pic4.png";
import q1_pic5 from "../../images/yourMask/question1/pic5.png";
import q2_pic1 from "../../images/yourMask/question2/pic1.png";
import q2_pic2 from "../../images/yourMask/question2/pic2.png";
import q2_pic3 from "../../images/yourMask/question2/pic3.png";
import q2_pic4 from "../../images/yourMask/question2/pic4.png";
import q3_pic1 from "../../images/yourMask/question3and9/pic1.png";
import q3_pic2 from "../../images/yourMask/question3and9/pic2.png";
import q3_pic3 from "../../images/yourMask/question3and9/pic3.png";
import q4_pic1 from "../../images/yourMask/question4/pic1.png";
import q4_pic2 from "../../images/yourMask/question4/pic2.png";
import q4_pic3 from "../../images/yourMask/question4/pic3.png";
import q5_pic1 from "../../images/yourMask/question5/pic1.png";
import q5_pic2 from "../../images/yourMask/question5/pic2.png";
import q5_pic3 from "../../images/yourMask/question5/pic3.png";
import q5_pic4 from "../../images/yourMask/question5/pic4.png";
import q5_pic5 from "../../images/yourMask/question5/pic5.png";
import q5_pic6 from "../../images/yourMask/question5/pic6.png";
import q6_pic1 from "../../images/yourMask/question6/pic1.png";
import q6_pic2 from "../../images/yourMask/question6/pic2.png";
import q6_pic3 from "../../images/yourMask/question6/pic3.png";
import q7_pic1 from "../../images/yourMask/question7/pic1.png";
import q7_pic2 from "../../images/yourMask/question7/pic2.png";
import q7_pic3 from "../../images/yourMask/question7/pic3.png";
import q8_pic1 from "../../images/yourMask/question8/pic1.png";
import q8_pic2 from "../../images/yourMask/question8/pic2.png";
import q8_pic3 from "../../images/yourMask/question8/pic3.png";
import q8_pic4 from "../../images/yourMask/question8/pic4.png";
import q10_pic1 from "../../images/yourMask/question10/pic1.png";
import q10_pic2 from "../../images/yourMask/question10/pic2.png";
import q10_pic3 from "../../images/yourMask/question10/pic3.png";
import q10_pic4 from "../../images/yourMask/question10/pic4.png";
import q11_pic1 from "../../images/yourMask/question11/pic1.png";
import q11_pic2 from "../../images/yourMask/question11/pic2.png";

export type QuestionType = {
  id: string;
  name: string;
  answers: AnswerType[];
};

export type AnswerType = {
  id: string;
  text: string;
  pic: string;
};

const questions: QuestionType[] = [
  {
    id: "01",
    name: "Какой у вас тип кожи?",
    answers: [
      {
        id: "1",
        text: "Нормальная",
        pic: q1_pic1,
      },
      {
        id: "2",
        text: "Сухая",
        pic: q1_pic2,
      },
      {
        id: "3",
        text: "Жирная",
        pic: q1_pic3,
      },
      {
        id: "4",
        text: "Комбинированная",
        pic: q1_pic4,
      },
      {
        id: "5",
        text: "Чувствительная",
        pic: q1_pic5,
      },
    ],
  },
  {
    id: "02",
    name: "Выберите интервал, в который попадает ваш возраст:",
    answers: [
      {
        id: "1",
        text: "Менее 20 лет",
        pic: q2_pic1,
      },
      {
        id: "2",
        text: "20 – 25 лет",
        pic: q2_pic2,
      },
      {
        id: "3",
        text: "25 – 35 лет",
        pic: q2_pic3,
      },
      {
        id: "4",
        text: "От 35 лет и старше",
        pic: q2_pic4,
      },
    ],
  },
  {
    id: "03",
    name: "У вас бывает отёчность по утрам?",
    answers: [
      {
        id: "1",
        text: "Часто",
        pic: q3_pic1,
      },
      {
        id: "2",
        text: "Иногда",
        pic: q3_pic2,
      },
      {
        id: "3",
        text: "Никогда",
        pic: q3_pic3,
      },
    ],
  },
  {
    id: "04",
    name: "Какие у вас ощущения после умывания?",
    answers: [
      {
        id: "1",
        text: "Комфортные, ничего не беспокоит",
        pic: q4_pic1,
      },
      {
        id: "2",
        text: "Иногда ощущаю стянутость",
        pic: q4_pic2,
      },
      {
        id: "3",
        text: "Всегда дискомфорт и сильная сухость",
        pic: q4_pic3,
      },
    ],
  },
  {
    id: "05",
    name: "Какие из несовершенств беспокоят больше всего?",
    answers: [
      {
        id: "1",
        text: "Морщинки",
        pic: q5_pic1,
      },
      {
        id: "2",
        text: "Отечность",
        pic: q5_pic2,
      },
      {
        id: "3",
        text: "Воспаления",
        pic: q5_pic3,
      },
      {
        id: "4",
        text: "Неровный тон",
        pic: q5_pic4,
      },
      {
        id: "5",
        text: "Нечёткий овал лица",
        pic: q5_pic5,
      },
      {
        id: "6",
        text: "Пигментные пятна / постакне",
        pic: q5_pic6,
      },
    ],
  },
  {
    id: "06",
    name: "Как вы оцениваете состояние пор?",
    answers: [
      {
        id: "1",
        text: "Широкие по всему лицу",
        pic: q6_pic1,
      },
      {
        id: "2",
        text: "Расширены только в Т-зоне",
        pic: q6_pic2,
      },
      {
        id: "3",
        text: "Не расширены",
        pic: q6_pic3,
      },
    ],
  },
  {
    id: "07",
    name: "Есть ли возрастные изменения: мелкие морщинки, глубокие заломы, изменения нижней трети, выраженность носогубной складки?",
    answers: [
      {
        id: "1",
        text: "Нет",
        pic: q7_pic1,
      },
      {
        id: "2",
        text: "Есть немного",
        pic: q7_pic2,
      },
      {
        id: "3",
        text: "Да, есть",
        pic: q7_pic3,
      },
    ],
  },
  {
    id: "08",
    name: "Вас устраивает тон кожи?",
    answers: [
      {
        id: "1",
        text: "Все хорошо, тон ровный",
        pic: q8_pic1,
      },
      {
        id: "2",
        text: "Кожа выглядит усталой и тусклой",
        pic: q8_pic2,
      },
      {
        id: "3",
        text: "Тон неровный, есть пигментация",
        pic: q8_pic3,
      },
      {
        id: "4",
        text: "На коже есть покраснения",
        pic: q8_pic4,
      },
    ],
  },
  {
    id: "09",
    name: "Часто уходовая косметика вызывает у вас неприятные ощущения: покраснение, жжение, раздражение?",
    answers: [
      {
        id: "1",
        text: "Часто",
        pic: q3_pic1,
      },
      {
        id: "2",
        text: "Редко",
        pic: q3_pic2,
      },
      {
        id: "3",
        text: "Никогда",
        pic: q3_pic3,
      },
    ],
  },
  {
    id: "10",
    name: "У вас есть вредные привычки?",
    answers: [
      {
        id: "1",
        text: "Курение регулярно",
        pic: q10_pic1,
      },
      {
        id: "2",
        text: "Часто: курение, алкоголь, фастфуд",
        pic: q10_pic2,
      },
      {
        id: "3",
        text: "Иногда: курение, алкоголь, фастфуд",
        pic: q10_pic3,
      },
      {
        id: "4",
        text: "Нет вредных привычек",
        pic: q10_pic4,
      },
    ],
  },
  {
    id: "11",
    name: "Вы используете в уходе кислоты или ретиноиды?",
    answers: [
      {
        id: "1",
        text: "Да",
        pic: q11_pic1,
      },
      {
        id: "2",
        text: "Нет",
        pic: q11_pic2,
      },
    ],
  },
];

export { questions };
