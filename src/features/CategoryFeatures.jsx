import React from "react";
import CategoryList from "../components/CategoryList";

const CategoryFeatures = () => {
  const categoryList = [
    {
      id: 1,
      name: "Thời Trang Nam",
      image: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    },
    {
      id: 2,
      name: "Điện Thoại & Phụ Kiện",
      image: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      id: 3,
      name: "Thiết Bị Điện Tử",
      image: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
    },
    {
      id: 4,
      name: "Máy Tính & Laptop",
      image: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
    },
    {
      id: 5,
      name: "Máy Ảnh & Máy Quay Phim",
      image: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    },
    {
      id: 6,
      name: "Đồng Hồ",
      image: "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
    },
    {
      id: 7,
      name: "Giày Dép Nam",
      image: "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
    },
    {
      id: 8,
      name: "Thiết Bị Điện Gia Dụng",
      image: "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
    },
    {
      id: 9,
      name: "Thể Thao & Du Lịch",
      image: "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
    },
    {
      id: 10,
      name: "Ô Tô & Xe Máy & Xe Máy",
      image: "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
    },
    {
      id: 11,
      name: "Balo & Túi Ví Nam",
      image: "https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn",
    },
    {
      id: 12,
      name: "Đồ Chơi",
      image: "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn",
    },
    {
      id: 13,
      name: "Chăm Sóc Thú Cưng",
      image: "https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
    },
    {
      id: 14,
      name: "Thời Trang Nữ",
      image: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
    },
    {
      id: 15,
      name: "Mẹ & Bé",
      image: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
    },
    {
      id: 16,
      name: "Nhà Cửa & Đời Sống",
      image: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
    },
    {
      id: 17,
      name: "Sắc Đẹp",
      image: "https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn",
    },
    {
      id: 18,
      name: "Sức Khỏe",
      image: "https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn",
    },
    {
      id: 19,
      name: "Giày Dép Nữ",
      image: "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
    },
    {
      id: 20,
      name: "Túi Ví Nữ",
      image: "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
    },
    {
      id: 21,
      name: "Phụ Kiện & Trang Sức Nữ",
      image: "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
    },
    {
      id: 22,
      name: "Bách Hóa Online",
      image: "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn",
    },
    {
      id: 23,
      name: "Nhà Sách Online",
      image: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
    },
    {
      id: 24,
      name: "Thời Trang Trẻ Em",
      image: "https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
    },
    {
      id: 25,
      name: "Giặt Giũ & Chăm Sóc Nhà Cửa",
      image: "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
    },
    {
      id: 26,
      name: "Voucher & Dịch Vụ",
      image: "https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn",
    },
  ];
  return (
    <div className="bg-white lg:w-[1230px] mx-auto mt-[320px] h-[370px]">
      <h2 className="w-[1193px] h-[29px] text-[#000000] basis-0 leading-5 ml-[20px] absolute mt-3 font-semibold">
        {" "}
        DANH MỤC{" "}
      </h2>
      <CategoryList categoryList={categoryList} />
    </div>
  );
};

export default CategoryFeatures;
