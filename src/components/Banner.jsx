
import React from "react";
import styles from "./Bannner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img
        src={require("./../images/first.png")}
        alt="SalePhoto"
      />
    </div>
  );
};

export default Banner;
