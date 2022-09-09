import React from "react";
import { Link } from "react-router-dom";

const FlashSale = ({ productsale }) => {
  return (
    <div>
      <div>
        <Link to={`/FlashSale/${productsale.id}`}>
          <img
            src={productsale.image}
            alt={productsale.name}
            className="lg:w-[173px] lg:h-[173px] object-cover w-[100px] h-[100px]"
          />
        </Link>
      </div>
      <span className="w-[97px] h-[24px] text-[#EE4D2D] lg:text-[21.7px] ml-[22px] absolute mt-2 font-semibold text-xs">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "VND",
        }).format(productsale.price01)}
      </span>
      <span className="absolute lg:w-[55px] lg:h-[42px] for text-[15px] rounded-sm ml-[130px] rounded-b-[20px] rounded-t-lg lg:-translate-y-[168px] -translate-y-24 lg:-translate-x-0 -translate-x-10 w-9 h-9">
        <b className="w-[45px] h-[18px] text-[#EE4D2D] lg:text-[15px] lg:ml-3 text-[8px] ml-3">
          {productsale.promotion}
        </b>
        <br />
        <b className="w-[45px] h-[18px] text-[#FFFFFF] lg:text-[12px] lg:ml-3 absolute text-[8px] ml-2">
          {" "}
          GIẢM{" "}
        </b>
      </span>
      <div className="w-[160px] h-[20px] bg-red-400 mt-[50px] ml-1 rounded-full border-r-[20px] border">
        <p className="w-[156px] h-[15px] text-[#FFFFFF] flex items-center justify-center mt-[1px]">
          {" "}
          Đã bán {productsale.count}{" "}
        </p>
      </div>
    </div>
  );
};

export default FlashSale;
