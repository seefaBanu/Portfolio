// "use client";
// import React, { useEffect, useState } from "react";
// import { FaBriefcase, FaLaptopCode } from "react-icons/fa"; // Import icons
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// // Sample experience data
// const experiencesData = [
//   {
//     date: "2021 - Present",
//     icon: FaBriefcase,
//     title: "Software Developer",
//     location: "Company XYZ",
//     description: "Developing software solutions with modern technologies.",
//   },
//   {
//     date: "2019 - 2021",
//     icon: FaLaptopCode,
//     title: "Frontend Developer",
//     location: "Company ABC",
//     description: "Building responsive websites and web applications.",
//   },
// ];

// const Experience = () => {
//   const [isClient, setIsClient] = useState(false);

//   // Prevent SSR hydration issues
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return null; // Avoids Next.js SSR conflicts

//   return (
//     <section
//       className="min-h-screen flex flex-col items-center justify-center pt-32"
//       id="experience"
//     >
//       <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-8">
//         My Experience
//       </h2>

//       <VerticalTimeline>
//         {experiencesData.map((item, index) => (
//           <VerticalTimelineElement
//             key={index}
//             date={item.date}
//             iconStyle={{
//               background: "#facc15", // Yellow for visibility
//               color: "white",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             icon={React.createElement(item.icon, {
//               className: "text-3xl text-white",
//             })}
//             contentStyle={{
//               background: "#facc15", // Yellow background
//               color: "black",
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//               textAlign: "left",
//               borderRadius: "30px",
//               padding: "1.3rem 2rem",
//               minHeight: "150px", // Prevents collapse
//             }}
//             contentArrowStyle={{ borderRight: "7px solid #facc15" }} // Arrow fix
//           >
//             <h3 className="font-semibold capitalize">{item.title}</h3>
//             <p className="font-normal">{item.location}</p>
//             <p className="mt-1 text-gray-700 dark:text-white">
//               {item.description}
//             </p>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// };

// export default Experience;
