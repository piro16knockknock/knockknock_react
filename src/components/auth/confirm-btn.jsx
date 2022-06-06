import React from "react";
import styles from "styles/auth/common.module.css";

const ConfirmBtn = ({ canSubmit, label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={styles.confirm_btn}
      type="submit"
      disabled={canSubmit}
    >
      {label}
    </button>
  );
};

export default ConfirmBtn;
