import classNames from "classnames/bind";
import style from "./Home.module.scss";

import Hero from "~/modules/Astronomy/components/Hero";

const cx = classNames.bind(style);
function Home() {
  return (
    <div className={cx("home")}>
      <Hero/>

    </div>
  );
}

export default Home;
