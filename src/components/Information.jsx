import React from "react";

const Information = ({ information }) => {
  return (
    <div className="cursor-pointer">
      <img
        src={information.image}
        alt={information.name}
        className="lg:w-[45px] lg:h-[45px] ml-[20px] hover:-translate-y-1 transition-all w-10 h-10"
      />
      <h3 className="w-[138px] h-[14px] text-[#222222] lg:text-[13px] mt-[8px] font-semibold text-xs">
        {information.name}
      </h3>
    </div>
  );
};

export default Information;
