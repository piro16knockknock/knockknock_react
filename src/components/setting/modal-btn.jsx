import React from "react";
import styles from "styles/setting/modal-btn.module.css";

const ModalBtn = ({ label }) => {
  return <button className={styles[`button`]}>{label}</button>;
};

export default ModalBtn;
