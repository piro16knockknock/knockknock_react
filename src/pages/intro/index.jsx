import React, { useState } from "react";
import IntroNotLogin from "./intro_not_login";
import IntroLogin from "./intro_login";
import { useEffect } from "react";
import { getUserInfo } from "api/user";
const Intro = (props) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    console.log("?");
    getUserInfo().then((res) => {
      console.log(res);
    });
  }, []);
  //로그인 백 구현되면 수정
  return <>{login ? <IntroLogin /> : <IntroNotLogin />}</>;
};

export default Intro;
