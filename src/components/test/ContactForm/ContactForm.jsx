/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in touch</h2>
        <p className={styles.subtitle}>Let us know how we can help</p>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Your full name"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="me@company.com"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
