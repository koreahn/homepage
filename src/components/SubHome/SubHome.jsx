import React from "react";
import styles from "./subHome.module.css";
import Image from "next/image";

const SubHome = ({ param }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={param.url}
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{param.title}</h1>
        {param.sub && <h2 className={styles.title}>{param.sub}</h2>}

        {param.contents.map((content, id) => (
          <p key={id} className={styles.desc}>
            - {content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SubHome;
