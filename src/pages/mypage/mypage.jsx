import React from "react";
import MyPageSide from "./mypage_side";
import styles from "styles/mypage/mypage.module.css";
const MyPage = (props) => {
  return (
    <section>
      {/* 아니 이클래스 어딨는지 모르겠네 */}
      <div className="side-nav">
        <ul className="d-flex">
          <li style={{ marginLeft: "3rem" }}>마이페이지</li>
        </ul>
      </div>
      <div className="mypage-container">
        <MyPageSide />
      </div>
    </section>
  );
};

export default MyPage;
