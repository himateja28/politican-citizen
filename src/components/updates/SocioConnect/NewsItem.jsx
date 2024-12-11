/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./SocioConnect.module.css";

const NewsItem = ({ image, secondaryImage, content, link }) => {
  return (
    <article className={styles.newsItem}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.mainImage} />
        {secondaryImage && (
          <img src={secondaryImage} alt="" className={styles.secondaryImage} />
        )}
      </div>
      <p className={styles.newsContent}>
        {content}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Budameru floods in Vijayawada
          </a>
        )}
      </p>
      <a href="/" className={styles.readMore}>
        Read More
      </a>
    </article>
  );
};

export default NewsItem;