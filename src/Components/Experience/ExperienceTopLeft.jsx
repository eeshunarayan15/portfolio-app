import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange-400 font-bold uppercase text-3xl text-center'>Since 2002</p>
      <div className='flex justify-center items-center gap-4 '>
        <ExperienceInfo number={3} text="years" />
        <p className='font-bold text-6xl text-stone-400'>=</p>
        <ExperienceInfo number="23" text="WebSitse" />
      </div>
      <p className='text-white text-center'>
        with 3 Years of Experience building dyanmci and user-friendly web
        applicaions
      </p>
      <ExperienceInfo number="$180k" text="Max Costs" />
    </div>
  );
}

export default ExperienceTopLeft