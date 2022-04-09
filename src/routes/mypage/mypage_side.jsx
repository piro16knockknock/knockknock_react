import React from "react";

const MyPageSide = (props) => {
  return (
    <div id="mypage-side">
      <div
        id="mypage-profile"
        className="text-center d-flex flex-column align-items-center pt-3"
      >
        <div className="mypage-profile-box">
          <img
            alt="profile"
            className="mypage-profile-img"
            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80"
          />
        </div>
        <a href="#" className="edit-icon">
          <img alt="edit" src="images/edit_icon.png" />
        </a>

        <div
          className="mypage-profile-username"
          style={{ alignItems: "center" }}
        >
          request.user.nick_name
          <p style={{ margin: "auto", padding: 0 }}>@ request.user.username</p>
        </div>
        <a className="edit_info">
          <button style={{ margin: "0.5rem" }}>회원정보 수정</button>
        </a>
        <a className="edit_info">
          <button style={{ margin: "0.5rem" }}>회원탈퇴</button>
        </a>
      </div>
    </div>
  );
};

export default MyPageSide;
