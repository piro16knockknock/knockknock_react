import React, { forwardRef } from "react";
import styles from "styles/setting/modal-btn.module.css";

const ModalBtn = forwardRef(({ label, onClick }, ref) => {
  return (
    <button ref={ref} onClick={onClick} className={styles[`button`]}>
      {label}
    </button>
  );
});

export default ModalBtn;
