import React from "react";

const ShopeeMall = ({ shopeeMall }) => {
  return (
    <div>
      <img
        src={shopeeMall.image}
        alt={shopeeMall.name}
        className="cursor-pointer"
      />
      <li className="lg:ml-[40px] cursor-pointer lg:text-[16px] text-[8px] ml-4">
        {shopeeMall.name}
      </li>
    </div>
  );
};

export default ShopeeMall;
