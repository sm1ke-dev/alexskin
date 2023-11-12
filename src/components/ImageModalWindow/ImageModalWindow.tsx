import React from "react";
import "./ImageModalWindow.css";
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
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__image-container" ref={ref}>
        <button
          className="modal__close-button"
          aria-label="Закрытие попапа просмотра картинки"
          onClick={() => onClose(false)}
        ></button>
        <img src={image} alt="Продукт" className="modal__image" />
      </div>
    </div>
  );
};

export default ImageModalWindow;
