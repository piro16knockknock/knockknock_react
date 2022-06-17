import React, { useState } from "react";
import styles from "styles/intro/direct-register.module.css";
import SelectBox from "components/setting/select-box";
import DateInput from "components/setting/date-input";
import CustomBtn from "components/custom-btn";

const DirectRegister = () => {
  const [category, setCategory] = useState("전세");

  return (
    <section className={styles[`container`]}>
      <h3 className={styles[`title`]}>집 정보</h3>
      <ul>
        <li className={styles[`info-row`]}>
          <label htmlFor={styles[`name-input`]}>집 이름</label>
          <input
            className={styles[`name-input`]}
            type="text"
            placeholder="집 이름을 입력해주세요"
          />
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
      <CustomBtn content="등록하기" />
    </section>
  );
};

export default DirectRegister;
