import React from 'react'

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="src\assets\about-me.jpg"
          className="h-full w-auto object-cover"
          alt=""
        />
      </div>
      <div className="h-[500px] w-[200px] absolute bg-orange-300 bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImage