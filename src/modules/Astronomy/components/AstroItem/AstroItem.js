import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./AstroItem.module.scss";

const cx = classNames.bind(style);

function AstroItem({ item, gallery }) {
  const link = `/contents/${gallery}/${item.data[0].nasa_id}`;
  return (
    <div>
      <Link to={link}>
        <div className={cx("astro-item")}>
          <div className={cx("astro-item_image")}>
            <img src={item.links[0].href} alt="" />
          </div>
          <div className={cx("astro-item_title")}>
            <span>{item.data[0].title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AstroItem;
