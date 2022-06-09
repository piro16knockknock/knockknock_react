import React from "react";
import styles from "styles/intro/have-home.module.css";

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
        <button
          style={{ fontSize: "1.5rem", marginTop: "1rem" }}
          className="btn btn-lg btn-outline-warning rounded-pill bg-white px-4 py-2"
        >
          <a>{/* <a> href="{% url 'setting:myhome_register' %}" */}집 등록</a>
        </button>
        <button
          style={{ fontSize: "1.5rem", marginTop: "1rem" }}
          className="btn btn-lg btn-outline-warning rounded-pill px-4 py-2 bg-white "
        >
          <a href="{% url 'login:mypage' %}">초대 확인</a>
        </button>
      </div>
    </section>
  );
};

export default NoHome;
