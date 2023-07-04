import React from "react";
// import Image from "next/image";
// import Button from "@/components/Button/Button";
import Link from "next/link";
import styles from "./page.module.css";
import { businessList } from "@/data/data.js";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Category = ({ params }) => {
  const data = businessList[params.category];

  return (
    <div className={styles.container}>
      <h1>Overview</h1>
      <div className={styles.titleContainer}>
        {Object.entries(businessList).map(([category, items]) => (
          <Link key={category} href={`/business/${category}`}>
            <h1
              className={styles.catTitle}
              style={
                category !== params.category
                  ? { fontSize: 18, opacity: 0.4 }
                  : {}
              }
            >
              {category}
            </h1>
          </Link>
        ))}
      </div>
      <div className={styles.arrowContainer}>
        {Object.entries(businessList).map(([category, items], id) => (
          <>
            {category === params.category && id !== 0 ? (
              <Link
                href={`/business/${Object.entries(businessList)[id - 1][0]}`}
              >
                <AiOutlineLeft className={styles.icon} />
              </Link>
            ) : null}
            {category === params.category ? (
              <h1 className={styles.catTitle}>{category}</h1>
            ) : null}
            {category === params.category &&
            id + 1 !== Object.entries(businessList).length ? (
              <Link
                href={`/business/${Object.entries(businessList)[id + 1][0]}`}
              >
                <AiOutlineRight className={styles.icon} />
              </Link>
            ) : null}
          </>
        ))}
      </div>
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
