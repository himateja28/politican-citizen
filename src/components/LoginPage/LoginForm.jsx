import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    axios
      .get('https://politician-citizen-production.up.railway.app/user/login/' + user + '/' + pass)
      .then((res) => {
        if (res.data && res.data.role) {
          const role = res.data.role.toLowerCase();
          const sessionDuration = 1 * 60 * 1000; // 10 minutes in milliseconds
          const expirationTime = Date.now() + sessionDuration;

          // Store the role, username, and session expiration in localStorage
          localStorage.setItem('role', role);
          localStorage.setItem('user', res.data.username);
          localStorage.setItem('sessionExpiration', expirationTime);

          // Redirect based on role
          if (role === 'user') {
            navigate('/viewupdates');
          } else if (role === 'admin') {
            navigate('/admin');
          } else if (role === 'politician') {
            navigate('/politician');
          } else {
            alert('Invalid credentials. Please check your details.');
          }
        } else {
          alert('Invalid response from server. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      });
  }

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          id="email"
          className={styles.input}
          value={user}
          onChange={(e) => setUser(e.currentTarget.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          value={pass}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
      </div>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>
      </div>
      <a href="#forgot-password" className={styles.forgotPassword}>
        Forgot password?
      </a>
    </form>
  );
}

export default LoginForm;
