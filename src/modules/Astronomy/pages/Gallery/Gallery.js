import classNames from "classnames/bind";
import style from "./Gallery.module.scss";

import AstroList from "~/modules/Astronomy/components/AstroList";
import imageHeader from "~/asset/images/image_header.jpg"
import { useParams } from "react-router-dom";

const cx = classNames.bind(style);

function Gallery() {
  const {gallery} = useParams();

  return (
    <div className={cx("gallery")}>
      <div className={cx('gallery-header')}>
        <img src={imageHeader} alt=""/>
      </div>
      <div className="container">
        <AstroList gallery={gallery}/>
      </div>
    </div>
  );
}

export default Gallery;
