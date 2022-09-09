import React from "react";
import TrendSearchList from "../components/TrendSeachList";
const TrendSearchFeatures = () => {
  const trendSearchList = [
    {
      id: 1,
      name: "Dép",
      product: "3tr+ sản phẩm",
      image: "https://cf.shopee.vn/file/6415a028edd8bdc2006ee16c46185bbb",
    },
    {
      id: 2,
      name: "Váy",
      product: "2tr+ sản phẩm",
      image: "https://cf.shopee.vn/file/442cba9cfbd78e092eb7d52fbb8c6b34",
    },
    {
      id: 3,
      name: "Áo Phông",
      product: "454k+ sản phẩm",
      image: "https://cf.shopee.vn/file/b6e5e37fce1feff723a00f8d0141d2cf",
    },
    {
      id: 4,
      name: "Túi Xách Nữ",
      product: "412k+ sản phẩm",
      image: "https://cf.shopee.vn/file/c1d4705640a1bcf3b779a5b978236419",
    },
    {
      id: 5,
      name: "Áo Khoác",
      product: "1tr+ sản phẩm",
      image: "https://cf.shopee.vn/file/f18d1d74863a66fc5f74a1b552e6ece9",
    },
  ];
  return (
    <div className="bg-white w-[1230px] mx-auto mt-[40px] h-[190px] lg:opacity-100 lg:visible opacity-0 invisible">
      <h2 className="w-[175px] h-[18px] text-[#0000008A] lg:text-[16px] font-bold mt-[14px] ml-[20px] absolute text-sm">
        {" "}
        XU HƯỚNG TÌM KIẾM{" "}
      </h2>
      <TrendSearchList trendSearchList={trendSearchList} />
    </div>
  );
};

export default TrendSearchFeatures;
