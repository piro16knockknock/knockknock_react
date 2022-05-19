import React from "react";
import styles from "styles/login/login.module.css";
import { FaGoogle } from "react-icons/fa";
const Login = (props) => {
  return (
    <section className={styles.login}>
      <div>
        <h1 className={styles.container__title}>로그인</h1>
        <hr />
        <div className={styles.container}>
          {/* {% for message in messages %}
                <p className="container__error">{{ message }}</p>
            {% endfor %} */}
          <form method="POST">
            <p className={styles.login__row}>
              <label className={styles.container__label}>아이디</label>
              <input name="user_id" type="text" required />
            </p>
            <p className={styles.login__row}>
              <label className={styles.container__label}>비밀번호</label>
              <input name="user_pw" type="password" required />
            </p>
            <div className={styles.login__btnRow}>
              <button>
                <a
                  className={styles.signUpBtn}
                  href="{% url 'login:sign_up' %}"
                >
                  회원가입
                </a>
              </button>
              <input
                className={`${styles.loginBtn} ms-2`}
                type="submit"
                value="로그인"
              />
            </div>
            <div className={`${styles.socialLogin} my-5`}>
              <a className={styles.google}>
                <FaGoogle className="me-2" /> 구글 로그인
              </a>
              <a className={styles.naver}>네이버 로그인</a>
              {/* <a id="kakao" href="{% provider_login_url 'kakao' method='oauth2' %}">카카오톡 로그인</a><br>
                    <a id="facebook" href="{% provider_login_url 'facebook' method='oauth2' %}">페이스북 로그인</a> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
