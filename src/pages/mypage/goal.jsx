import Pie from "components/pie";
import React from "react";
import styles from "styles/mypage/myhouse.module.css";
import "styles/colors.css";
const Goal = (props) => {
  return (
    <section className={styles[`container`]}>
      <div className={styles[`title`]}>
        <h3>달성률</h3>
      </div>
      <ul>
        <li>
          <Pie
            percentage={90}
            width={120}
            barColor={`#FFC56D`}
            fontSize={20}
            barSize={15}
          />
        </li>
        <li>
          <Pie
            percentage={100}
            width={120}
            barColor={`#89BA9F`}
            fontSize={20}
            barSize={15}
          />
        </li>
      </ul>
    </section>
  );
};

export default Goal;
