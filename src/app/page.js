"use client"; // ✅ Add this at the top

import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillSection from "./components/SkillSection";
import SideLinks from "./components/SideLinks";
// import Experience from "./components/Experience";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const aboutPosition = aboutSection.offsetTop;
        setShowNavbar(window.scrollY >= aboutPosition - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-lightBackground dark:bg-darkBackground">
      <SideLinks />
      <HeroSection />
      {showNavbar && <Navbar />}
      <div className="container mt-24 mx-auto px-12 py-4">
        <section id="about-section">
          <AboutSection />
        </section>
        <SkillSection />
        {/* <Experience /> */}
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
