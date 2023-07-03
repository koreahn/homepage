import React from "react";
// import Image from "next/image";
// import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import { items } from "./data.js";

const Category = ({ params }) => {
  const data = items[params.category];

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category} Overview</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          {/* <h1 className={styles.title}>Test</h1> */}
          {data.map((item) => (
            <p key={item.id} className={styles.desc}>
              {item.url ? (
                <a className={styles.link} href={item.url}>
                  {item.content}
                </a>
              ) : (
                item.content
              )}
            </p>
          ))}
          {/* <Button text="See More" url="#" /> */}
        </div>
        {/* <div className={styles.imgContainer}>
          <Image className="img" fill={true} src="/YummY.jpeg" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Category;
