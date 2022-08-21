import classNames from "classnames/bind";
import style from "./Home.module.scss";

import Hero from "~/modules/Astronomy/components/Hero";
import ImageDay from "~/modules/Astronomy/components/ImageDayPre";

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx("home")}>
      <Hero />

      <ImageDay/>
    </div>
  );
}

export default Home;
