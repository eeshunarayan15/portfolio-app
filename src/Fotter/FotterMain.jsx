import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
const FotterMain = () => {
  const links = [
    { link: "About Me", secion: "about" },
    { link: "Skills", secion: "skills" },
    { link: "Experience", secion: "experience" },
    { link: "Projects", secion: "projects" },
    { link: "Contact", secion: "contact" },
  ];
  return (
    <div className="px-4 py-10  sm:flex  sm:flex-col">
      <div className="w-full h-[1px] bg-gray-400 mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-gray-400">Eeshu Narayan</p>
        <ul className="flex gap-4 max-[500px]:flex max-[500px]:flex-col text-gray-400 text-xl">
          {links.map((item, index) => (
            <li
              className="  hover:text-white transition-all duration-500 cursor-pointer"
              key={index}
            >
              <a href="#">{item.link}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="flex items-center m-w-[1200px] mx-auto text-right mt-2 text-sm  text-stone-400">
        <MdOutlineCopyright /> 2025 Eeshu Narayan | All Rights Reserved
      </p>
    </div>
  );
};

export default FotterMain;
