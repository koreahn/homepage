import React, { Link } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { homeList } from "@/data/data";
import SubHome from "@/components/SubHome/SubHome";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Street Tech Bros</h1>
          <p className={styles.desc}>
            PART 1. YoommY project for Micro Franchise
          </p>
          <p className={styles.desc}>- A new concept of Micro Franchise</p>
          <p className={styles.desc}>
            - Changes the traditional street food culture
          </p>
          <p className={styles.desc}>
            - YoommY opens a new horizon for India&apos;s street food culture
          </p>
          <Button url="business" text="See our works" />
        </div>
        {/* <div className={styles.item}>
          <Image
            className={styles.img}
            width={500}
            height={1000}
            src="/YummY.jpeg"
            alt=""
          />
        </div> */}
      </div>

      {homeList.map((content) => (
        <SubHome key={content.id} param={content} />
      ))}
      {/* <Button url="business" text="know more" /> */}
    </div>
  );
};

export default Home;
