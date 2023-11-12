import React from "react";
import { motion } from "framer-motion";
import "./AboutGrid.css";
import { Link } from "react-router-dom";
import pic1 from "../../images/grid-pic1.png";
import pic2 from "../../images/grid-pic2.png";
import pic3 from "../../images/grid-pic3.png";
import pic4 from "../../images/grid-pic4.png";
import pic5 from "../../images/grid-pic5.png";

const scrollAnimationLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const scrollAnimationRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const AboutGrid: React.FC = () => {
  return (
    <section className="about__grid grid">
      <ul className="grid__wrapper">
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationLeft}
          transition={{ duration: 0.4 }}
          className="grid__text-cell"
        >
          <p className="grid__year">2003 год</p>
          <span className="grid__line"></span>
          <div className="grid__text-wrapper">
            <h4 className="grid__title">
              КАМЧАТКА – ЗАРОДИЛАСЬ ЛЮБОВЬ К УХОДУ
            </h4>
            <p className="grid__text">
              Александра живёт в камчатской глубинке у бабушки. Та учит её
              всему, что знает сама – как собирать и запаривать травы. Рождается
              интерес, маленькая Саша экспериментирует, делает натуральные
              тоники, скрабы и маски.
            </p>
          </div>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationRight}
          transition={{ duration: 0.4 }}
          className="grid__pic-cell"
        >
          <img src={pic1} alt="pic1" className="grid__pic" />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationLeft}
          transition={{ duration: 0.4 }}
          className="grid__pic-cell"
        >
          <img src={pic2} alt="pic2" className="grid__pic" />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationRight}
          transition={{ duration: 0.4 }}
          className="grid__text-cell _order3"
        >
          <p className="grid__year">2016 год</p>
          <span className="grid__line"></span>
          <div className="grid__text-wrapper">
            <h4 className="grid__title">
              КРАСНОДАР – ПОЯВИЛСЯ ЗАПРОС И ПЕРВЫЕ ИДЕИ
            </h4>
            <p className="grid__text">
              Александра увлечена косметикой, уход за собой возведён в ранг
              религии. Среди многочисленных брендов не получается найти
              идеальный уход. Приходит идея создать собственную линейку
              косметики, которая будет безупречна во всём: от состава, текстуры
              и аромата до упаковки и результата.
            </p>
          </div>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationLeft}
          transition={{ duration: 0.4 }}
          className="grid__text-cell"
        >
          <p className="grid__year">2017-2018 год</p>
          <span className="grid__line"></span>
          <div className="grid__text-wrapper">
            <h4 className="grid__title">
              МОСКВА – ПОИСК ПРОИЗВОДСТВА И РАЗРАБОТКА ПРОДУКЦИИ
            </h4>
            <p className="grid__text">
              Найдено производство. Целый год Александра изучает составы,
              составляет техническое задание для лаборатории и тестирует все
              образцы на себе, внося корректировки. Пока на свет не появились те
              самые три маски – MORNING, NIGHT MESO, PURE&SHINE MASQUE.
            </p>
          </div>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationRight}
          transition={{ duration: 0.4 }}
          className="grid__pic-cell"
        >
          <img src={pic3} alt="pic3" className="grid__pic" />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationLeft}
          transition={{ duration: 0.4 }}
          className="grid__pic-cell"
        >
          <img src={pic4} alt="pic4" className="grid__pic" />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationRight}
          transition={{ duration: 0.4 }}
          className="grid__text-cell _order7"
        >
          <p className="grid__year">2019-2022 гОД</p>
          <span className="grid__line"></span>
          <div className="grid__text-wrapper">
            <h4 className="grid__title">
              РОССИЯ – ЗАПУСК ПРОДАЖ И ЗВАНИЕ БЕСТСЕЛЛЕРА
            </h4>
            <p className="grid__text">
              В 2022 году ALEXSKIN получает звание бестселлера от маркетплейсов
              Ozon и Wildberries. Уже к концу года маски раскуплены на всех
              возможных платформах.
            </p>
          </div>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationLeft}
          transition={{ duration: 0.4 }}
          className="grid__text-cell"
        >
          <p className="grid__year">2022-2023 гОД</p>
          <span className="grid__line"></span>
          <div className="grid__text-wrapper">
            <h4 className="grid__title">РОССИЯ – РЕБРЕНДИНГ И КОММЬЮНИТИ</h4>
            <p className="grid__text">
              Происходит ребрендинг. ALEXSKIN меняет формат упаковки и дизайн
              своей линейки, дополняет составы новыми компонентами. Идёт
              разработка и выпуск нового продукта – пептидных патчей. Вокруг
              бренда образовывается женское сообщество, запускаем свой канал в
              Телеграме. Начинается производство видео-подкаста, где Александра
              берёт интервью у интересных гостей.
            </p>
          </div>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimationRight}
          transition={{ duration: 0.4 }}
          className="grid__pic-cell"
        >
          <img src={pic5} alt="pic5" className="grid__pic" />
        </motion.li>
      </ul>
      <Link to="/community" className="grid__link">
        О коммьюнити
      </Link>
    </section>
  );
};

export default AboutGrid;
