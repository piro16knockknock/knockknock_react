import React, { useState } from "react";
import styles from "styles/intro/search.module.css";
import { homeList } from "lib/dummy_roommate";
import { AiFillHome } from "react-icons/ai";
import Check from "components/icons/check";

const Register = () => {
  const [result, setResult] = useState(homeList);
  const [selected, setSelected] = useState("");
  return (
    <section className={styles[`main`]}>
      <p>이미 집이 등록되어있으신가요? 집을 검색해서 노크해보세요!</p>
      <div className={styles[`input`]}>
        <input type="text" />
        <button>노크하기</button>
      </div>
      {result.map((v, i) => {
        return (
          <li
            className={` ${styles[`result`]}
              ${selected === v.name ? styles[`result-selected`] : undefined}
              `}
            key={v.id}
            onClick={() => setSelected(v.name)}
          >
            <div>
              <AiFillHome />
              {v.name}
            </div>
            <div>{selected === v.name && <Check color="white" />}</div>
          </li>
        );
      })}
    </section>
  );
};

export default Register;
