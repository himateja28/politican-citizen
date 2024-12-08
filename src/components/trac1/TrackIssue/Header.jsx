import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import styles from "./TrackIssue.module.css";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.removeItem('sessionExpiration');
    localStorage.removeItem('role');
    // Redirect to login page
    navigate('/login');
  };

  const navItems = [
    { text: "viewupdates", className: styles.navItem },
    { text: "Raise-Issue", className: styles.navItem },
    { text: "Track-Issue", className: styles.navItem },
    { text: "Logout", className: styles.navItemLast, onClick: handleLogout }, // Add handleLogout to Logout
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bb2474114fa2eaffcac66bbe3afbec7dcc29a5c0b8d8b8e0d83966fd9897e03?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48"
          className={styles.logoImage}
          alt="Socio Connect logo"
        />
        <span className={styles.logoText}>Socio Connect</span>
      </div>
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={`/${item.text.toLowerCase()}`} // Use item.text for the URL path
            className={item.className} // Apply the correct class
            onClick={item.text === "Logout" ? handleLogout : undefined} // Handle logout for Logout link
          >
            {item.text} {/* Render item.text as the link content */}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
