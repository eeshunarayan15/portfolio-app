import React from "react";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <div id="about" className="flex md:flex-row my-20 sm:flex-row flex-col gap-12 px-4 max-w-[1200px] mx-auto justify-between items-center">
      <div>
        {" "}
        <AboutMeText />
      </div>
      <div>
        {" "}
        <AboutMeImage />
      </div>
    </div>
  );
};

export default AboutMeMain;
