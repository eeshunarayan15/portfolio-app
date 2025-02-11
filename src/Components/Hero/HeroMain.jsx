import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
      <div className='pt-27 md:flex-row  md:pt-35 md:gap-5 items-center gap-4  flex flex-col '>
          <HeroText />
          <HeroPic/>
    </div>
  )
}

export default HeroMain