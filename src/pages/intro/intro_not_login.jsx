import React from "react";
import RestIntro from "./rest_intro";
import { useNavigate } from "react-router-dom";
import styles from "styles/intro/intro-not-login.module.css";
import { IMAGES } from "lib/assets";
import Toast from "components/toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signUp } from "redux/pop-up";

const IntroNotLogin = () => {
  const navigator = useNavigate();
  const popUpShow = useSelector((state) => state.popUp.value);
  const dispatch = useDispatch();

  return (
    <>
      {popUpShow.show && (
        <Toast
          content={popUpShow.content}
          color={popUpShow.color}
          backgroundColor={popUpShow.backgroundColor}
        />
      )}
      <div
        className={styles[`intro-main-notlog`]}
        style={{ height: "100vh", backgroundColor: "#FDF4E8" }}
      >
        <div className={`${styles[`intro-main-cnt`]} ${styles[`cnt-padding`]}`}>
          <div style={{ zIndex: 3, position: "relative" }}>
            <h5>룸메이트와의 쾌적하고 편안한 생활 지킴이</h5>
            <h1 className={styles[`knock_left`]}>KNOCK</h1>
          </div>

          <p style={{ zIndex: 3, position: "relative" }}>
            <span>노크노크</span>는 한 지붕 아래 함께 살아가는 사람들과의
            안정적인 거주 생활을 도와주기 위한 서비스입니다
            <br />
            지금 <span>노크노크</span>를 시작해보세요!
          </p>

          <div className={styles[`door-img-box`]} style={{ zIndex: 2 }}>
            <img
              onClick={() => navigator("/login")}
              alt="door"
              src={IMAGES.DOOR}
              className={styles[`intro-door`]}
            />
          </div>
          <div className="text-end" style={{ zIndex: 3, position: "relative" }}>
            <h1
              className={styles[`knock_right`]}
              style={{ paddingTop: "7rem" }}
            >
              KNOCK
            </h1>
          </div>
        </div>
      </div>
      <RestIntro />
    </>
  );
};

export default IntroNotLogin;
