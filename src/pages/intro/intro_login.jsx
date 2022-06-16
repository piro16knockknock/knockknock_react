import React, { useState } from "react";
import HaveHome from "./have_home";
import NoHome from "./no_home";
import RestIntro from "./rest_intro";

const IntroLogin = (props) => {
  const [hasHome, setHasHome] = useState(false);
  //로그인 백 구현되면 수정
  return (
    <>
      <div
        id="intro-main"
        className="intro-main"
        style={{ backgroundColor: "#FDF4E8", height: "100vh" }}
      >
        <div
          style={{
            background: "url(/images/intro-main2.png)",
            backgroundSize: "60%",
            backgroundPositionX: "80%",
            backgroundPositionY: "65%",
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          className="intro-main-cnt position-relative"
        >
          {hasHome ? <HaveHome /> : <NoHome />}
        </div>
      </div>
      <RestIntro />
    </>
  );
};

export default IntroLogin;
