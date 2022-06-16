import React from "react";
import styles from "styles/auth/custom-input.module.css";
const CustomInput = ({ label, type, value, onChange }) => {
  return (
    <div className={styles.button_container}>
      <label htmlFor={styles.input}>{label}</label>
      <input
        type={type}
        value={value}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
};

export default React.memo(CustomInput);
