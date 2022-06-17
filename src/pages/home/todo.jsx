import React from 'react';
import SideMenu from "components/layout/side-menu";
import { calendar } from "lib/side-menu-routes";
import 'styles/calendar/calendar.css';
import styles from "styles/calendar/calendar.module.css";

const Todo = (props) => {

  return (
    <>
    <SideMenu {...calendar} />
    <section className={styles[`container`]}>
    <div className={styles[`side`]}>
      <div className={styles[`profile`]}>
        <div className={styles[`profile-title`]}>
          {/* 칭호 가져오기 -> 후에 수정예정 */}
          🏅킹갓
        </div>
        <div className={styles[`profile-box`]}>
          <img
            className={styles[`profile-img`]}
            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80"
            alt="profile"
          />
        </div>
        <div className={styles[`name`]}>
          <span>승빈</span>
          <span>@user01</span>
        </div>
      </div>
      <div className={`${styles[`house-name`]} ${styles[`box`]}`}>
          <span>우리집</span>
        </div>
      <div className={`${styles[`today-date`]} ${styles[`box`]}`}>
        {new Date().toLocaleDateString()}
      </div>
      <div className={`${styles[`side-todo`]} ${styles[`box`]}`}>
        <p>오늘의 할 일</p>
        <p>현재 할 일이 없어요~!</p>
        {/* 유저의 오늘 할 일 가져오기 */}
      </div>

    </div>
   

    </section>
    </>
  );
};

export default Todo;