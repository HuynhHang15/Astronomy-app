import classNames from "classnames/bind";
import style from "./SearchBar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";

import Dropdown from "../Dropdown";
import { search } from "~/service/searchService";
import { useNavigate } from "react-router-dom";

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
  const [textSearch, setTextSearch] = useState("");

  const navigate = useNavigate();

  const gotoSearch = useCallback(() => {
    if (textSearch.length > 0) {
      navigate(`/search/${selected.data}/${textSearch}`);
    }
  }, [navigate, textSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    gotoSearch();
  };
  
  return (
    <div className={cx("search")}>
      <form className={cx("form-search")} onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} className={cx("icon-search")} />
        <input
          className={cx("input-search")}
          type="text"
          placeholder="Search images and videos"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </form>

      <div className={cx("menu")}>
        <Dropdown
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}

export default Search;
