import React from "react";

const SearchImportant = ({ searchImportant }) => {
  return (
    <div>
      <img
        src={searchImportant.image}
        alt={searchImportant.name}
        className="w-[180px] h-[180px] object-cover"
      />
      <p className="lg:w-[180px] lg:h-[25px] text-[#FFFFFF] lg:text-[14px] bg-[#00000042] flex items-center justify-center text-xs w-[140px] lg:ml-0 ml-6">
        {" "}
        {searchImportant.product}{" "}
      </p>
      <li className="w-[180px] h-[25px] text-[#555555] lg:text-[18px] text-center mt-3 text-sm">
        {searchImportant.name}
      </li>
    </div>
  );
};

export default SearchImportant;
