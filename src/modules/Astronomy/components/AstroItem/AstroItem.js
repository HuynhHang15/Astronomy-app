import classNames from "classnames/bind";
import style from "./AstroItem.module.scss";

const cx = classNames.bind(style);

function AstroItem({ item }) {
  return (
    <div className={cx("astro-item")}>
      <img className={cx("astro-item_image")} src={item.links[0].href} alt="" />
      <div className={cx("astro-item_title")}>
        <span>{item.data[0].title}</span>
      </div>
    </div>
  );
}

export default AstroItem;
