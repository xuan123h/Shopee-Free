import React from "react";
import Information from "./Information";
import Slider from "react-slick";

const InformationList = ({ informationList }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="lg:w-[1230px] lg:h-[107px] bg-white flex items-center justify-center lg:top-[475px] absolute lg:mx-auto rounded-lg top-52 w-[355px]">
        <div className="lg:w-[1300px] lg:mt-2 w-[300px]">
          <Slider {...settings}>
            {informationList.map((information) => (
              <li
                key={information.id}
                className="lg:mx-[10px] mb-3 lg:mt-0 mt-4"
              >
                <Information information={information} />
              </li>
            ))}
          </Slider>
        </div>
      </ul>
    </div>
  );
};

export default InformationList;
