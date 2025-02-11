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

const AllSkillSM = () => {
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
      
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
           
          {skills.map((item,index)=><div className='flex flex-col items-center ' key={index}>
              <item.icon className='text-7xl text-orange-400 ' />
              <p className='text-white text-center mt-4'>{ item.skill}</p>
                  </div >)}
    </div>
  )
}

export default AllSkillSM