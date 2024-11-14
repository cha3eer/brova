
import React from "react";
import styles from "./Nav.module.css";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#sale">SALE</a>
        </li>
      </ul>
      <div className={styles.logo}>
        
        <img
          src={require("./../images/logo.png")}
          alt="logo"
        
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
        <FaShoppingBag className={styles.icon} />
        <FaUser className={styles.icon} />
      </div>
    </nav>
  );
};

export default NavBar;
