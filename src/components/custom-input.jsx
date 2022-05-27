import React from "react";
import styles from "styles/components/custom-input.module.css";
const CustomInput = (props) => {
  return (
    <div>
      <label htmlFor={styles.input}>아이디</label>
      <input type="text" className={styles.input} />
    </div>
  );
};

export default CustomInput;
