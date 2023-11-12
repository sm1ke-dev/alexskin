import React from "react";
import { Link } from "react-router-dom";
import "./MainAbout.css";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";

const MainAbout: React.FC = () => {
  return (
    <section className="main-about">
      <h2 className="main-about__title main-about__title_small-res">
        О бренде
      </h2>
      <div className="main-about__text-wrapper">
        <h2 className="main-about__title">О бренде</h2>
        <p className="main-about__subtitle">
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
        <Link to="/about" className="main-about__link">
          История бренда
        </Link>
      </div>
      <div className="main-about__pic-wrapper">
        <div className="main-about__pic1-wrapper">
          <img src={about1} alt="founder" className="main-about__pic" />
        </div>
        <div className="main-about__pic2-wrapper">
          <img src={about2} alt="founder" className="main-about__pic" />
        </div>
      </div>
    </section>
  );
};

export default MainAbout;
