import React from "react";
import styles from "./Service.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useNavigate } from "react-router-dom";

const Service: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.service}>
      <div className={styles.service__breadcrumbs}>
        <Breadcrumbs page="Сервис" />
      </div>
      <div className={styles.service__wrapper}>
        <h2 className={styles.service__title}>Сервис</h2>
        <ul className={styles.service__grid}>
          <li className={styles.service__gridColumn}>
            <div className={`${styles.service__gridItem} ${styles.gridItem}`}>
              <h3
                className={`${styles.gridItem__title} ${styles.gridItem__title_m10}`}
              >
                Заказ и доставка
              </h3>
              <p
                className={`${styles.gridItem__text} ${styles.gridItem__text_black}`}
              >
                Так выглядит путь вашего заказа:
              </p>
              <ul className={styles.gridItem__list}>
                <li className={`${styles.gridItem__step} ${styles.step}`}>
                  <div className={styles.step__number}>1</div>
                  <div className={styles.step__textWrapper}>
                    <p className={styles.step__title}>Оплата</p>
                    <p className={styles.gridItem__text}>
                      Вы добавляете любимую продукцию в корзину, оформляете и
                      оплачиваете заказ картой. Чек и номер заказа приходит на
                      электронную почту.
                    </p>
                  </div>
                </li>
                <li className={`${styles.gridItem__step} ${styles.step}`}>
                  <div className={styles.step__number}>2</div>
                  <div className={styles.step__textWrapper}>
                    <p className={styles.step__title}>Трек-номер</p>
                    <p className={styles.gridItem__text}>
                      Наш менеджер высылает Вам в WhatsApp трек-номер
                      отправления. Это даёт возможность отслеживать путь
                      посылки.
                    </p>
                  </div>
                </li>
                <li className={`${styles.gridItem__step} ${styles.step}`}>
                  <div className={styles.step__number}>3</div>
                  <div className={styles.step__textWrapper}>
                    <p className={styles.step__title}>Отправка</p>
                    <p className={styles.gridItem__text}>
                      Мы формируем, бережно упаковываем и отправляем заказ в
                      доставку.
                    </p>
                  </div>
                </li>
                <li className={`${styles.gridItem__step} ${styles.step}`}>
                  <div className={styles.step__number}>4</div>
                  <div className={styles.step__textWrapper}>
                    <p className={styles.step__title}>Получение заказа</p>
                    <p className={styles.gridItem__text}>
                      Готово! Вы получаете свой заказ от курьера или в пункте
                      выдачи.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`${styles.service__gridItem} ${styles.gridItem}`}>
              <h3 className={styles.gridItem__title}>Документы</h3>
              <p className={styles.gridItem__text}>
                Вся наша продукция прошла проверку и получила Декларации о
                соответствии ТР ТС «О безопасности парфюмерно-косметической
                продукции»
              </p>
              <button
                className={styles.gridItem__button}
                onClick={() => navigate("/alexskin/documents")}
              >
                Смотреть документы
              </button>
            </div>
            <div className={`${styles.service__gridItem} ${styles.gridItem}`}>
              <h3 className={styles.gridItem__title}>Оплата</h3>
              <p className={styles.gridItem__text}>
                Банковской картой при оформлении заказа. Товар отправляется
                только после внесения 100% оплаты. При оформлении заказа через
                менеджера, он предоставит ссылку на оплату. Чек приходит на
                электронную почту.
              </p>
            </div>
          </li>
          <li className={styles.service__gridColumn}>
            <div className={`${styles.service__gridItem} ${styles.gridItem}`}>
              <h3 className={styles.gridItem__title}>Возврат и обмен</h3>
              <p className={styles.gridItem__text}>
                Согласно Постановлению Правительства РФ № 55 от 19.01.1998,
                парфюмерно-косметические товары надлежащего качества не подлежат
                обмену или возврату. При возникновении вопросов к качеству
                продукции, обратитесь в поддержку. Мы всегда готовы Вам помочь!
              </p>
              <button className={styles.gridItem__button}>
                Написать в поддержку
              </button>
            </div>
            <div className={`${styles.service__gridItem} ${styles.gridItem}`}>
              <h3 className={styles.gridItem__title}>Реквизиты</h3>
              <div className={styles.gridItem__textWrapper}>
                <p
                  className={`${styles.gridItem__text} ${styles.gridItem__text_req}`}
                >
                  ООО «А-КОСМЕТИК»
                  <br />
                  ИНН 2308249160
                  <br />
                  КПП 230801001
                  <br />
                  ОГРН 1172375077819
                </p>
                <p
                  className={`${styles.gridItem__text} ${styles.gridItem__text_req}`}
                >
                  Юр.адрес: 350000, г.Краснодар, ул. Буденного, 129, оф.227{" "}
                  <br />
                  Изготовитель: ООО «Айкон Пакеджинг», 115088, г. Москва, ул.
                  Угрешская 2с1, оф.15.
                </p>
                <p
                  className={`${styles.gridItem__text} ${styles.gridItem__text_req}`}
                >
                  Адрес производства: 140032, Россия, Московская область,
                  Люберецкий район, ПГТ Малаховка, ул. Шоссейная, 40.
                </p>
              </div>
              <button className={styles.gridItem__button}>
                Скачать документы
              </button>
            </div>
            <div className={`${styles.service__gridItem} ${styles.gridItem}`}>
              <h3
                className={`${styles.gridItem__title} ${styles.gridItem__title_m0}`}
              >
                Остались вопросы?
              </h3>
              <button className={styles.gridItem__button}>Подробнее</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Service;
