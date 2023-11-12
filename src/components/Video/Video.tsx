import React from "react";
import "./Video.css";
import play from "../../images/play.svg";

const Video: React.FC = () => {
  return (
    <section className="video main__video">
      <h2 className="video__title">Бренд, родившийся из детской мечты</h2>
      <div className="video__wrapper">
        <div className="video__play-button">
          <img src={play} alt="play" className="video__play-icon" />
        </div>
      </div>
    </section>
  );
};

export default Video;
