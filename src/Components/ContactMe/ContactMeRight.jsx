import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocail from "./ContactSocail";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="https://scontent.fjlr2-2.fna.fbcdn.net/v/t39.30808-6/478348577_1679060053012893_7538401227165276468_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PkWsWP1pNEgQ7kNvgEBWEIP&_nc_oc=AdgSxpbxA42atdNAzmNRv-SZQ6Lb0bJQ5huvLqeLPzZIqnjiXhmi4Q6w3kmTwupW2frMugrQfjzh9Y_Azqvn6syN&_nc_zt=23&_nc_ht=scontent.fjlr2-2.fna&_nc_gid=A__9JiQwfj-lN_eKwF8jOBY&oh=00_AYDY37SHIjy_n2s_YYn23T9UyoNmSeevGL9gsboZo_scUA&oe=67B2D32F"
        alt="contact me"
        className="max-w-[150px]"
      />
      <ContactInfo />
      <ContactSocail />
    </div>
  );
};

export default ContactMeRight;
