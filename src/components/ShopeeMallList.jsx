import React from "react";
import ShopeeMall from "./ShopeeMall";
import Slider from "react-slick";

const ShopeeMallList = ({ shopeeMallList }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ul className="lg:w-[800px] flex items-center flex-wrap lg:ml-[60px] absolute lg:top-[1750px] w-[480px] top-[1100px] ml-16">
      <div className="lg:w-[800px] w-[120px]">
        <Slider {...settings}>
          {shopeeMallList.map((shopeeMall) => (
            <li
              key={shopeeMall.id}
              className="lg:w-[180px] lg:h-[216px] mt-[40px] w-14 lg:ml-[-30px] ml-4"
            >
              <ShopeeMall shopeeMall={shopeeMall} />
            </li>
          ))}
        </Slider>
      </div>
    </ul>
  );
};

export default ShopeeMallList;
