import React from "react";
import styles from "styles/intro/have-home.module.css";
import { Link } from "react-router-dom";
import CustomBtn from "components/custom-btn";

const NoHome = (props) => {
  return (
    <section className={styles[`main`]}>
      <div className={styles[`meet`]}>
        <h2 style={{ marginBottom: "1rem" }}>ðï¸</h2>
        <h2 style={{ marginBottom: "1rem" }}>user.nick_nameë</h2>
        <h2>ë§ëì ë°ê°ìµëë¤!</h2>
      </div>
      <div className={styles[`meet`]}>
        <p>
          ìë¹ì¤ë¥¼ ììíê¸° ì ì
          <br />
          ë£¸ë©ì´í¸ ë±ë¡ê³¼ ì§ ì¤ì ì ë¨¼ì  í´ì£¼ì¸ì!
        </p>
      </div>
      <div style={{ zIndex: 3, position: "relative" }}>
        <Link to="/register">
          <CustomBtn content="ì§ ë±ë¡" />
        </Link>
        <Link to="/mypage">
          <CustomBtn content="ì´ë íì¸" />
        </Link>
      </div>
    </section>
  );
};

export default NoHome;
