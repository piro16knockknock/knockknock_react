import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

const loginGuardedRoute = ({ element }) => {
  const isLogined = localStorage.getItem(ACCESS_TOKEN);
  const dispatch = useDispatch();

  if (isLogined) {
    return element;
  } else {
    dispatch(
      show({
        content: "로그인이 필요합니다.",
        color: "white",
        backgroundColor: common[`errorColor`],
        success: false,
      })
    );
    return <Redirect to="/" />;
  }
};

const homeGuardedRoute = ({ element }) => {
  const isLogined = localStorage.getItem(ACCESS_TOKEN);
  const hasHome = localStorage.getItem(HOME);
  const dispatch = useDispatch();

  if (!isLogined) {
    //로그인 X
    return element;
  } else if (isLogined && hasHome) {
    //로그인 되어있고 집도 있음
    dispatch(
      show({
        content: "로그인이 필요합니다.",
        color: "white",
        backgroundColor: common[`errorColor`],
        success: false,
      })
    );
    return <Redirect to="/" />;
  } else {
    //로그인 X, 집 있음
    dispatch(
      show({
        content: "집 등록이 필요합니다.",
        color: "white",
        backgroundColor: common[`errorColor`],
        success: false,
      })
    );
    return <Redirect to="/" />;
  }
};

export { loginGuardedRoute, homeGuardedRoute };
