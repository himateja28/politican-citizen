
import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <Header />
      <h1 className={styles.loginTitle}>Login</h1>
      <section className={styles.loginContent}>
        <div className={styles.imageWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01c30d972651aa0d411275a96313614c452347f0165296f0b8db02104e328844?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48"
            alt="Login illustration"
            className={styles.loginImage}
          />
        </div>
        <LoginForm />
      </section>
    </main>
  );
}

export default LoginPage;
