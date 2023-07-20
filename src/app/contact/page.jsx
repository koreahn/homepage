"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Button from "@/components/Button/Button";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();

  const phone = watch("user_phone");
  const email = watch("user_email");

  const registerOptions = {
    user_name: { required: "Name is required" },
    user_phone: {
      required: !phone && !email ? "Phone Number or Email is required" : false,
      pattern: {
        value: /^[6-9]{1}[0-9]{9}$/,
        message: "Invalid Phone Number",
      },
    },
    user_email: {
      required: !email && !phone ? "Email or Phone Number is required" : false,
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Invalid email address",
      },
    },
    message: {
      required: "Message is required",
    },
  };

  const onSubmitForm = (data, event) => {
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
          alert(
            "Failed to send email.\n\nPlease contact us using the next page.(About Us)"
          );
          window.location.href = "/about";
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
        <form
          className={styles.form}
          ref={form}
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <input
            type="text"
            name="user_name"
            placeholder="name"
            className={errors?.user_name ? styles.errorInput : styles.input}
            {...register("user_name", registerOptions.user_name)}
          />
          {errors.user_name && (
            <small className={styles.errorText}>
              {errors.user_name?.message || "Error"}
            </small>
          )}
          <input
            type="text"
            name="user_phone"
            placeholder="phone (without +91)"
            className={errors?.user_phone ? styles.errorInput : styles.input}
            {...register("user_phone", registerOptions.user_phone)}
          />
          {errors.user_phone && (
            <small className={styles.errorText}>
              {errors.user_phone?.message || "Error"}
            </small>
          )}
          <input
            type="email"
            name="user_email"
            placeholder="email"
            className={errors?.user_email ? styles.errorInput : styles.input}
            {...register("user_email", registerOptions.user_email)}
          />
          {errors.user_email && (
            <small className={styles.errorText}>
              {errors.user_email?.message || "Error"}
            </small>
          )}
          <textarea
            className={errors?.message ? styles.errorTextArea : styles.textArea}
            name="message"
            placeholder="message"
            rows="8"
            {...register("message", registerOptions.message)}
          ></textarea>
          {errors.message && (
            <small className={styles.errorText}>
              {errors.message?.message || "Error"}
            </small>
          )}
          <div className={styles.btnContainer}>
            <Button
              url="#"
              type="submit"
              text="Send"
              submitEvent={handleSubmit(onSubmitForm)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
