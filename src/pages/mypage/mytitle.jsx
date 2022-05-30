import React from "react";
import styles from "styles/mypage/mytitle.module.css";

const MyTitle = (props) => {
  return (
    <section className={styles[`container`]}>
      <div className={styles[`title`]}>
        <h3>
          칭호 관리<span>사용할 칭호 하나를 선택해 주세요</span>
        </h3>
      </div>
      <ul className={styles[`my-title-list`]}>
        <li className={styles[`my-title`]}>
          <span>빨래의 신</span>
        </li>
      </ul>
    </section>
  );
};

export default MyTitle;
