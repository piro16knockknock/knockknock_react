import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import LayoutContainer from "pages/layout";
import Todo from "pages/home/todo";

const Intro = lazy(() => import("pages/intro"));
const Register = lazy(() => import("pages/intro/register"));
const Calendar = lazy(() => import("pages/home/calendar"));
const LivingRule = lazy(() => import("pages/home/living_rule"));
const Guideline = lazy(() => import("pages/home/guideline"));

const Login = lazy(() => import("pages/auth/login"));
const SignUp = lazy(() => import("pages/auth/sign-up"));
const MyPage = lazy(() => import("pages/mypage/mypage"));
const MyHomeDetail = lazy(() => import("pages/setting/myhome_detail"));
const RoommateList = lazy(() => import("pages/setting/roommate_list"));
const Error = lazy(() => import("./error"));

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LayoutContainer />,
      children: [
        {
          path: "/",
          element: <Intro />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
          /*로그인 안했으면 IntroNotLogin
            했으면 IntroLogin */
        },
        {
          path: "home",
          children: [
            { index: true, element: <Calendar /> },
            { path: "todo/:id", element: <Todo /> },
            { path: "living_rule", element: <LivingRule /> },
            { path: "guideline", element: <Guideline /> },
          ],
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
      ],
    },

    { path: "*", element: <Error /> },
  ]);

  return routes;
}
