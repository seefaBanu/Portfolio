"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-lightText dark:text-darkText mb-8 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-bold">
            <span className="font-light text-4xl sm:text-5xl lg:text-6xl">
              {" "}
              Hello, I&apos;m{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
              Seefa Banu
            </span>
          </h1>
          <h1 className="text-lightText dark:text-darkText mb-8 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-bold">
            <TypeAnimation
              sequence={[
                "IT Undergraduate",
                2000,
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] font-light text-base sm:text-lg mb-6 lg:text-xl">
            Turning vision into reality with code and design.
          </p>
          <div>
            {/* <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-lightText dark:text-darkText"
            >
              Hire Me
            </Link> */}
            <a
              href="/Seefa Banu.pdf"
              download="Seefa_Banu_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full text-lightText dark:text-darkText transition-all duration-300 ease-in-out mt-10"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-3 dark:[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.yellow.500)_86%,_theme(colors.yellow.300)_90%,_theme(colors.yellow.500)_94%,_theme(colors.slate.600/.48))_border-box] [background:linear-gradient(45deg,#D3D3D3,theme(colors.gray.100)_50%,#D3D3D3)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.yellow.500)_86%,_theme(colors.yellow.300)_90%,_theme(colors.yellow.500)_94%,_theme(colors.gray.100/.48))_border-box]  border border-transparent animate-border">
                My Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/about-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
