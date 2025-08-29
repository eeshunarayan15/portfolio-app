import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocail from "./ContactSocail";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col  items-center justify-center gap-12">
      <img
        src="https://res.cloudinary.com/dx0gbdkyn/image/upload/v1756446460/email-image_canztl.png"
        alt="contact me"
        className="max-w-[150px]"
      />
      <ContactInfo />
      <ContactSocail />
    </div>
  );
};

export default ContactMeRight;
