import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Our Business</h1>
      <p className={styles.desc}>
        - We are the start-up who resolve the problems coming from STREET in
        India.
      </p>
      <p className={styles.desc}>
        - We’ve witnessed many problems on the street in India and we’re going
        to resolve the problems by Tech solution.
      </p>
      <div className={styles.items}>
        <Link href="/business/Business" className={styles.item}>
          <span className={styles.title}>Business Overview</span>
        </Link>
        <Link href="/business/Problem" className={styles.item}>
          <span className={styles.title}>Problem Overview</span>
        </Link>
        <Link href="/business/Solution" className={styles.item}>
          <span className={styles.title}>Solution Overview</span>
        </Link>
        <Link href="/business/Market" className={styles.item}>
          <span className={styles.title}>Market Overview</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
