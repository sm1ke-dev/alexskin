import React from "react";
import styles from "./ImageModalWindow.module.scss";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type ImageModalWindowProps = {
  isOpen: boolean;
  onClose: (i: boolean) => void;
  image: string;
};

const ImageModalWindow: React.FC<ImageModalWindowProps> = ({
  isOpen,
  onClose,
  image,
}) => {
  const ref = React.useRef(null);

  useEscapeKey(onClose);
  useOutsideClick(onClose, ref);

  return (
    <div className={`${styles.modal} ${isOpen ? styles.modal_opened : ""}`}>
      <div className={styles.modal__imageContainer} ref={ref}>
        <button
          className={styles.modal__closeButton}
          aria-label="Закрытие попапа просмотра картинки"
          onClick={() => onClose(false)}
        ></button>
        <img src={image} alt="Продукт" className={styles.modal__image} />
      </div>
    </div>
  );
};

export default ImageModalWindow;
