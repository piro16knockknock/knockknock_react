import SocialBtn from "components/auth/social-btn";
import React, { useState } from "react";
import styles from "styles/auth/login.module.css";
import common from "styles/auth/common.module.css";
import { ICONS } from "lib/assets";
import CustomInput from "components/auth/custom-input";
import ConfirmBtn from "components/auth/confirm-btn";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className={common.container}>
      <p className={common.title}>로그인</p>
      <CustomInput label="아이디" onChange={handleId} />
      <CustomInput label="비밀번호" onChange={handlePassword} />
      <div className={styles.text_row}>
        <span>아이디/비밀번호 찾기</span>
        <span onClick={() => navigate("/sign-up")}>회원가입</span>
      </div>
      <ConfirmBtn
        label="로그인"
        canSubmit={id === "" || password === "" ? true : false}
      />
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