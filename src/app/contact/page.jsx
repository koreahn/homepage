"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Button from "@/components/Button/Button";

const Contact = () => {
  const form = useRef();

  const onSubmitForm = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Your message has been sent.");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} ref={form} onSubmit={onSubmitForm}>
          <input
            type="text"
            name="user_name"
            placeholder="name"
            className={styles.input}
            required
          />
          <input
            type="text"
            name="user_phone"
            placeholder="phone"
            className={styles.input}
            required
          />
          <input
            type="text"
            name="user_email"
            placeholder="email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            name="message"
            placeholder="message"
            rows="8"
            required
          ></textarea>
          <div className={styles.btnContainer}>
            <Button
              url="#"
              type="submit"
              text="Send"
              submitEvent={onSubmitForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
