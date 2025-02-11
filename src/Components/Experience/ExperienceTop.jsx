import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

const ExperienceTop = () => {
  return (
      <div className='flex lg:flex-row flex-col items-center gap-4 justify-center'>
          <ExperienceTopLeft />
          <ExperienceTopMiddle />
          <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop