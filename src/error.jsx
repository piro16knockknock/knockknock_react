import React from "react";
import styles from "styles/error.module.css";
import { IMAGES } from "lib/assets";

const Error = (props) => {
  return (
    <section className={styles[`error`]}>
      <img src={IMAGES.ERROR} alt="404" />
      <div>
        <h1>404</h1>
        페이지가 존재하지 않습니다.
      </div>
    </section>
  );
};

export default Error;
