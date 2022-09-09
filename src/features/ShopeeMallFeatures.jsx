import React from "react";
import Slider from "react-slick";
import ShopeeMallList from "../components/ShopeeMallList";

const ShopeeMallFeatures = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const shopeeMallList = [
    {
      id: 1,
      name: "Vua bếp Tefal",
      image: "https://cf.shopee.vn/file/67e582223d06521ec55ec4196ec0e7a2_xhdpi",
    },
    {
      id: 2,
      name: "Mua là có quà",
      image: "https://cf.shopee.vn/file/6cb655c093dbb5e2ca7efacd8c304587_xhdpi",
    },
    {
      id: 3,
      name: "Da khỏe sạch mụn",
      image: "https://cf.shopee.vn/file/c7b3b41eb5affd0bc38a8b1ac013c8f3_xhdpi",
    },
    {
      id: 4,
      name: "Ưu đãi đến 40%",
      image: "https://cf.shopee.vn/file/3c7c6b77f6139aac6f8a869f2324e879_xhdpi",
    },
    {
      id: 5,
      name: "Mua là có quà",
      image: "https://cf.shopee.vn/file/3bd9d8aaf08cbc52fe9529676bad36ae_xhdpi",
    },
    {
      id: 6,
      name: "Săn kính 0đ",
      image: "https://cf.shopee.vn/file/43343dd1637ea694241c9579fdb73b97_xhdpi",
    },
    {
      id: 7,
      name: "Ưu đãi đến 50%",
      image: "https://cf.shopee.vn/file/2e8142f55706b335c34a43d85a31ee0b_xhdpi",
    },
    {
      id: 8,
      name: "Mua 1 tặng 1",
      image: "https://cf.shopee.vn/file/99e07615693bb7327f03164806345eca_xhdpi",
    },
  ];
  return (
    <div className="bg-white lg:w-[1230px] mx-auto lg:mt-[190px] lg:h-[590px] mt-10 h-[320px]">
      <div className="lg:w-[1200px] h-[62px] bg-[#FFFFFF] lg:pl-5 pr-5 flex items-center list-none w-[240px]">
        <h2 className="lg:w-[120px] h-[17px] text-[#D0011B] lg:text-[17px] ml-[20px] font-bold text-[10px]">
          {" "}
          SHOPEE MALL{" "}
        </h2>
        <span className="ml-1"> | </span>
        <div className="lg:w-[211px] h-[20px] text-[#333333] lg:text-[16px] flex items-center ml-5 text-[8px]">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/6c502a2641457578b0d5f5153b53dd5d.png"
            alt=""
            className="w-[17px] h-[17px] "
          />
          <li className="ml-2 lg:w-60 w-16"> 7 Ngày Miễn Phí Trả Hàng </li>
        </div>
        <div className="w-[196px] h-[20px] text-[#333333] lg:text-[16px] flex items-center ml-5 text-[8px]">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/16ead7e0a68c3cff9f32910e4be08122.png"
            alt=""
            className="w-[17px] h-[17px]"
          />
          <li className="ml-2 lg:w-60 w-16"> Hàng Chính Hãng 100% </li>
        </div>
        <div className="w-[179px] h-[20px] text-[#333333] lg:text-[16px] flex items-center ml-5 text-[8px]">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/511aca04cc3ba9234ab0e4fcf20768a2.png"
            alt=""
            className="w-[17px] h-[17px]"
          />
          <li className="ml-2 lg:w-60 w-16"> Miễn Phí Vận Chuyển </li>
        </div>
        <div className="w-[100px] h-[20px] text-[#D0011B] text-[14px] flex items-center absolute right-[340px] font-semibold lg:opacity-100 lg:visible opacity-0 invisible">
          <li> Xem Tất Cả </li>
          <span className="text-[22px] mt-1 ml-1">
            <i class="bx bx-chevron-right"></i>
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="lg:w-[390px] lg:h-[464px] ml-8 lg:ml-[53px] lg:mt-[20px] w-[120px] mt-8">
          <Slider {...settings}>
            <div>
              <img
                src="https://cf.shopee.vn/file/ea270b2e47951d8c01dd045b7801b282"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cf.shopee.vn/file/3b4b98293b474d9bc71bc4898c12bf15"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cf.shopee.vn/file/ba0ec0532a43af9678392d7247df53b1"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cf.shopee.vn/file/60ae8c34ccf2ea40113bf652decf570f"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cf.shopee.vn/file/3330407909b73d12f69a53ca70581361"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cf.shopee.vn/file/2b9b21d288e7eb8c8c0d5c285e8a1d82"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cf.shopee.vn/file/0098fe3baf30ec6ebe62da53906fad30"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </div>
        <div>
          <ShopeeMallList shopeeMallList={shopeeMallList} />
        </div>
      </div>
    </div>
  );
};

export default ShopeeMallFeatures;
