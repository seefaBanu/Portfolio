"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      className="text-lightText dark:text-darkText min-h-screen flex items-center justify-center"
      id="about-section"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/hero-image.png"
          width={500}
          height={500}
          className="mb-8" // Adds space between the image and the text
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full space-y-4 dark:[background:linear-gradient(45deg,#172033,theme(colors.black)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.yellow.500)_86%,_theme(colors.yellow.300)_90%,_theme(colors.yellow.500)_94%,_theme(colors.slate.600/.48))_border-box] [background:linear-gradient(45deg,#D3D3D3,theme(colors.white)_50%,#D3D3D3)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white/.48)_80%,_theme(colors.yellow.500)_86%,_theme(colors.yellow.300)_90%,_theme(colors.yellow.500)_94%,_theme(colors.gray.400/.48))_border-box]  border border-transparent animate-border p-6 py-12 rounded-xl">
          {" "}
          {/* Adds space between elements in the column */}
          <h2 className="text-4xl font-bold text-lightText dark:text-darkText mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I’m Seefa Banu, a passionate IT Undergraduate with a strong
            interest in building scalable and efficient applications. I have
            experience working with{" "}
            <span className="text-yellow-500 font-bold">
              full-stack development
            </span>
            ,
            <span className="text-yellow-500 font-bold">
              {" "}
              cloud technologies
            </span>
            , and
            <span className="text-yellow-500 font-bold">
              {" "}
              identity & access management (IAM)
            </span>
            . My expertise includes{" "}
            <span className="text-yellow-500 font-bold">React</span>,
            <span className="text-yellow-500 font-bold"> Spring Boot</span>,
            <span className="text-yellow-500 font-bold"> MySQL</span>,
            <span className="text-yellow-500 font-bold"> OAuth2</span>,
            <span className="text-yellow-500 font-bold"> JWT security</span>,
            and
            <span className="text-yellow-500 font-bold"> Docker </span>, among
            other modern technologies.
            <br /> <br />I enjoy solving complex problems, optimizing systems,
            and exploring new technologies to enhance security and performance.
            My work spans backend development, API security,
            <span className="text-yellow-500 font-bold">
              role-based access control (RBAC)
            </span>
            , and cloud-native applications. <br /> <br />
            Additionally, I have a keen interest in researching and implementing
            identity management solutions. I thrive in collaborative
            environments and am always eager to learn, innovate, and contribute
            to impactful projects. Let’s connect and build something great
            together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
