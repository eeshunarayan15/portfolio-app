import React from 'react'

const HeroText = () => {
  return (
      <div className='w-[50%] flex flex-col gap-2 md:text-center '>
          <h2 className='font-black lg:text-2xl sm:text-xl uppercase text-cyan-400'>Frontend web developer</h2>
          <h1 className='font-black md:text-[2.8rem] lg:text-6xl sm:text-4xl  text-[25px] text-orange-400'>Eeshu Narayan</h1>
          <p className=' text-white text-lg mt-4 font-black '>A passionate Web Developer and Instructer <br /> with 15years of experienc</p>
    </div>
  )
}

export default HeroText