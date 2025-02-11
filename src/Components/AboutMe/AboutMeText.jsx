import React from 'react'

const AboutMeText = () => {
  return (
      <div className='flex flex-col md:items-start sm:items-center md:text-center'>
          <h2 className='text-6xl text-cyan-400 mb-10'>About Me</h2>
          <p className='text-white'> I'm Eeshu, a web developer instructer with a passion for teaching and coding I specialize in React and Frontend developement, helping student build real-world projects and maste modern web technolgies I also run a YOutube channel , CodeNest,Where I Create tutorials and courses to guide aspiring devlopers in their journety forward sucessful careers in tech . OUtside of coding i enjoy continuous learing and sharing knowlege to inpire others to achieve their goals </p>
          <button className=' justify-center rounded-full py-2 px-4  text-lg flex items-center mt-10 transition-all duration-500 cursor-pointer md:self-start  text-white hover:text-cyan-400 border-orange-400 border-[1px]'>My Projects</button>
    </div>
  ) 
}

export default AboutMeText