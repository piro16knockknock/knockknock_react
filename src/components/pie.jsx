import React from "react";
import styles from "styles/components/pie.module.css";
const Pie = ({
  percentage = 50,
  barColor = "lightgreen",
  barSize = 20,
  width = 120,
  fontSize = 25,
}) => {
  return (
    <div
      className={`${styles[`pie`]} ${styles[`animate`]} ${styles[`no-round`]}`}
      style={{
        "--p": `${percentage}`,
        "--b": `${barSize}px`,
        "--c": `${barColor}`,
        "--w": `${width}px`,
        "--f": `${fontSize}px`,
      }}
    >
      {percentage}%
    </div>
  );
};

export default Pie;
