import React from "react";
import MyPageSide from "./mypage_side";
import SideMenu from "components/layout/side-menu";
import { myPage } from "lib/side-menu-routes";

import styles from "styles/mypage/mypage.module.css";
const MyPage = (props) => {
  return (
    <>
      <SideMenu {...myPage} />
      <section>
        <div className="side-nav">
          <ul className="d-flex">
            <li style={{ marginLeft: "3rem" }}>마이페이지</li>
          </ul>
        </div>
        <div className="mypage-container">
          <MyPageSide />
        </div>
      </section>
    </>
  );
};

export default MyPage;
