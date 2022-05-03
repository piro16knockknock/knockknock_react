import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const HeaderIntroLogin = lazy(() => import("./routes/intro/intro_login"));
const IntroNotLogin = lazy(() => import("./routes/intro/intro_not_login"));
const Calendar = lazy(() => import("./routes/home/calendar"));
const LivingRule = lazy(() => import("./routes/home/living_rule"));
const Guideline = lazy(() => import("./routes/home/guideline"));

const Login = lazy(() => import("./routes/login/login"));
const MyPage = lazy(() => import("./routes/mypage/mypage"));
const MyHomeDetail = lazy(() => import("./routes/setting/myhome_detail"));
const RoommateList = lazy(() => import("./routes/setting/roommate_list"));
const Error = lazy(() => import("./routes/error"));

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <IntroNotLogin />,
    },
    {
      path: "login",
      element: <Login />,
      /*로그인 안했으면 IntroNotLogin
        했으면 IntroLogin */
    },
    {
      path: "home",
      children: [
        { path: "", element: <Calendar /> },
        { path: "living_rule", element: <LivingRule /> },
        { path: "guideline", element: <Guideline /> },
      ]
    },
    {
      path: "setting",
      children: [
        { path: "myhome_detail", element: <MyHomeDetail /> },
        { path: "roommate_list", element: <RoommateList /> },
      ],
    },
    {
      path: "mypage",
      element: <MyPage />,
    },

    { path: "*", element: <Error /> },
  ]);

  return routes;
}
