import React, { useState } from "react";
import IntroNotLogin from "./intro_not_login";
import IntroLogin from "./intro_login";

const Intro = (props) => {
  const [login, setLogin] = useState(true);
  //로그인 백 구현되면 수정
  return <>{login ? <IntroLogin /> : <IntroNotLogin />}</>;
};

export default Intro;
