import React from 'react'

const SingleSkill = ({text,imgsvg}) => {
  return (
      <div className='hover:-translate-y-10 transition-all duration-500'>
          <div className='flex flex-col items-center gap-2 relative'>
              <div className='bg-white text-cyan-400 h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-green-400 hover:scale-105 transform transition-all duration-500 text-6xl border-orange-400 hover:border-[4px]'>
                  {imgsvg}
              </div>
              <p className='text-white font-bold text-sm'>{text }</p>
          </div>
          <div className='w-[100px] h-[200px] bg-orange-400 absolute top-[50px] -z-10'>
              
          </div>
    </div>
  )
}

export default SingleSkill