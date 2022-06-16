import React from "react";
import styles from "styles/components/custom-btn.module.css";

const CustomBtn = ({ content }) => {
  return <button className={styles[`btn`]}>{content}</button>;
};

export default CustomBtn;
