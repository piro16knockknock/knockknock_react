import Pie from "components/pie";
import React from "react";
import styles from "styles/mypage/goal.module.css";
import "styles/colors.css";
const Goal = (props) => {
  return (
    <section className={styles[`container`]}>
      <div className={styles[`title`]}>
        <h3>달성률</h3>
      </div>
      <ul className={styles[`pies`]}>
        <li>
          <Pie
            percentage={90}
            width={120}
            barColor={`#FFC56D`}
            fontSize={20}
            barSize={18}
          />
          <span>오늘 날짜 달성률</span>
        </li>
        <li>
          <Pie
            percentage={100}
            width={120}
            barColor={`#89BA9F`}
            fontSize={20}
            barSize={18}
          />
          <span>전체 달성률</span>
        </li>
      </ul>
    </section>
  );
};

export default Goal;
