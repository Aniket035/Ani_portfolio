import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aniket</h1>
        <p className={styles.description}>
          I'm a Web developer/Designer with 1 years of experience using Figma, React, 
          JAVA & Python developer. Reach out if you'd like to learn more!
        </p>
        <a href="https://wa.me/7488558295" target="_blank" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/aniketlogo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

