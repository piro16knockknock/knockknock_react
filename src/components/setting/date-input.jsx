import React from "react";
import styles from "styles/setting/date-input.module.css";

const DateInput = (props) => {
  return (
    <div className={styles[`input-row`]}>
      <input type="text" />
      <span>개월 마다</span>
      <input type="text" />
      <span>일</span>
    </div>
  );
};

export default DateInput;
