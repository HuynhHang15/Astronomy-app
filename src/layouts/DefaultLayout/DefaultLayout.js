import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";

import Header from "~/layouts/Header";
import Footer from "~/layouts/Footer";

const cx = classNames.bind(style)

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header/>
      
      <div>{children}</div>

      <Footer/>
    </div>
  );
}

export default DefaultLayout;
