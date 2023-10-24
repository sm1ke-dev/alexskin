import React from "react";
import "./Expert.css";
import play from "../../images/play.svg";
import sun from "../../images/expert-sun.svg";

const Expert = () => {
  return (
    <section className="expert">
      <h2 className="expert__title">Мнение эксперта</h2>
      <div className="expert__wrapper">
        <div className="expert__text-wrapper">
          <h3 className="expert__text-title">Особенности AlexSkin</h3>
          <p className="expert__text">
            Lorem ipsum dolor sit amet consectetur. Nisl elementum congue duis
            quis sagittis felis gravida. Hac maecenas elit amet nisi
            pellentesque imperdiet penatibus quam. Ornare aliquam tristique
            lectus interdum tellus amet non. Vel urna a molestie donec et
            posuere enim aenean blandit.
          </p>
          <p className="expert__text">
            Justo cras iaculis enim donec commodo consectetur nisi. At convallis
            vestibulum adipiscing dis iaculis. Lorem suspendisse lectus
            venenatis tristique dolor commodo. Viverra quam urna donec lectus
            aenean. Nibh nunc malesuada a bibendum. Congue elit mauris in
            euismod sollicitudin pulvinar odio elementum non. Ornare tristique
            purus et euismod eu. Amet tortor in vulputate praesent sem massa. In
            massa euismod felis eleifend adipiscing.
          </p>
        </div>
        <div className="expert__video-wrapper">
          <div className="expert__play-button">
            <img src={play} alt="play" className="expert__play-icon" />
          </div>
        </div>
      </div>
      <img src={sun} alt="sun" className="expert__svg" />
    </section>
  );
};

export default Expert;
