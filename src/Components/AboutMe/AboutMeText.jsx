import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-center">
      <h2 className="text-6xl text-cyan-400 mb-10">About Me</h2>
      <p className="text-white">
        {" "}
        I’m Eeshu, a passionate web developer with a strong interest in React
        and Frontend Development. During my B.Tech, I focused on building
        real-world projects that strengthened my skills in modern web
        technologies. I also enjoy sharing knowledge—through my YouTube channel,
        CodeNest—where I create tutorials and simple projects to help other
        aspiring developers learn. Outside coding, I love exploring new
        technologies, continuous learning, and helping others grow in their
        journey toward successful tech careers.
      </p>
      <button className=" justify-center rounded-full py-2 px-4  text-lg flex items-center mt-10 transition-all duration-500 cursor-pointer md:self-start  text-white hover:text-cyan-400 border-orange-400 border-[1px]">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
