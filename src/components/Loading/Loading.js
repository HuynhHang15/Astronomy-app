import classNames from "classnames/bind";
import style from './Loading.module.scss'

const cx = classNames.bind(style)

function Loading() {
  return (
    <div id={cx("loader-wrapper")}>
      <div id={cx("loader")}></div>

      <div className={cx("loader-section section-left")}></div>
      <div className={cx("loader-section section-right")}></div>
    </div>
  );
}

export default Loading;
