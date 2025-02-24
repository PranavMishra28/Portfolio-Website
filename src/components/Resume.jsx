import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Resume = () => {
  return (
    <div id="resume" className="mt-20 relative z-0">
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className={styles.sectionSubText}>My background</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className='mt-10'
      >
        <Link 
          to="/resume"
          className="inline-block bg-tertiary px-8 py-4 rounded-xl text-white hover:bg-secondary transition-colors"
        >
          View Full Resume
        </Link>
      </motion.div>
    </div>
  );
};

export default Resume; 