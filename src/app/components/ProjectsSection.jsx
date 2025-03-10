"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DonorLoop",
    description:
      "Web application designed to streamline blood donation by connecting donors and blood banks. It features secure authentication, real-time email notifications, and profile management. The platform also integrates machine learning-based forecasting to predict blood demand.",
    image: "/images/projects/1.png",
    tech: ["React JS", "Springboot", "MySQL", "AWS", "Asgardeo"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/seefaBanu/donorLoop",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tracko",
    description:
      "A system to monitor all the employees performance , working in a agile sprint project. Using story points to measure the performance. This system has user management , Project management, report visualizations , Realtime Dashboard, Agile sprint board",
    image: "/images/projects/2.png",
    tech: ["React JS", "Spring Boot", "MySql", "JWT", "Tailwind", "Redux"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TrackoApplication",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "XIRTAM",
    description:
      "Designed and developed a smart access control system to enhance security and access management in university labs and offices. Utilized the ESP32 module along with RFID technology and a solenoid lock for secure authentication. Additionally, developed a web-based platform where administrators can register students, manage lab scheduling for multiple batches, and track student access logs in real time.",
    image: "/images/projects/3.png",
    tech: ["React JS", "C", "FireBase", "ESP32", "Arduino"],
    tag: ["All", "IOT"],
    gitUrl: "https://github.com/IN4300-Embedded-Systems-Project/B20_Group29",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "BuyIT",
    description:
      " Microservice-based project designed for seamless e-commerce operations. It includes key modules such as Inventory Management, Customer Management, Cart Management, Order Management, and Authentication to ensure a secure and efficient shopping experience.",
    image: "/images/projects/4.png",
    tech: ["Docker", "React", "Springboot", "Zipkin"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BuyIt-App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "CocoExpert",
    description: "The primary functionalities of this system involve automating the process of breaking coconuts, extracting the coconut meat, and obtaining coconut milk. using Atmega 32 micro controller.",
    image: "/images/projects/5.png",
    tech: ["C", "Ardunio","ATMega32","Blender","TinkerCAD"],
    tag: ["All", "IOT"],
    gitUrl: "https://github.com/seefaBanu/CocoExpert",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="min-h-screen justify-center pt-32">
      <h2 className="text-center text-4xl font-bold text-lightText dark:text-darkText mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-lightText dark:text-darkText flex flex-row justify-center items-center gap-2 py-6 mb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IOT"
          isSelected={tag === "IOT"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tech={project.tech}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
