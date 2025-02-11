import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white '>
      <SingleInfo text="eeshunarayan15@gamil.com" image={MdEmail} />
      <SingleInfo text="+91 8228993676" image={FaPhoneAlt} />
      <SingleInfo text="Bhopal, India" image={IoLocationOutline} />
    </div>
  );
}

export default ContactInfo