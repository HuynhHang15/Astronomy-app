import classNames from "classnames/bind";
import style from "./SearchBar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Dropdown from "../Dropdown";
import { search } from "~/service/searchService";

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

  useEffect(() => {
    const fetch = async () => {
      const params = {
        media_type: selected.data,
        q: "moon",
      };
      const response = await search({params})
      console.log(response)
    };
    fetch();
  }, []);

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
