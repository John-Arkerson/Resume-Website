import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <section className="pt-48 sm:pt-36 w-full h-screen flex flex-col sm:flex-col justify-evenly bg-[url(../public/boulder.jpg)] bg-cover">
      <div className={styles.list}>
        <div className={styles.content}>
          <div className={styles.title}>John Arkerson</div>
          <div className={styles.name}>Developer, Designer & Climber</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
