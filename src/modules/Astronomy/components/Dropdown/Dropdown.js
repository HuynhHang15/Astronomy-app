import classNames from "classnames/bind";
import style from "./Dropdown.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(style);

function Dropdown({ options }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={cx("dropdown")}>
      <div className={cx("dropdown-btn")} onClick={handleClick}>
        Images
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      {isActive && (
        <div className={cx("dropdown-content")}>
          {options &&
            options.map((option, i) => (
              <div className={cx("dropdown-item")} key={i}>
                {option.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
