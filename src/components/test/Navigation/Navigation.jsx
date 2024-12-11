/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const navItems = ["Home", "About", "Contact", "Login", "Register"];

  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          className={styles.navItem}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;