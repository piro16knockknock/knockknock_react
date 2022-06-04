import React from "react";
import styles from "styles/auth/custom-input.module.css";
const CustomInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.button_container}>
      <label htmlFor={styles.input}>{label}</label>
      <input
        type="text"
        value={value}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
