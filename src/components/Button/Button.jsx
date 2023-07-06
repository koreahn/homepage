import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ text, url, submitEvent }) => {
  return (
    <Link href={url}>
      <button
        className={styles.container}
        onClick={submitEvent ? submitEvent : "#"}
        type={submitEvent ? "submit" : "button"}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
