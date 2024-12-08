import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import styles from "./SocioConnect.module.css";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.removeItem('sessionExpiration');
    localStorage.removeItem('role');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bb2474114fa2eaffcac66bbe3afbec7dcc29a5c0b8d8b8e0d83966fd9897e03?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48"
          className={styles.logoImage}
          alt="Socio Connect Logo"
        />
        <div className={styles.logoText}>Socio Connect</div>
      </div>
      <nav className={styles.nav}>
        <a href="/viewupdates" className={styles.navItem}>
          view updates
        </a>
        <a href="/raise-issue" className={styles.navItem}>
          Raise Issue
        </a>
        <a href="/track-issue" className={styles.navItem}>
          Track Issue
        </a>
        <a
          href="#"
          className={styles.navItem}
          onClick={handleLogout} // Add onClick event for logout
        >
          Logout
        </a>
      </nav>
    </header>
  );
}

export default Header;
