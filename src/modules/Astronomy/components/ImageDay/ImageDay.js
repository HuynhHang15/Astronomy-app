import classNames from "classnames/bind";
import style from "./ImageDay.module.scss";

import * as imageService from "~/service/imagesService";

import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function ImageDay() {
  const [imageOfDays, setImageOfDays] = useState([]);

  const fetchImagesOfDays = async () => {
    const params = {
      start_date: "2022-08-01",
    };
    const response = await imageService.images({ params });
    setImageOfDays(response);
    console.log(response);
  };

  useEffect(() => {
    fetchImagesOfDays();
  }, []);
  return (
    <div>
      <div className="container">
        <div className={cx("content")}>
          <div className={cx("section")}>
            <h2 className={cx("title")}>Image of the day</h2>
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
