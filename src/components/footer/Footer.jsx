import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© STREETTECH BROS PRIVATE LIMITED. All Rights Reserved.</div>
      {/* <div className={styles.social}>
        <Image
          src="/facebook.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="facebook"
        />
        <Image
          src="/instagram.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="instagram"
        />
        <Image
          src="/twitter.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="twitter"
        />
        <Image
          src="/youtube.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="youtube"
        />
      </div> */}
    </div>
  );
};

export default Footer;
