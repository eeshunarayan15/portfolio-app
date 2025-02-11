import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";

const ContactSocail = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        Link="https://github.com/eeshunarayan15"
        Icon={FaGithub}
      />
      <SingleContactSocial
        Link="https://www.linkedin.com/in/eeshunarayan/"
        Icon={CiLinkedin}
      />
      <SingleContactSocial
        Link="https://www.instagram.com/eeshu_mehta/"
        Icon={IoLogoInstagram}
      />
    </div>
  );
}

export default ContactSocail