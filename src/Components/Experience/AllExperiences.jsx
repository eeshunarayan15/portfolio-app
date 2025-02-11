import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";

const AllExperiences = () => {
    const experiences = [
      {
        job: "Frontend-Developer",
        company: "Alex Apps",
        date: "2022-Present",
        responsibilities: [
          "Implementing resuable components",
          "Participating in large scale applications",
          "Working on the performanece of web applications",
      
        ],
      },
      {
        job: "Course Instructer",
        company: "Nucamp",
        date: "2023-Present",
        responsibilities: [
          "Explaining and facilitating web development concepts.",
          "Help Students with their assignemnts and grade them weekly.",
          "Provide support for students througth their learning journey",
         
        ],
      },
      {
        job: "Course Instructor",
        company: "Sprints",
        date: "2024-Present",
        responsibilities: [
          "Teaching Java-script,React and TailwindCSS.",
          "Participating in preparing course materials",
          "Helping students through their way in learning web development teaching",
         
        ],
      },
    ];
  return (
    <div className='flex md:flex-row flex-col items-center gap-5 '>
      {experiences.map((item, index) => (
        <>
          {" "}
          <SingleExperience key={index} data={item} />
       {index<2?(<FaArrowRight className='text-6xl text-orange-400 lg:block hidden'/>):""}
        </>
      ))}
    </div>
  );
}

export default AllExperiences