import React from "react";
import Category from "./Category";
import Slider from "react-slick";

const CategoryList = ({ categoryList }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 2,
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
    <>
      <ul className="w-[1260px] h-[302px] flex items-center flex-wrap mx-auto absolute mt-[20px] ml-[6px]">
        <div className="lg:w-[1200px] lg:h-[400px] absolute top-[0px] lg:left-1 w-[320px] left-5">
          <Slider {...settings}>
            {categoryList.map((category) => (
              <li
                key={category.id}
                className="w-[118px] h-[149px] border border-white hover:shadow-lg ml-1 mt-6"
              >
                <Category category={category} />
              </li>
            ))}
          </Slider>
        </div>
      </ul>
    </>
  );
};

export default CategoryList;
