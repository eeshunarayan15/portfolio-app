import React from "react";
import { VscCircleLarge } from "react-icons/vsc";
const HeroPic = () => {
  return (
    <div className="  w-[50%] flex justify-center">
      <div className="w-33 md:w-55 h-33 md:h-55 bg-red-50 rounded-full overflow-hidden  ">
        <img
          className="object-center"
          src="https://res.cloudinary.com/dx0gbdkyn/image/upload/v1753756506/WhatsApp_Image_2025-06-08_at_22.03.33_3e9d5d7d_m9z0dg.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroPic;
