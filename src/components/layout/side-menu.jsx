import { ICONS } from "lib/assets";
import styles from "styles/layout/side-menu.module.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = ({ largeCate, smallCates }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles[`nav`]}>
      <li>{largeCate}</li>
      {smallCates.length !== 0 && (
        <img
          width={10}
          height={10}
          src={ICONS.SIDE_LEFT_ARROW}
          alt="left arrow"
        />
      )}
      {smallCates.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => navigate(`${v.path}`)}
            className={
              location.pathname === `${v.path}`
                ? styles[`highlight`]
                : undefined
            }
          >
            {v.label}
          </li>
        );
      })}
    </nav>
  );
};

export default SideMenu;
