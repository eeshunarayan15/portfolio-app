import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import AllSkillSM from './AllSkillSM';

const SkillMain = () => {
   
    
  return (
    <div id="skills">
      <div className='max-w-[1200px] px-4 mx-auto min-h-[600px]  overflow-hidden'>
        <SkillText />
        <div className='lg:block hidden '>
          <AllSkills />
              </div>
              <div className='sm:block lg:hidden'>
                  <AllSkillSM/> 
              </div>
      </div>
    </div>
  );
}

export default SkillMain