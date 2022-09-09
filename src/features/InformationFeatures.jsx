import React from "react";
import InformationList from "../components/InformationList";

const InformationFeatures = () => {
  const informationList = [
    {
      id: 1,
      name: "Bảo vệ sức khỏe",
      image: "https://cf.shopee.vn/file/93c7288443f2cebb1debcb88d47db77a_xhdpi",
    },
    {
      id: 2,
      name: "Freeship Xtra",
      image: "https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi",
    },
    {
      id: 3,
      name: "Hoàn Xu Xtra",
      image: "https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi",
    },
    {
      id: 4,
      name: "Hàng Hiệu -50%",
      image: "https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi",
    },
    {
      id: 5,
      name: "Hàng Quốc Tế",
      image: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
    },
    {
      id: 6,
      name: "Nạp Thẻ & Dịch Vụ",
      image: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
    },
    {
      id: 7,
      name: "Deal Sốc Từ 1K",
      image: "https://cf.shopee.vn/file/96385a65fa50800e096bb790fa5c1dba_xhdpi",
    },
    {
      id: 8,
      name: "Tech Zone - Siêu Thị Điện Tử",
      image: "https://cf.shopee.vn/file/93c7288443f2cebb1debcb88d47db77a_xhdpi",
    },
  ];
  return <InformationList informationList={informationList} />;
};

export default InformationFeatures;
