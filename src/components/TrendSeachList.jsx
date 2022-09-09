import React from "react";
import TrendSearch from "./TrendSearch";

const TrendSeachList = ({ trendSearchList }) => {
  return (
    <ul className="flex items-center mt-[60px] lg:ml-[20px] absolute">
      {trendSearchList.map((trendSearch) => (
        <li key={trendSearch.id} className="ml-[31px]">
          <TrendSearch trendSearch={trendSearch} />
        </li>
      ))}
    </ul>
  );
};

export default TrendSeachList;
