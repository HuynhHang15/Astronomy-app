import classNames from "classnames/bind";
import style from "./AstroList.module.scss";

import { useEffect, useState } from "react";

import AstroItem from "../AstroItem";
import * as searchService from "~/service/searchService";

const cx = classNames.bind(style);

function AstroList({ gallery }) {
  const [listItem, setlistItem] = useState([]);

  const fetchList = async () => {
    let params = {};
    let response = null;
    switch (gallery) {
      case "images":
        params = {
          media_type: "image",
          page: 1,
        };
        response = await searchService.search({ params });
        break;
      case "videos":
        params = {
          media_type: "video",
          page: 1,
        };
        response = await searchService.search({ params });
        break;
      default:
        throw new Error("invalid Type");
    }
    setlistItem(response.data.collection.items);
  };

  useEffect(() => {
    fetchList();
  }, [gallery]);
  return (
    <div>
      <div className={cx("astro-list")}>
        {listItem.map((item, i) => (
          <AstroItem key={i} item={item} gallery={gallery}/>
        ))}
      </div>
    </div>
  );
}

export default AstroList;
