import * as React from "react";
import "./About.scss";
import myPic from "../../Assets/mypic.jpeg";
import resume from "../../Assets/resume.pdf";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div id="home" className="about-container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="about"
      >
        <h1 className="intro-heading">Hi, I'm Tarun ! </h1>
        <p className="intro-description">
          I'm a passionate <span>Frontend Developer</span>. I love creating
          beautiful, responsive websites using modern techstacks like{" "}
          <span>ReactJs</span> and
          <span> Angular</span>.
        </p>
        <a href={resume} className="resume">
          Download my Resume
        </a>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="image-container"
      >
        <img src={myPic} alt="userimage" />
      </motion.div>
    </div>
  );
}
