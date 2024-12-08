import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.highlight}>Bridging the Gap</span>: Empowering
          Conversations Between{" "}
          <span className={styles.highlightRed}>Leaders</span> and{" "}
          <span className={styles.highlight}>Citizens</span>
        </h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/500e801495b95aa1be32f959b9cf6d37a45aeb3379fde93d9194605bd383a052?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48"
          alt="Illustration of leaders and citizens"
          className={styles.heroImage}
        />
      </div>
      <p className={styles.heroSubtitle}>
        "A Platform for Progress: Direct Dialogue with Policymakers"
      </p>
    </section>
  );
};

export default Hero;
