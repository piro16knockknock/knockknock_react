import React from "react";
import RestIntro from "./rest_intro";
import { Link } from "react-router-dom";
import { Translate } from "@material-ui/icons";

const IntroNotLogin = (props) => {
  return (
    <>
      <div
        id="intro-main-notlog"
        className="intro-main-notlog"
        style={{ height: "100vh", backgroundColor: "#FDF4E8" }}
      >
        <div id="intro-main-notlog-cnt" className="intro-main-cnt cnt-padding">
          <div style={{ zIndex: 3, position: "relative" }}>
            <h5>룸메이트와의 쾌적하고 편안한 생활 지킴이</h5>
            <h1 id="knock_left">KNOCK</h1>
          </div>

          <p style={{ zIndex: 3, position: "relative" }}>
            <span>노크노크</span>는 한 지붕 아래 함께 살아가는 사람들과의
            안정적인 거주 생활을 도와주기 위한 서비스입니다
            <br />
            지금 <span>노크노크</span>를 시작해보세요!
          </p>

          <div className="door-img-box" style={{ zIndex: 2 }}>
            <Link to="/login">
              <img
                alt="door"
                src="/images/knock_door.png"
                style={{ width: "55rem" }}
              />
            </Link>
          </div>
          <div className="text-end" style={{ zIndex: 3, position: "relative" }}>
            <h1 id="knock_right" style={{ paddingTop: "5rem" }}>
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
