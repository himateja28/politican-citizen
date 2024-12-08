/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import WhyUse from "../WhyUse/WhyUse";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyUse />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
