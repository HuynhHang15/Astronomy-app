import classNames from "classnames/bind";
import style from "./Header.module.scss";

import logoImg from "~/asset/images/NASA_logo.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className={cx("header")}>
      <div className={cx("container")}>
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
    </div>
  );
}

export default Header;
