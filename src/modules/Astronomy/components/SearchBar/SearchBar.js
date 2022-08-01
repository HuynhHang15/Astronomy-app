import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import Dropdown from "../Dropdown";
import style from "./SearchBar.module.scss";

const cx = classNames.bind(style);

const options = [
  {
    title: "Images",
    data: "image",
  },
  {
    title: "Videos",
    data: "video",
  },
];

function Search() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className={cx("search")}>
      <form className={cx("form-search")}>
        <FontAwesomeIcon icon={faSearch} className={cx("icon-search")} />
        <input
          className={cx("input-search")}
          type="text"
          placeholder="Search images and videos"
        />
      </form>

      <div className={cx("menu")}>
        <Dropdown options={options} selected={selected} setSelected={setSelected}/>
      </div>
    </div>
  );
}

export default Search;
