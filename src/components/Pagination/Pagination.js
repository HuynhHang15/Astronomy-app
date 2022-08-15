import classNames from "classnames/bind";
import style from './Pagination.module.scss'

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Pagination(props) {
  const { totalPages, page, onChangePage } = props;
  const [range, setRange] = useState({
    start: 0,
    end: 10,
  });

  const arrButton = [];
  for (let i = 0; i < totalPages; i++) {
    arrButton.push(i + 1);
  }

  const handlePageChange = (newPage) => {
    onChangePage(newPage);

    if (newPage > range.end) {
      setRange((prev) => {
        return {
          start: prev.start + 5,
          end: prev.end + 5,
        };
      });
    }

    if (newPage <= range.start) {
      setRange((prev) => {
        return {
          start: prev.start - 5,
          end: prev.end - 5,
        };
      });
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setRange({
      start: 0,
      end: 10,
    })
  }, [props.gallery]);


  return (
    <div className={cx("pagination")}>
      <button
        className={cx("btn-pagi")}
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button>

      {arrButton.slice(range.start, range.end).map((btn) => (
        <button
          key={btn}
          className={page == btn ? cx("btn-pagi", "active") : cx("btn-pagi")}
          onClick={() => handlePageChange(btn)}
        >
          {btn}
        </button>
      ))}

      <button
        className={cx("btn-pagi")}
        disabled={page == totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight}/>
      </button>
    </div>
  );
}

export default Pagination;
