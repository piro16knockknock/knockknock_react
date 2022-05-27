import React from "react";
import styles from "styles/auth/custom-select.module.css";
const CustomInput = ({ label, onChange }) => {
  return (
    <div className={styles.button_container}>
      <label htmlFor={styles.input}>{label}</label>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default CustomInput;
