import React from "react";
import SearchImportant from "./SearchImportant";
import Slider from "react-slick";

const SearchImportantList = ({ searchImportantList }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 1,
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
    <ul className="flex items-center mt-[44px] absolute lg:ml-0 ml-6">
      <div className="lg:w-[1230px] w-[320px]">
        <Slider {...settings}>
          {searchImportantList.map((searchImportant) => (
            <li
              key={searchImportant.id}
              className="lg:w-[200px] h-[290px] ml-[8px]"
            >
              <SearchImportant searchImportant={searchImportant} />
            </li>
          ))}
        </Slider>
      </div>
    </ul>
  );
};

export default SearchImportantList;
