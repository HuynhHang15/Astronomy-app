import classNames from "classnames/bind";
import style from "./Search.module.scss";

import { useParams } from "react-router-dom";

import AstroList from "~/modules/Astronomy/components/AstroList";
import imageHeader from "~/asset/images/image_header.jpg";

const cx = classNames.bind(style);

function Search() {
  const { gallery, search } = useParams();

  return (
    <div>
      <div className={cx("gallery")}>
        <div className={cx("gallery-header")}>
          <img src={imageHeader} alt="" />
          <h2>Result for "{search}"</h2>
        </div>
        
        <div className="container">
          <AstroList gallery={gallery} search={search} />
        </div>
      </div>
    </div>
  );
}

export default Search;
