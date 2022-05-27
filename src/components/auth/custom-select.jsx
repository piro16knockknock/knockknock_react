import React from "react";
import styles from "styles/auth/custom-select.module.css";
const CustomInput = ({ label, onChange }) => {
  return (
    <div className={styles.button_container}>
      <label htmlFor={styles.input}>{label}</label>
      <select onChange={(e) => onChange(e)} className={styles[`input`]}>
        <option disabled selected value>
          ------------
        </option>

        <option value="여자">여자</option>
        <option value="여자">남자</option>
      </select>
    </div>
  );
};

export default CustomInput;