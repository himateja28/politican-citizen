
import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  const navItems = ["Home", "About", "Contact", "Login", "Register"];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4faf880d504a1686ac46750450700b696bb642c1b42c46937438dc2c80f77c5b?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48"
          alt="Socio Connect logo"
          className={styles.logoImage}
        />
        <span className={styles.logoText}>Socio Connect</span>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link
          key={index}
          to={`/${item.toLowerCase()}`}
          className={styles.navItem}
        >
          {item}
        </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
