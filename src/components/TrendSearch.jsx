import React from "react";

const TrendSearch = ({ trendSearch }) => {
  return (
    <div className="flex items-center">
      <div>
        <h4 className="w-[99px] h-[17px] text-[#222222] text-[14px]">
          {" "}
          {trendSearch.name}{" "}
        </h4>
        <p className="w-[99px] h-[16px] text-[#757575] text-[13px] mt-[12px]">
          {" "}
          {trendSearch.product}{" "}
        </p>
      </div>
      <div>
        <img
          src={trendSearch.image}
          alt={trendSearch.name}
          className="lg:w-[99px] lg:h-[99px] object-cover w-4 h-4"
        />
      </div>
    </div>
  );
};

export default TrendSearch;
