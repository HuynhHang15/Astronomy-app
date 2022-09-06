import classNames from "classnames/bind";
import style from "./ImageOfDay.module.scss";

import { useEffect, useState } from "react";

import * as imageService from "~/service/imagesService";
import ImageCard from "~/modules/Astronomy/components/ImageCard";
import Loading from "~/components/Loading";
import background from "~/asset/images/background.jpg";

const cx = classNames.bind(style);

function ImageOfDay() {
  const [imageOfDays, setImageOfDays] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [visible, setVisible] = useState(12);
  const [loading, setLoading] = useState(true);

  const showMoreItems = () => {
    setVisible((prev) => prev + 12);
  };

  const fetchImagesOfDays = async () => {
    const params = {
      start_date: "2022-08-01",
    };
    const response = await imageService.images({ params });
    setImageOfDays(response.reverse());
    setLoadMore(true);
    setLoading(false);
  };

  useEffect(() => {
    setLoadMore(false);
    setLoading(true);
    fetchImagesOfDays();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div
        className={cx("image-of-day")}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <h2>IMAGE OF DAY</h2>
          <div className={cx("list-item")}>
            {imageOfDays &&
              imageOfDays
                .slice(0, visible)
                .map(
                  (item, i) =>
                    item.url.includes("jpg") && (
                      <ImageCard
                        key={i}
                        image={item.url}
                        title={item.title}
                        description={item.explanation}
                      />
                    )
                )}
          </div>

          <button
            className={loadMore ? cx("loadMore") : cx("loadMore", "hide")}
            onClick={showMoreItems}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageOfDay;
