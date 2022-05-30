import React from "react";
import styles from "styles/auth/social-btn.module.css";

const SocialBtn = ({ iconPath, text }) => {
  return (
    <button className={styles.social_btn}>
      <img
        className={
          text === "네이버 로그인"
            ? styles[`social_icon-naver`]
            : styles.social_icon
        }
        src={iconPath}
        alt="google icon"
      />
      <span>{text}</span>
    </button>
  );
};

export default SocialBtn;
