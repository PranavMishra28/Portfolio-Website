import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import picture from "../assets/picture.png";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col items-center">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 mb-8 flex justify-center"
        >
          <img
            src={picture}
            alt="profile"
            className="w-[400px] h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          Passionate software developer specializing in AI-driven solutions, full-stack development, and cloud computing. Senior in Computer Science at Penn State University, graduating May 2025.
          <br />
          <br />
          Proficient in Python, JavaScript, React, Node.js, and Solidity, with experience in both frontend and backend development. Skilled in cloud technologies, containerization, and DevOps tools, including AWS, Docker, and Kubernetes. Strong foundation in data-driven systems, blockchain, and cybersecurity.
          <br />
          <br />
          Bringing hands-on experience from internships at Deloitte and SPARC Foundation, where I built scalable applications and optimized system performance. Dedicated to leveraging innovative technology to solve real-world challenges.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");