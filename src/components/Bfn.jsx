import React from "react";
import styles from "./BlackFooter.module.css";

const Bfn = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          &copy; 2024 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Bfn;
