import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/layout/media-nav-box.module.css";

const MediaNavBox = ({ list, category }) => {
  const navigator = useNavigate();
  return (
    <ul className={`${styles[`nav-box`]} ${category}-nav-box`}>
      {list.map((v, i) => {
        return (
          <li key={i} onClick={() => navigator(v.path)}>
            {v.label}
          </li>
        );
      })}
    </ul>
  );
};

export default MediaNavBox;
