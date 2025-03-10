"use client";
import { Link } from "next-view-transitions";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skill",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle Dark/Light theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set the theme on initial load from localStorage (optional)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Update the localStorage and class of body
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] dark:bg-[#121212] transition-all duration-300 ease-in-out">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl font-semibold text-lightText dark:text-darkText transition-all duration-300 ease-in-out"
        >
          <Image src="/images/hero-image.png" width={80} height={80} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-lightText dark:text-darkText hover:border-white transition-all duration-300 ease-in-out"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-lightText dark:text-darkText hover:border-white transition-all duration-300 ease-in-out"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="flex my-auto items-center gap-6">
          <button
            onClick={toggleTheme}
            className="mx-2 text-4xl bg-gray-800 text-darkText p-2 rounded-full transition-all duration-1000 ease-in-out"
          >
            {isDarkMode ? <CiLight /> : <MdDarkMode />}
          </button>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 my-auto">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex my-auto">
            <a
              href="/Seefa Banu.pdf"
              download="Seefa_Banu_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full text-lightText dark:text-darkText transition-all duration-300 ease-in-out"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-3 dark:[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.yellow.500)_86%,_theme(colors.yellow.300)_90%,_theme(colors.yellow.500)_94%,_theme(colors.slate.600/.48))_border-box] [background:linear-gradient(45deg,#D3D3D3,theme(colors.gray.100)_50%,#D3D3D3)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.yellow.500)_86%,_theme(colors.yellow.300)_90%,_theme(colors.yellow.500)_94%,_theme(colors.gray.100/.48))_border-box]  border border-transparent animate-border">
                My Resume
              </span>
            </a>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
