import React from "react";

const Name = ({ children }) => {
  return (
    <h2 className="lg:w-[632px] h-[46px] text-[#000000CC] text-[20px] font-bold w-[400px] lg:px-0 px-2">
      {children}
    </h2>
  );
};

export default Name;
