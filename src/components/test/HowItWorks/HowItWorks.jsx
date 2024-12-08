import React from "react";
import styles from "./HowItWorks.module.css";
import Step from "../../SocioConnect/Step";

const HowItWorks = () => {
  const steps = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/695a478401a970325db258f4a58f6b7df9fd1508eda97cf7a29a127473d2c364?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
      title: "Sign Up/Log In",
      description:
        "Citizens can sign up to report issues, while politicians sign up to address them",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31d5f3bbdb7c9c720642c215e1ff5680a1c5c46ee81f201444782719888bab66?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
      title: "Report an issue",
      description:
        "Citizens can easily report problems in their community by submitting details such as the issue category, location, and a brief description",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1222acf288d38d6ccd6af96d733d29bad25dae8b88dc55d21e067d66d4c8409?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
      title: "Track Progress",
      description:
        'Citizens can monitor the progress of their reported issues in real-time. Politicians or their teams will update the status from "Received" to "In Progress" and "Resolved."',
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13c75a26544694115ff6b183c97c088487d03dab5cbb13ecd191824dd9b512fc?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
      title: "Feedback & Collaboration",
      description:
        "Citizens can communicate directly with their representatives, provide suggestions, and collaborate to enhance their community.",
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>How It Works !</h2>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
