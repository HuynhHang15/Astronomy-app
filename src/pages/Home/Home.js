import classNames from "classnames/bind";
import style from "./Home.module.scss";

import { useEffect, useState } from "react";

import Hero from "~/modules/Astronomy/components/Hero";
import * as imageService from "~/service/imagesService";

const cx = classNames.bind(style);
function Home() {
  const [imageOfDay, setImageOfDay] = useState([]);

  useEffect(() => {
    const fetchImagesOfDay = async () => {
      const params = {};
      const response = await imageService.images({ params });
      setImageOfDay(response);
    };
    fetchImagesOfDay();
  }, []);

  return (
    <div className={cx("home")}>
      <Hero />

      <div className="container">
        <div className={cx("content")}>
          <div className={cx("section")}>
            <h2 className={cx("title")}>Image of the day</h2>
            <div className={cx("image")}>
              <img src={imageOfDay.url} alt="Image Of Day" />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Home;
