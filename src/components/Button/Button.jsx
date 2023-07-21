import React from "react";
// import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import styles from "./button.module.css";

const Button = ({ text, url, submitEvent }) => {
  return (
    <ScrollLink to={url} spy={true} smooth={true} offset={-100} duration={500}>
      <button
        className={styles.container}
        onClick={submitEvent ? submitEvent : null}
        type={submitEvent ? "submit" : "button"}
      >
        {text}
      </button>
    </ScrollLink>
  );
};

export default Button;
