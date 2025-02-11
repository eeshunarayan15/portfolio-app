import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h1 className='text-3xl text-orange-400 mb-4'>Get in Touch</h1>
        <p className='text-white'>Feel free to to reach out if you'd like to collaborate
          <br />you are just a few clicks away </p>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactMeLeft