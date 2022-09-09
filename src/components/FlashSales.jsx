import React, { useState, useEffect } from "react";
import FlashSale from "./FlashSale";
import Slider from "react-slick";

const FlashSales = () => {
  // Time animation flash sale
  const [hours, setHours] = useState(1);
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(0);
  var timer;
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6278f089d00bded55ae17142.mockapi.io/sendo/product"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      } else if (minutes === 0) {
        setHours(hours - 1);
        setMinutes(60);
        setSeconds(60);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  const Loading = () => {
    return <></>;
  };
  const ShowProducts = () => {
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
      <>
        <ul className="flex items-center mt-[40px] lg:ml-[-10px] ml-6">
          <div className="lg:w-[1230px] w-[320px]">
            <Slider {...settings}>
              {products.slice(0, 6).map((productsale) => (
                <li
                  key={productsale.id}
                  className="lg:ml-[22px] transition-all"
                >
                  <FlashSale productsale={productsale} />
                </li>
              ))}
            </Slider>
          </div>
        </ul>
      </>
    );
  };
  return (
    <div className="bg-white lg:w-[1230px] mx-auto mt-[40px] lg:h-[370px] h-[300px]">
      <div className="flex items-center justify-between pr-6">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e538967ec12cb5caa.png"
          alt=""
          className="w-[130px] h-[30px] leading-7 uppercase inline-block pl-4 mt-[20px] ml-[20px]"
        />
        <div className="flex items-center gap-x-2">
          <span className="w-[25px] h-[20px] text-white bg-black rounded-sm flex items-center justify-center">
            {" "}
            {hours < 10 ? "0" + hours : hours}{" "}
          </span>
          <span className="w-[25px] h-[20px] text-white bg-black rounded-sm flex items-center justify-center">
            {" "}
            {minutes < 10 ? "0" + minutes : minutes}{" "}
          </span>
          <span className="w-[25px] h-[20px] text-white bg-black rounded-sm flex items-center justify-center">
            {" "}
            {seconds < 10 ? "0" + seconds : seconds}{" "}
          </span>
        </div>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default FlashSales;
