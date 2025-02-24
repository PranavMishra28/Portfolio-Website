import React from "react";
import { motion } from "framer-motion";
import { github } from "../assets";

const Footer = () => {
  return (
    <footer className='w-full py-8 bg-primary mt-20 relative z-10'>
      <div className='max-w-7xl mx-auto px-6 sm:px-16'>
        <div className='flex flex-col items-center'>
          <p className='text-secondary text-[16px] text-center mb-8'>
            © 2025 Pranav Mishra | All Rights Reserved
          </p>
          <div className='flex gap-8'>
            <motion.a
              href="mailto:mishrapranav82@gmail.com"
              className="w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-tertiary hover:bg-[#915EFF] transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 shadow-xl hover:shadow-[#915EFF]/50 border-2 border-transparent hover:border-white/20"
              title="Email"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.location.href = "mailto:mishrapranav82@gmail.com"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/pm28"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-tertiary hover:bg-[#915EFF] transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 shadow-xl hover:shadow-[#915EFF]/50 border-2 border-transparent hover:border-white/20"
              title="LinkedIn"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open("https://linkedin.com/in/pm28", "_blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com/PranavMishra28"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-tertiary hover:bg-[#915EFF] transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 shadow-xl hover:shadow-[#915EFF]/50 border-2 border-transparent hover:border-white/20"
              title="GitHub"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open("https://github.com/PranavMishra28", "_blank")}
            >
              <img src={github} alt="github" className="w-7 h-7 object-contain" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 