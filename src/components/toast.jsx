import React from "react";
import styles from "styles/components/toast.module.css";

const Toast = ({
  color = "white",
  backgroundColor = "tomato",
  content = "로그인에 성공했습니다.",
}) => {
  return (
    <div style={{ color, backgroundColor }} className={styles[`pop-up`]}>
      {content}
    </div>
  );
};

export default Toast;
