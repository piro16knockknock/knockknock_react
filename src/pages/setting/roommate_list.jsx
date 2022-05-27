import React, { useState, useRef } from "react";
import { ICONS } from "lib/assets";
import { roommateList } from "lib/dummy_roommate";
import styles from "styles/setting/roommate_list.module.css";
import ModalBtn from "components/setting/modal-btn";
const RoommateList = (props) => {
  const carouselRef = useRef();
  const handleLeft = () => {};
  return (
    <section className={styles[`container`]}>
      <h1 className={styles[`title`]}>룸메이트 관리</h1>
      <div>
        <button onClick={handleLeft}>
          <img
            width={25}
            height={36}
            src={ICONS.LEFT_ARROW}
            alt="왼쪽 화살표"
          />
        </button>
        <div ref={carouselRef} className={styles[`carousel`]}>
          <div className={styles[`roommate`]}>
            <img
              className={styles[`profile-img`]}
              src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80"
              alt="profile"
            />
            <span className={styles[`name`]}>세윤</span>
            <ModalBtn label="프로필 보기" />
          </div>
        </div>
        <button>
          <img
            width={25}
            height={36}
            src={ICONS.RIGHT_ARROW}
            alt="오른쪽 화살표"
          />
        </button>
      </div>
    </section>
  );
};

export default RoommateList;
