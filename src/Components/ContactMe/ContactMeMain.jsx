import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
      <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center  mt-[100px] '>
          <h2 className='text-6xl text-cyan-400 mb-10 text-center'>ContasfdctMe</h2>
          <div className='flex justify-between gap-24 p-8  bg-stone-600 rounded-2xl lg:flex-row max-[500px]:flex-col'>
              <ContactMeLeft />
              <ContactMeRight/>
          </div>
    </div>
  )
}

export default ContactMeMain