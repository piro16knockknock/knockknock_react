import React from "react";
import styles from "styles/components/toast.module.css";
import { ICONS } from "lib/assets";
const Toast = ({
  color = "white",
  backgroundColor = "tomato",
  content = "로그인에 성공했습니다.",
  success = true,
}) => {
  return (
    <div style={{ color, backgroundColor }} className={styles[`pop-up`]}>
      {success ? (
        <img src={ICONS.SUCCESS} alt="success icon" />
      ) : (
        <img src={ICONS.FAIL} alt="fail icon" />
      )}
      {content}
    </div>
  );
};

export default Toast;
