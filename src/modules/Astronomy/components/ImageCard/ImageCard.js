import classNames from "classnames/bind";
import style from "./ImageCard.module.scss";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function ImagePreview({ image, title, description }) {
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    if (e.target == e.currentTarget) {
      setShow(false);
    }
  };

  return (
    <div>
      <div className={cx("gallery")}>
        <div className={cx("gallery-image")}>
          <img src={image} alt="" onClick={() => setShow(true)} />
        </div>
      </div>

      <div
        className={show ? cx("modal") : cx("modal", "hide")}
        onClick={handleClose}
      >
        <div className={cx("modal-content")}>
          <div className={cx("modal-image")}>
            <img className={cx("img")} src={image} alt={title} />
          </div>
          <div className={cx("title")}>{title}</div>

          <div className={cx("desc")}>{description}</div>
          
          <button onClick={() => setShow(false)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
