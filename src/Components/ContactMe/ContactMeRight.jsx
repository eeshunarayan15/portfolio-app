import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocail from "./ContactSocail";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="src\assets\email-image.png"
        alt="contact me"
        className="max-w-[150px]"
      />
      <ContactInfo />
      <ContactSocail />
    </div>
  );
};

export default ContactMeRight;
