import React from "react";
import { Link } from "react-router-dom";

const ProductXtraList = ({ t }) => {
  return (
    <div>
      <Link to={`/productxtra/${t.id}`}>
        <img
          src={t.image}
          alt={t.name}
          className="lg:w-[186px] lg:h-[186px] object-cover w-20"
        />
      </Link>
      <h3 className="w-[166px] h-[28px] text-[#000000DE] text-[12px] mt-2 ml-0">
        {t.name.substring(0, 51)}...
      </h3>
      <div className="flex items-center mt-3 justify-between">
        <span className="w-[50px] h-[18px] text-[#EE4D2D] lg:text-[16px] text-xs">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(t.price01)}
        </span>
        <p className="w-[71px] h-[14px] text-[#0000008A] lg:text-[12px] mt-2 ml-6 font-semibold text-purple-500 text-[10px]">
          {" "}
          Đã bán {t.count}{" "}
        </p>
        <li className="lg:w-[41px] w-[44px] h-[28px] lg:h-[34px] text-[#0000008A] lg:text-[12px] for rounded-sm rounded-b-3xl rounded-t-2xl text-[8px]">
          <p className="lg:ml-[11px] text-white font-bold ml-2">
            {t.promotion}
          </p>
          <p className="lg:ml-[8px] font-semibold lg:text-[10px] text-[8px] ml-2">
            GIẢM
          </p>
        </li>
      </div>
    </div>
  );
};

export default ProductXtraList;
