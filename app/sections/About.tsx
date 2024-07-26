import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text="Md Ehsanul Haque Rizvy"
          className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            <AnimatedBody text="Passionate web developer with a knack for crafting elegant and efficient solutions. I bring creativity and precision to every project. Energetic and confident web developer with a strong work ethic, seeking to leverage expertise and personal skills in the dynamic field of web development. An enthusiastic professional eager to contribute to a forward-thinking organization, bringing a blend of dedication, hard work, and a commitment to achieving excellence in every project. I am currently pursuing a CST Diploma at Mangrove Institute of Science and Technology (2022-Running)." />
            <AnimatedBody
              delay={0.1}
              text="I want to learn more about Front-end and Full Stack Development and have a good command of JavaScript, Next.js, React.js, HTML, and CSS. I believe in trying out new things and picking up challenges as it is always great to have knowledge in a variety of subjects and have various experiences to share. I'm more interested in developing my weaknesses."
            />
            <AnimatedBody
              delay={0.2}
              text="Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. Experimenting with new technologies and staying up-to-date with the latest trends in the tech world excites me."
            />
            <AnimatedBody
              delay={0.3}
              text="At the moment, I’m working on some thrilling projects that I can’t wait to share. I am always open to new opportunities and collaborations to further expand my skillset and contribute to impactful projects."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
