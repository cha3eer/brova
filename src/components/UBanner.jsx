import React from "react";
import styles from "./Bannner.module.css";

const UBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={require("./../images/Last.png")} alt="UserPhoto" />
    </div>
  );
};

export default UBanner;
