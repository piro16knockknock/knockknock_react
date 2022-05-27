import React from "react";
import styles from "styles/auth/common.module.css";

const ConfirmBtn = ({ canSubmit, label }) => {
  return (
    <button className={styles.confirm_btn} disabled={canSubmit}>
      {label}
    </button>
  );
};

export default ConfirmBtn;
