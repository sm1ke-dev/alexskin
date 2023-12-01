import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainAbout.module.scss";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";

const MainAbout: React.FC = () => {
  return (
    <section className={styles.mainAbout}>
      <h2
        className={`${styles.mainAbout__title} ${styles.mainAbout__title_smallRes}`}
      >
        О бренде
      </h2>
      <div className={styles.mainAbout__textWrapper}>
        <h2 className={styles.mainAbout__title}>О бренде</h2>
        <p className={styles.mainAbout__subtitle}>
          Я - Александра Варяникова, основательница бренда ALEXSKIN.
          <br />
          Но в первую очередь я - Женщина. И знаю, как важно не забывать об этой
          роли.
          <br />
          В поисках лучшей косметики, в конце концов, я создала свою.
          Качественную, эффективную и эстетичную. Ровно такую, какой
          представляла себе идеальный уход.
          <br />
          Для себя. Для вас. Для каждой женщины.
        </p>
        <Link to="/alexskin/about" className={styles.mainAbout__link}>
          История бренда
        </Link>
      </div>
      <div className={styles.mainAbout__picWrapper}>
        <div className={styles.mainAbout__pic1Wrapper}>
          <img src={about1} alt="founder" className={styles.mainAbout__pic} />
        </div>
        <div className={styles.mainAbout__pic2Wrapper}>
          <img src={about2} alt="founder" className={styles.mainAbout__pic} />
        </div>
      </div>
    </section>
  );
};

export default MainAbout;
