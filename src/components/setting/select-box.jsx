import React from "react";
import styles from "styles/setting/select-box.module.css";

const SelectBox = ({ selected = "전세", setSelected }) => {
  return (
    <div>
      <button
        className={`
         ${selected === "전세" ? styles[`selected`] : styles[`not-selected`]} ${
          styles[`select-btn`]
        }`}
        onClick={() => setSelected("전세")}
      >
        전세
      </button>
      <button
        className={`
                ${
                  selected === "월세"
                    ? styles[`selected`]
                    : styles[`not-selected`]
                } ${styles[`select-btn`]}`}
        onClick={() => setSelected("월세")}
      >
        월세
      </button>
    </div>
  );
};

export default SelectBox;
