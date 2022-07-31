import classNames from "classnames/bind";
import style from "./Hero.module.scss";

import video from "~/asset/videos/Earth_Background.mp4";
import Search from "../SearchBar";

const cx = classNames.bind(style);

function Hero() {
  return (
    <div className={cx("hero")}>
      <video className={cx("video")} autoPlay loop muted>
        <source src={video} />
      </video>

      <div className={cx("content")}>
        <h1>Discover the universe</h1>
        <h2>Embark on a Journey of Discovery</h2>
        
        <Search />
      </div>
    </div>
  );
}

export default Hero;
