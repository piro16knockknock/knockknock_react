import React from "react";
import styles from "styles/auth/custom-select.module.css";

const CustomInput = ({ eLabel, register, label, confirm }) => {
  return (
    <div className={styles.button_container}>
      <label htmlFor={styles.input}>{label}</label>
      <select {...register(`${eLabel}`, confirm)} className={styles[`input`]}>
        <option value="">------------</option>
        <option value="여자">여자</option>
        <option value="남자">남자</option>
      </select>
    </div>
  );
};

export default CustomInput;
