import React from "react";
import styles from "styles/auth/common.module.css";

const ConfirmBtn = ({ getValues, label }) => {
  return (
    <button className={styles.confirm_btn} type="submit">
      {label}
    </button>
  );
};

export default ConfirmBtn;
