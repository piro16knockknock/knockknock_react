import SocialBtn from "components/login/social-btn";
import React from "react";
import styles from "styles/login/login.module.css";
import { ICONS } from "lib/assets";
import CustomInput from "components/custom-input";

const Login = (props) => {
  return (
    <section>
      <p className={styles.title}>로그인</p>
      <CustomInput />
      <div>
        <label htmlFor="">비밀번호</label>
        <input type="text" />
      </div>
      <div>
        <span>아이디/비밀번호 찾기</span>
        <span>회원가입</span>
      </div>
      <button>로그인</button>
      <p>간편 로그인</p>
      <SocialBtn iconPath={ICONS.GOOGLE} text="구글 로그인" />
      <SocialBtn iconPath={ICONS.NAVER} text="네이버 로그인" />
      <SocialBtn iconPath={ICONS.KAKAO} text="카카오 로그인" />
    </section>
  );
};

export default Login;
