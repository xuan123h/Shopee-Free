import React from "react";
const Category = ({ category }) => {
  return (
    <div>
      <img
        src={category.image}
        alt={category.name}
        className="w-[83px] h-[87px] object-cover ml-[10px] cursor-pointer transition-all"
      />
      <h3 className="w-[106px] h-[40px] text-[#000000CC] lg:text-[14px] mt-[10px] mb-[10px] text-center cursor-pointer transition-all text-xs">
        {category.name}
      </h3>
    </div>
  );
};

export default Category;
