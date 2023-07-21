import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
// import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>About Us</h1>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Do not hesitate to contact us below,
          </h1>
          <h2 className={styles.imgDesc}>
            +91 93190 58521
            <br />
            medykim100@gmail.com
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are the start-up who resolve the problems coming from STREET in
            India.
            <br />
            <br />
            We have three business experts, two are in Business and Operation,
            rest one is in Software engineering
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We find the problem from Street and resolve the problem by Tech and
            knowledges from Developed countries
            <br />
            <br />
            We’ve witnessed many problems on the street in India and we’re going
            to resolve the problems by Tech solution.
          </p>
        </div>
      </div>
      {/* <div className={styles.btnContainer}>
        <Button url="contact" text="Contact" />
      </div> */}
    </div>
  );
};

export default About;
