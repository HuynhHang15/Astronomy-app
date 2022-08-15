import classNames from "classnames/bind";
import style from "./AstroList.module.scss";

import { useEffect, useState } from "react";

import AstroItem from "../AstroItem";
import * as searchService from "~/service/searchService";
import Pagination from "~/components/Pagination";

const cx = classNames.bind(style);

function AstroList({ gallery, search }) {
  const [listItem, setlistItem] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1000);

  const fetchList = async () => {
    let params = {};
    let response = null;
    if (search) {
      params = {
        q: search,
        media_type: gallery,
        page: page,
      };
      response = await searchService.search({ params });
    } else {
      params = {
        media_type: gallery,
        page: page,
      };
      response = await searchService.search({ params });
    }
    setlistItem(response.data.collection.items);
  };

  //page
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    setPage(1);
  }, [gallery]);

  useEffect(() => {
    fetchList();
  }, [gallery, page]);
  return (
    <div>
      <div className={cx("astro-list")}>
        {listItem.map((item, i) => (
          <AstroItem key={i} item={item} gallery={gallery} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        page={page}
        onChangePage={handlePageChange}
        gallery={gallery}
      />
    </div>
  );
}

export default AstroList;
