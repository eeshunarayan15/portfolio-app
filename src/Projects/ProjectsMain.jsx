import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const ProjectsMain = () => {
      const projects = [
        {
          name: "MovieApp",
          year: "2025",
          align: "left",
          image:
            "https://strapi.dhiwise.com/uploads/jusplay_movie_streaming_app_flutter_2_3dfd9cbbfc.jpg",
          link: "https://movie-app-two-lac.vercel.app/",
        },
        {
          name: "MovieApp",
          year: "2025",
          align: "right",
          image:
            "https://strapi.dhiwise.com/uploads/jusplay_movie_streaming_app_flutter_2_3dfd9cbbfc.jpg",
          link: "https://movie-app-two-lac.vercel.app/",
        },
        {
          name: "MovieApp",
          year: "2025",
          align: "left",
          image:
            "https://strapi.dhiwise.com/uploads/jusplay_movie_streaming_app_flutter_2_3dfd9cbbfc.jpg",
          link: "https://movie-app-two-lac.vercel.app/",
        },
        {
          name: "MovieApp",
          year: "2025",
          align: "right",
          image:
            "https://strapi.dhiwise.com/uploads/jusplay_movie_streaming_app_flutter_2_3dfd9cbbfc.jpg",
          link: "https://movie-app-two-lac.vercel.app/",
        },
      ];
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <ProjectText />
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item, index) => (
            <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsMain