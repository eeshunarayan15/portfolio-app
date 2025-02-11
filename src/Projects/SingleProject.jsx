import { ExternalLink } from 'lucide-react';
import React from 'react'

const SingleProject = ({ name, year, align, image, link }) => {
    console.log(image)
  
  return (
    <div className={`flex w-full max-[500px]:flex-col-reverse items-center gap-8 ${align==="left" ? "md:flex-row":"md:flex-row-reverse"} justify-end`}>
      
      <div>
        <h2 className='md:text-3xl max-[500px]:text-2xl text-orange-400'>{name}</h2>
        <h2 className={`text-xl font-thin text-white max-[500px]:text-center${align==="left"? "md:text-right":"md:text-left"}`}>{year}</h2>
        <a
          className=  {`text-lg flex gap-2 items-center text-cyan-400 hover:text-orange-400 transition-all duration-500 cursor-pointer max-[500px]:justify-self-center ${align==="left"?"md:justify-self-end":"justify-self-start "}`}
          href=""
        >
          <span className="text-xl"> View</span>{" "}
     
            <ExternalLink />
      
        </a>
          </div>
          

          <div className='max-h[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border-[1px] border-white'>
              <div className='w-full h-full bg-cyan-400 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 '></div>
              <img className='w-full h-full' src={image} alt="projectimage" />
          </div>
    </div>
  );
}

export default SingleProject