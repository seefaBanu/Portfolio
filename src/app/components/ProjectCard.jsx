import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "next-view-transitions";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  tech,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="hover:border-4 rounded-xl hover:border-yellow-500 hover:scale-105 transition-transform duration-1000 ease-in-out">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay rounded-t-xl  items-center justify-center absolute top-0 left-0 w-full h-full dark:bg-[#181818] bg-gray-200 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-lightText dark:text-darkText" />
          </Link>
          {previewUrl !== "/" && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-lightText dark:text-darkText" />
            </Link>
          )}
        </div>
      </div>
      <div className="dark:bg-[#181818] bg-gray-100 rounded-b-xl p-6 gap-4">
        <div className="flex-col text-lightText dark:text-darkText rounded-b-xl mb-2">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-gray-500 text-justify">{description}</p>
        </div>
        <div className="flex flex-wrap my-3 ">
          {tech.map((item, index) => (
            <span
              key={index}
              className="m-1 px-3 py-1 text-lightText dark:text-darkText whitespace-nowrap relative  rounded-md border-2 border-yellow-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
