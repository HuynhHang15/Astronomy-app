import classNames from "classnames/bind";
import style from "./Header.module.scss";

import logoImg from "~/asset/images/NASA_logo.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Images",
    path: "/images",
  },
  {
    display: "Videos",
    path: "/videos",
  },
];

function Header() {
  return (
    <div className={cx("header")}>
      <div className={cx("header-logo")}>
        <img src={logoImg} alt="logo" />
      </div>
      <ul className={cx("header-nav")}>
        {headerNav.map((e, i) => (
          <Link to={e.path} key={i}>
            <li className={cx("header-nav_item")}>{e.display}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Header;
