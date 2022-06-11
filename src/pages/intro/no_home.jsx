import React from "react";
import styles from "styles/intro/have-home.module.css";
import { Link } from "react-router-dom";
import CustomBtn from "components/custom-btn";

const NoHome = (props) => {
  return (
    <section className={styles[`main`]}>
      <div className={styles[`meet`]}>
        <h2 style={{ marginBottom: "1rem" }}>🖐️</h2>
        <h2 style={{ marginBottom: "1rem" }}>user.nick_name님</h2>
        <h2>만나서 반갑습니다!</h2>
      </div>
      <div className={styles[`meet`]}>
        <p>
          서비스를 시작하기 전에
          <br />
          룸메이트 등록과 집 설정을 먼저 해주세요!
        </p>
      </div>
      <div style={{ zIndex: 3, position: "relative" }}>
        <Link to="/register">
          <CustomBtn content="집 등록" />
        </Link>
        <Link to="/mypage">
          <CustomBtn content="초대 확인" />
        </Link>
      </div>
    </section>
  );
};

export default NoHome;
