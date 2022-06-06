import React from "react";
import styles from "styles/auth/custom-input.module.css";

const CustomInput = ({ type = "text", label, eLabel, register, confirm }) => {
  return (
    <div className={styles.button_container}>
      <label htmlFor={styles.input}>{label}</label>
      <input
        maxLength={20}
        {...register(`${eLabel}`, confirm)}
        type={type}
        className={styles.input}
        autoComplete="false"
      />
    </div>
  );
};

export default CustomInput;
