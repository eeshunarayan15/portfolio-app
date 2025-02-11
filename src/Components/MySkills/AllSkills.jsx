import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import SingleSkill from './SingleSkill';

const AllSkills = () => {
     const skills = [
       { skill: "HTML", icon: FaHtml5 },
       { skill: "CSS", icon: IoLogoCss3 },
       { skill: "Tailwind", icon: RiTailwindCssFill },
       { skill: "JAVA-SCRIPT", icon: IoLogoJavascript },
       { skill: "Github", icon: FaGithub },

       { skill: "JAVA", icon: FaJava },
       { skill: "SPRING-BOOT", icon: SiSpringboot },
       { skill: "Docker", icon: FaDocker },
       { skill: "Spring Security", icon: SiSpringsecurity },
       { skill: "MySQL", icon: SiMysql },
       { skill: "PostGres", icon: BiLogoPostgresql },
     ];
  return (
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
          {skills.map((item, index) => {
              return <SingleSkill key={index} text={item.skill} imgsvg={<item.icon/>} />
          })}
    </div>
  )
}

export default AllSkills