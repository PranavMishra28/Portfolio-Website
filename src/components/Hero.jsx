import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github } from "../assets";

const iconVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  hover: {
    scale: 1.25,
    rotate: 12,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const SocialIcon = ({ href, icon, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (href.startsWith("mailto")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="relative"
    >
      <a
        href={href}
        onClick={handleClick}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className="w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-tertiary hover:bg-[#915EFF] transition-colors duration-300 shadow-xl hover:shadow-[#915EFF]/50 border-2 border-transparent hover:border-white/20"
        title={title}
      >
        {icon}
      </a>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Pranav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Ctrl + Shift + Inspire | Turning Ideas into Code
          </p>

          <div className="mt-8 flex gap-8">
            <SocialIcon
              href="mailto:mishrapranav82@gmail.com"
              title="Email"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            />
            <SocialIcon
              href="https://linkedin.com/in/pm28"
              title="LinkedIn"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              }
            />
            <SocialIcon
              href="https://github.com/PranavMishra28"
              title="GitHub"
              icon={
                <img
                  src={github}
                  alt="github"
                  className="w-7 h-7 object-contain"
                />
              }
            />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;