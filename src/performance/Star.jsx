import React from "react";

const Star = ({ children, className = "w-[22px] h-[22px] text-[#EE4D2D]" }) => {
  return <li className={`text-[16px] ${className}`}>{children}</li>;
};

export default Star;
