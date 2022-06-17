import React, { useState } from "react";
import styles from "styles/intro/register.module.css";
import Search from "components/intro/search";
import DirectRegister from "components/intro/direct-register";

const Register = () => {
  const [category, setCategory] = useState("검색");
  return (
    <section>
      <nav className={styles[`nav`]}>
        <li
          className={category === "검색" ? styles[`highlight`] : undefined}
          onClick={() => setCategory("검색")}
        >
          집 검색하기
        </li>
        <li
          className={category === "등록" ? styles[`highlight`] : undefined}
          onClick={() => setCategory("등록")}
        >
          집 등록하기
        </li>
      </nav>
      {category === "검색" ? <Search /> : <DirectRegister />}
    </section>
  );
};

export default Register;
