import classNames from "classnames/bind";
import style from "./Detail.module.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as searchService from "~/service/searchService";
import axios from "axios";
import { replaceSpace } from "~/utils/replaceSpace";
import Loading from "~/components/Loading";

const cx = classNames.bind(style);

function Detail() {
  const { gallery, id } = useParams();
  const [item, setItem] = useState({});
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchItem = async () => {
    const params = {
      nasa_id: id,
    };
    const response = await searchService.search({ params });
    setItem(response.data.collection.items[0]);
    setLoading(false);
  };

  const fetchVideo = async () => {
    if (item.href) {
      const url = replaceSpace(item.href);
      const response = await axios.get(url);
      setVideo(response.data[0]);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true)
    fetchItem();
    if (gallery == "videos") {
      fetchVideo();
    }
    
  }, [gallery, id]);
  return (
    <div>
      {loading && <Loading/>}
      {item.data && (
        <div className="container">
          <div className={cx("detail")}>
            <div className={cx("image")}>
              {gallery == "image" ? (
                <img src={item.links[0].href} alt="" />
              ) : (
                <div>
                  {video && (
                    <video controls>
                      <source src={replaceSpace(video)} />
                    </video>
                  )}
                </div>
              )}
            </div>
            <div className="content">
              <h2 className={cx("title")}>{item.data[0].title}</h2>
              <div className={cx("date")}>{item.data[0].date_created}</div>
              <div className="overview">
                <h3>Overview</h3>
                <div className={cx("description")}>
                  {item.data[0].description}
                </div>
              </div>
              {item.data[0].secondary_creator && (
                <div className="credit">
                  <h3>Credit</h3>
                  <div>{item.data[0].secondary_creator}</div>
                </div>
              )}
              <div className={cx("keywords")}>
                <h3>Keywords</h3>
                {item.data[0].keywords.map((item, i) => (
                  <span className={cx("keyword")} key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
