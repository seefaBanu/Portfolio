"use client";
import React from "react";
import { motion } from "framer-motion";

// Sample skills data
const skillsData = [
  "Java",
  "React JS",
  "SpringBoot",
  "Node.js",
  "Next JS",
  "Python",
  "MySQL",
  "MsSQL",
  "MongoDB",
  "FireBase",
  "Selenium",
  "RestAssured",
  "figma",
  "CSS",
  "HTML",
  "C",
  "Ballerina",
  "GO",
  "Unity",
  "React Native",
  "Cucumeber",
  "TestNG",
  "Tailwind CSS",
  "TypeScript",
  "Agile",
  "jira",
  "Git",
  "AWS",
];

const SkillSection = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.09 * index,
      },
    }),
  };

  // Generate a random bounce class
  const randomBounce = () => {
    const bounceVariants = [
      // "animate-bounce",
      // "animate-ping",
      "animate-pulse",
      // "animate-jiggle", // Custom animation if you define it in Tailwind config
    ];
    return bounceVariants[Math.floor(Math.random() * 3)];
  };

  return (
    <section
      className="min-h-screen flex-col items-center pt-32 my-auto align-middle "
      id="skill"
    >
      <div>
        <h2 className="flex align-center  justify-center mx-auto text-center text-4xl font-bold text-lightText dark:text-darkText mt-4 mb-8 md:mb-12 my-auto">
          My Skills
        </h2>
      </div>
      <div className="flex flex-row text-lightText dark:text-darkText  justify-center items-center gap-2 py-6 mb-6 align-middle my-auto">
        <ul className="flex flex-wrap justify-center gap-8 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className={`bg-gray-100 border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 ${randomBounce()}`}
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillSection;
