import React from "react";
import Slider from "react-slick";
const SliderOne = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="lg:w-[797px] lg:h-[235px] absolute lg:mt-[40px] lg:ml-[230px] w-[300px] h-[200px] ml-[34px] top-16 lg:top-0">
      <Slider {...settings}>
        <div>
          <img
            src="https://cf.shopee.vn/file/09a18530c60254280df1165505bcf1f2_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/2448493a11d2bdf6f07df5e6da5c65de_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/c100f214b91221e0d9c432a06cfdf433_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/e838997c18d27c1104c2389c3591e400_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/3963fa2e5500ce16576000bd900b1c54_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/393c449f710096225b4245c440398d93_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/dd20094caffdf76ba474b8db572da97f_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/e96152644e57d6327ed9400e103ddb54_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/5dacfc7523ffe385a963032516a94bbf_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/3fabe92e4121c0e115d2b8329199f464_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/d054ae610be3fff9a5a8771e935c9d1e_xxhdpi"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cf.shopee.vn/file/36e0c4ad33e6093e263118fb5036c5f9_xxhdpi"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;
