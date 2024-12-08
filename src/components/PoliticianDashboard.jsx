import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css'; // Importing CSS module

const PoliticianDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear sessionExpiration and role from localStorage
    localStorage.removeItem('sessionExpiration');
    localStorage.removeItem('role');
    // Display logout alert
    alert('You have been logged out');
    // Redirect to login page after logout
    navigate('/login');
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1>Welcome, Politician!</h1>
      </header>

      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/view" className={styles.navLink}>View Issues</Link>
          </li>
          <li>
            <Link to="/update" className={styles.navLink}>Post Updates</Link>
          </li>
          <li>
            <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
          </li>
        </ul>
      </nav>

      <main className={styles.mainContent}>
        <p>Select an option from the navigation menu to manage issues or update your profile.</p>
      </main>
    </div>
  );
};

export default PoliticianDashboard;
