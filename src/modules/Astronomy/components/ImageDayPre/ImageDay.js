import classNames from "classnames/bind";
import style from "./ImageDay.module.scss";

import * as imageService from "~/service/imagesService";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function ImageDay() {
  const [imageOfDays, setImageOfDays] = useState([]);

  const fetchImagesOfDays = async () => {
    const params = {
      start_date: "2022-08-01",
    };
    const response = await imageService.images({ params });
    setImageOfDays(response.slice(0, 6));
  };

  useEffect(() => {
    fetchImagesOfDays();
  }, []);
  return (
    <div>
      <div className="container">
        <div className={cx("content")}>
          <div className={cx("section")}>
            <div className={cx("title")}>
              <h2>Image of the day</h2>
              <Link to="/image-of-day" className={cx("see-all")}>
                <span>See all </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
            <div className={cx("images")}>
              {imageOfDays.map(
                (item, i) =>
                  item.media_type === "image" && (
                    <div key={i} className={cx("item-image")}>
                      {item.url && <img src={item.url} alt="Image Of Day" />}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDay;
