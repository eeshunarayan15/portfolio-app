import React from 'react'
import { Link } from "react-scroll";

const NavbarLinks = () => {
    const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];
  return (
       <div className="flex  items-center gap-2">
      {links.map((item, index) => (
        <Link className="cursor-pointer" key={index} smooth={true} spy={true} duration={500} offset={0} to={item.section}>
          {item.link}
        </Link>
      ))}
    </div>
  )
}

export default NavbarLinks


