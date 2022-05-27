import SocialBtn from "components/login/social-btn";
import React, { useState } from "react";
import styles from "styles/login/login.module.css";
import { ICONS } from "lib/assets";
import CustomInput from "components/custom-input";

const Login = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className={styles.container}>
      <p className={styles.title}>로그인</p>
      <CustomInput label="아이디" onChange={handleId} />
      <CustomInput label="비밀번호" onChange={handlePassword} />
      <div className={styles.text_row}>
        <span>아이디/비밀번호 찾기</span>
        <span>회원가입</span>
      </div>
      <button
        className={styles.login_btn}
        disabled={id === "" || password === "" ? true : false}
      >
        로그인
      </button>
      <div className={styles.social_text}>
        <div className={styles.border}></div>
        <span>간편 로그인</span>
        <div className={styles.border}></div>
      </div>
      <SocialBtn iconPath={ICONS.GOOGLE} text="구글 로그인" />
      <SocialBtn iconPath={ICONS.NAVER} text="네이버 로그인" />
      <SocialBtn iconPath={ICONS.KAKAO} text="카카오 로그인" />
    </section>
  );
};

export default Login;
