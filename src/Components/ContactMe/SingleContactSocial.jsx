import React from 'react'

const SingleContactSocial = ({Icon,Link}) => {
  return (
      <div className='text-2xl h-12 w-12 border-[1px] border-orange-400 text-orange-400 flex justify-center items-center rounded-full '>
          <a className='cursor-pointer' href={Link}><Icon/></a>
    </div>
  )
}

export default SingleContactSocial