import React from "react";
import styles from "styles/mypage/myroommate.module.css";
import { ICONS } from "lib/assets";
const MyRoommate = (props) => {
  return (
    <section className={styles[`container`]}>
      <div className={styles[`title`]}>
        <h3>나의 룸메이트</h3> <img src={ICONS.BORDER_PLUS} alt="plus" />
      </div>
      <ul>
        <li className={styles[`roommate`]}>
          <span>이세윤</span>
          <button className={styles[`info-edit-btn`]}>프로필 보기</button>
        </li>{" "}
        <li className={styles[`roommate`]}>
          <span>이세윤</span>
          <button className={styles[`info-edit-btn`]}>프로필 보기</button>
        </li>
      </ul>
    </section>
  );
};

export default MyRoommate;
