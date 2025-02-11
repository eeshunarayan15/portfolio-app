import React from 'react'

const SingleExperience = ({data}) => {
  return (
    <div className='md:h-[350px] md:w-[240px]   h-full w-full border-orange-400 border-dashed rounded-2xl mt-13 px-4 border-[2px] flex flex-col items-center justify-center '>
      <p className='font-bold text-cyan-400'>{data.job}</p>
      <p className='text-orange-400'>{data.company}</p>
      <p className='text-gray-400'>{data.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>
        {" "}
        {data.responsibilities.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleExperience