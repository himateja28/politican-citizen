import React from "react";
import styles from "./Step.module.css";

const Step = ({ icon, title, description }) => {
  return (
    <div className={styles.step}>
      <img src={icon} alt={title} className={styles.stepIcon} />
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  );
};

export default Step;
