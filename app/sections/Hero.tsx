import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import HeroBackground from "../components/background/HeroBackground";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
        >
          <AnimatedTitle
            text={"Hi, I'm Md Ehsanul Haque Rizvy."}
            className={
              "mb-1 text-left text-[24px] font-bold leading-[1.2em] tracking-tighter text-[#e4ded7] sm:text-[40px] md:text-[40px] lg:text-[60px] xl:text-[80px]"
            }
            wordSpace={"mr-[10px]"}
            charSpace={"mr-[0.001em]"}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
