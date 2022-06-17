import React from "react";
import styles from "styles/mypage/mypage-side.module.css";

const MyPageSide = (props) => {
  return (
    <div className={styles[`profile-box`]}>
      <img
        className={styles[`profile-img`]}
        src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80"
        alt="profile"
      />
      <div className={styles[`name`]}>
        <span>승빈</span>
        <span>@user01</span>
      </div>
      <button className={styles[`info-edit-btn`]}>회원정보 수정</button>
    </div>
  );
};

export default MyPageSide;
