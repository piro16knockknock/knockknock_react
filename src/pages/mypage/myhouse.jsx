import React from "react";
import styles from "styles/mypage/myhouse.module.css";

const MyHouse = (props) => {
  return (
    <section className={styles[`container`]}>
      <div className={styles[`title`]}>
        <h3>나의 집</h3>
      </div>
      <ul>
        <li className={styles[`house`]}>
          <span>❤킹갓제너럴 승빈이의 러블리하우스❤️</span>
          <button className={styles[`move-out`]}>이사가기</button>
        </li>
      </ul>
    </section>
  );
};

export default MyHouse;
