import React from "react";

const SingleInfo = ({ text, image }) => {
  return (
    <div className="flex gap-4 items-center justify-center ">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
