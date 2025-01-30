"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import React, { FormEvent } from "react";
import { Alert } from "@heroui/alert";

import styles from "../../styles/form.module.css";

export default function AboutPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [isDangerVisible, setIsDangerVisible] = useState(false);
  const [DangerMessage, setDangerMessage] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const onReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();

    try {
      if (Name === "" || Email === "" || Message === "") {
        setDangerMessage("Please fill out all fields");
        setIsDangerVisible(true);
        
        return false;
      }
      const res = await fetch("/api/send", {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify({
          Name,
          Email,
          Message,
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`
        },
      });
      if (res.ok) {
        const data = await res.json();
        setIsSuccessVisible(true);
        return Response.json(data)
      } else {
        setDangerMessage("Error: something went wrong");
        setIsDangerVisible(true)
      }
    } catch (err: any) {
      // alert(err)
      setDangerMessage(err);
      setIsDangerVisible(true);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full max-w-full flex-start flex-col md:mt-24">
      <h2
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className={`text-center ${styles.title}`}
      >
        Contact Me
      </h2>
      <p
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className={`dark:text-white text-gray-600 ${styles.desc}`}
      >
        If you like what you see and are interested in reaching out to me,
        please use the below form and I will get back to you as soon as I can.
      </p>
      <form
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className={`mt-10 w-full flex flex-col gap-7 dark:border-gray-200 border-gray-400  dark:bg-white/20 bg-black/20 ${styles.size} ${styles.glassmorphism}`}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className={styles.form_input}
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.form_input}
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          value={Message}
          placeholder="Type your message here"
          className={styles.form_textarea}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="flex items-center justify-center mx-3 mb-5 gap-4">
          <input type="button" value="Cancel" onClick={onReset} />
          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-blue-400 rounded-full text-white"
          >
            Submit
          </button>
        </div>
      </form>
      <Alert
        isVisible={isSuccessVisible}
        color={"success"}
        title={`Success your message has been sent`}
        onClose={() => setIsSuccessVisible(false)}
      />
      <Alert
        isVisible={isDangerVisible}
        color={"danger"}
        title={DangerMessage}
        onClose={() => setIsDangerVisible(false)}
      />
    </section>
  );
}
