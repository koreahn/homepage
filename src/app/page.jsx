import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const pages = [
  {
    title: "StreetTechBros",
    path: "/homeImages/streetTechBros.jpg",
    id: "streetTechBros",
  },
  {
    title: "Company",
    path: "/homeImages/company.jpg",
    id: "company",
  },
  {
    title: "Mission",
    path: "/homeImages/mission.jpg",
    id: "mission",
  },
  {
    title: "Franchise",
    path: "/homeImages/franchise.jpg",
    id: "franchise",
  },
  {
    title: "FAQ",
    path: "/homeImages/FAQ.jpg",
    id: "FAQ",
  },
];

const Home = () => {
  return (
    // <div>
    //   {pages.map((page) => (
    //     <div key={page.id} className={styles.container}>
    //       <div className={styles.item}>
    //         <h1 className={styles.title}>Street Tech Bros</h1>
    //         <p className={styles.desc}>
    //           PART 1. YoommY project for Micro Franchise
    //         </p>
    //         <Button url="home" text="See our works" />
    //       </div>
    //       <div className={styles.item}>
    //         <Image
    //           className={styles.img}
    //           width={500}
    //           height={1000}
    //           src={page.path}
    //           alt={page.id}
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </div>
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
            - YoommY opens a new horizon for India's street food culture
          </p>
          <Button url="/business" text="See our works" />
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
    </div>
  );
};

export default Home;
