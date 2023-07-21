"use client";
import { useRef } from "react";
import styles from "./page.module.css";
import Home from "./home/page";
// import { navList } from "@/data/data";
// import Section from "@/components/Section/page";
import useOnScreen from "@/hooks/useOnScreen";
import Business from "./business/page";
import About from "./about/page";
import Contact from "./contact/page";

const Main = () => {
  const businessRef = useRef();
  const isBusinessRef = useOnScreen(businessRef);

  const aboutRef = useRef();
  const isAboutRef = useOnScreen(aboutRef);

  const contactRef = useRef();
  const isContactRef = useOnScreen(contactRef);

  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div
        id="business"
        ref={businessRef}
        className={`${styles.page} ${isBusinessRef ? styles.transparent : ""}`}
      >
        <Business />
      </div>
      <div
        id="about"
        ref={aboutRef}
        className={`${styles.page} ${isAboutRef ? styles.transparent : ""}`}
      >
        <About />
      </div>
      <div
        id="contact"
        ref={contactRef}
        className={`${styles.page} ${isContactRef ? styles.transparent : ""}`}
      >
        <Contact />
      </div>
      {/* {navList.map(
        (link) =>
          link.linkId !== "home" && (
            // <div key={link.id} id={link.linkId}>
            <Section key={link.id} pageId={link.linkId} />
            // </div>
          )
      )} */}
    </div>
  );
};

export default Main;
