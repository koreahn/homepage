"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { ThemeContext } from "@/context/ThemeContext";
import { navList } from "@/data/data";

const Navbar = () => {
  const { mode } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const setToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={styles.container}
      style={
        mode === "light"
          ? {
              backgroundColor: "white",
              color: "#111",
              transition: "1s all ease",
            }
          : {
              backgroundColor: "#111",
              color: "#bbb",
              transition: "1s all ease",
            }
      }
    >
      <div>
        <Link href="/" className={styles.logo}>
          Street Tech Bros
        </Link>
      </div>
      <div className={styles.menuContainer}>
        <DarkModeToggle />

        <div className={styles.burgerMenu} onClick={setToggle}>
          <div
            className={`${styles.burgerBar} ${
              showMenu ? styles.clicked : styles.unclicked
            }`}
          />
          <div
            className={`${styles.burgerBar} ${
              showMenu ? styles.clicked : styles.unclicked
            }`}
          />
          <div
            className={`${styles.burgerBar} ${
              showMenu ? styles.clicked : styles.unclicked
            }`}
          />
        </div>

        <div
          className={`${styles.menu} ${
            showMenu ? styles.visible : styles.hidden
          }`}
          style={
            mode === "light"
              ? { backgroundColor: "white" }
              : { backgroundColor: "#111" }
          }
        >
          <div className={styles.sideLinks}>
            {navList.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={styles.link}
                onClick={setToggle}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          {navList.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
