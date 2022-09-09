import React from "react";
import SearchImportantList from "../components/SearchImportantList";

const SearchImportantFeatures = () => {
  const searchImportantList = [
    {
      id: 1,
      name: "Ốp Iphone 5",
      product: "Bán 160k+ / tháng",
      image: "https://cf.shopee.vn/file/82658d73a4cfedb88d501f85327560a8_tn",
    },
    {
      id: 2,
      name: "Ốp Lưng Iphone",
      product: "Bán 153k+ / tháng",
      image: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
    },
    {
      id: 3,
      name: "Quần Ống Rộng Nữ",
      product: "Bán 109k+ / tháng",
      image: "https://cf.shopee.vn/file/9ec433bca2d7e0f8f6fc2ce1c5097882_tn",
    },
    {
      id: 4,
      name: "Bông Tẩy Trang 3 Lớp Cotton Pads",
      product: "Bán 95k+ / tháng",
      image: "https://cf.shopee.vn/file/1378b90f69b5e6208e6e4dee751c9093_tn",
    },
    {
      id: 5,
      name: "Bút Kẻ Mắt Chống Nước",
      product: "Bán 99k+ / tháng",
      image: "https://cf.shopee.vn/file/874878564caa2dbaf2ac94b18334ecf9_tn",
    },
    {
      id: 6,
      name: "Mắt Kính Gọng Tròn",
      product: "Bán 73k+ / tháng",
      image: "https://cf.shopee.vn/file/8fc5ceae001ec4a6b25731c87413706b_tn",
    },
  ];
  return (
    <div className="bg-white lg:w-[1230px] lg:mx-auto lg:mt-[40px] h-[320px] lg:-translate-y-0 -translate-y-[220px] w-[374px]">
      <h2 className="w-[170px] h-[18px] text-[#EE4D2D] lg:text-[16px] mt-[20px] ml-[20px] absolute font-bold text-xs">
        {" "}
        TÌM KIẾM HÀNG ĐẦU{" "}
      </h2>
      <SearchImportantList searchImportantList={searchImportantList} />
    </div>
  );
};

export default SearchImportantFeatures;
