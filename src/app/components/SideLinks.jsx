"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SideLinks = () => {
  return (
    <>
      {/* Left Side: GitHub & LinkedIn (Vertical) */}
      <div className="fixed bottom-0 s:left-0 left-10 flex flex-col space-y-4">
        <a
          href="https://github.com/seefaBanu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/seefa-banu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        {/* Vertical Line */}
        <div className="h-40 w-[2px] bg-gray-500 mx-auto"></div>
      </div>

      {/* Right Side: Email (Vertical) */}
      <div className="fixed bottom-0 right-4 s:right-0 flex flex-col items-center space-y-32">
        <div className="rotate-90">
          <a
            href="mailto:seefabanugafoor@gmail.com"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 rotate-90"
          >
            seefabanugafoor@gmail.com
          </a>
        </div>
        {/* Vertical Line */}
        <div className="h-20 w-[2px] bg-gray-500 mx-auto"></div>
      </div>
    </>
  );
};

export default SideLinks;
