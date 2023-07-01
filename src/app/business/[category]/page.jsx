import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
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
          <Image
            className="img"
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Category;
