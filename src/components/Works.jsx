import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-card hover:shadow-[#915EFF]/50 transition-all duration-300'>
        <div className='relative w-full flex justify-between items-start gap-4 mb-4'>
          <h3 className='text-white font-bold text-[24px] transition-colors duration-300 group-hover:text-[#915EFF] flex-1'>{name}</h3>
          <motion.div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer flex-shrink-0'
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.5, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </motion.div>
        </div>

        <p className='mt-2 text-secondary text-[14px] min-h-[90px]'>{description}</p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} cursor-default`}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="projects" className="mt-20">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. They reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
