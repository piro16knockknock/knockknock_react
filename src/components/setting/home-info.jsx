import React, { useState } from "react";
import styles from "styles/setting/home-info.module.css";
import SelectBox from "components/setting/select-box";
import DateInput from "components/setting/date-input";
import { ICONS } from "lib/assets";

const HomeInfo = (props) => {
  const [category, setCategory] = useState("전세");

  return (
    <>
      <ul>
        <li className={styles[`info-row`]}>
          <label htmlFor="">현재 집이름</label>
          <p>킹갓제너럴 승빈이의 러블리하우스</p>
        </li>
        <li className={styles[`info-row`]}>
          <label htmlFor="">집 이름 변경</label>
          <input
            className={styles[`name-input`]}
            type="text"
            placeholder="변경할 집 이름을 입력하고 버튼을 눌러주세요"
          />
          <img className={styles[`edit-icon`]} src={ICONS.PENCIL} alt="edit" />
        </li>
        <li className={styles[`info-row`]}>
          <label htmlFor="">전세/월세</label>
          <SelectBox selected={category} setSelected={setCategory} />
        </li>
        {category === "월세" && (
          <li className={styles[`info-row`]}>
            <label htmlFor="">월세 납부일</label>
            <DateInput />
          </li>
        )}
        <li className={styles[`info-row`]}>
          <label htmlFor="">공과금 납부일</label>
          <DateInput />
        </li>
      </ul>
    </>
  );
};

export default HomeInfo;
