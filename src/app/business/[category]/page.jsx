"use client";
import { useState } from "react";
// import Image from "next/image";
// import Button from "@/components/Button/Button";
// import Link from "next/link";
import styles from "./page.module.css";
import { businessList } from "@/data/data.js";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { animateScroll as scroll } from "react-scroll";

const Category = ({ params }) => {
  const [title, setTitle] = useState(params.category);
  const data = businessList[title];

  return (
    <div
      className={styles.container}
      // style={params.category === "Business" ? { height: "100%" } : {}}
    >
      <h2>Overview</h2>
      <div className={styles.titleContainer}>
        {Object.entries(businessList).map(([category, items]) => (
          // <Link key={category} href={`/business/${category}`}>
          <h1
            key={category}
            className={styles.catTitle}
            style={category !== title ? { fontSize: 18, opacity: 0.4 } : {}}
            onClick={() => {
              setTitle(category);
            }}
          >
            {category}
          </h1>
          // </Link>
        ))}
      </div>
      {/* {Object.entries(businessList).map(
        ([category, items], id) =>
          category === params.category && (
            <div key={id} className={styles.arrowContainer}>
              {id !== 0 ? (
                <Link
                  href={`/business/${Object.entries(businessList)[id - 1][0]}`}
                >
                  <AiOutlineLeft className={styles.icon} />
                </Link>
              ) : null}
              <h1 className={styles.catTitle}>{category}</h1>
              {id + 1 !== Object.entries(businessList).length ? (
                <Link
                  href={`/business/${Object.entries(businessList)[id + 1][0]}`}
                >
                  <AiOutlineRight className={styles.icon} />
                </Link>
              ) : null}
            </div>
          )
      )} */}

      <div className={styles.arrowContainer}>
        {Object.entries(businessList).map(([category, items]) => (
          // <Link key={category} href={`/business/${category}`}>
          <h2
            key={category}
            className={styles.catTitle}
            style={category !== title ? { fontSize: 12, opacity: 0.4 } : {}}
            onClick={() => {
              setTitle(category);
            }}
          >
            {category}
          </h2>
          // </Link>
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
