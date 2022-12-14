import classNames from "classnames/bind";
import style from "./Gallery.module.scss";

import { useParams } from "react-router-dom";

import AstroList from "~/modules/Astronomy/components/AstroList";
import imageHeader from "~/asset/images/image_header.jpg";

const cx = classNames.bind(style);

function Gallery() {
  const { gallery } = useParams();

  return (
    <div className={cx("gallery")}>
      <div className={cx("gallery-header")}>
        <img src={imageHeader} alt="" />
        {gallery == "image" ? <h2>Images</h2> : <h2>Videos</h2>}
      </div>
      <div className="container">
        <AstroList gallery={gallery} />
      </div>
    </div>
  );
}

export default Gallery;
