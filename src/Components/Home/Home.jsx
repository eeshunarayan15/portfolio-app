import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About';
import HeroMain from '../Hero/HeroMain';
import SubHeroSection from '../SubHeroSection/SubHeroSection';
import AboutMeMain from '../AboutMe/AboutMeMain';
import HelperSection from '../Helper/HelperSection';
import SkillMain from '../MySkills/SkillMain';
import ExperienceMain from '../Experience/ExperienceMain';
import ProjectsMain from '../../Projects/ProjectsMain';
import ContactMeMain from '../ContactMe/ContactMeMain';
import FotterMain from '../../Fotter/FotterMain';

const Home = () => {
  return (
    <div className=" min-h-screen max-w-screen   px-10 mx-auto ">
      <Navbar />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillMain />
      {/* <ExperienceMain /> */}
      <ProjectsMain />
      <ContactMeMain />
      <FotterMain />
      {/* <HelperSection /> */}
    </div>
  );
}

export default Home