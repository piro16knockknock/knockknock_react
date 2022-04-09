import React from "react";
import HaveHome from "./have_home";
import RestIntro from "./rest_intro";
import "../../css/intro/intro.css";

// have_home과 no_home이 여기로

const IntroLogin = (props) => {
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
          <HaveHome />
        </div>
      </div>
      <RestIntro />
    </>
  );
};

export default IntroLogin;
