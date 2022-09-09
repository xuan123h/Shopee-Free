import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarShopeeMall = () => {
  // handle Cart Shopee
  const state = useSelector((state) => state.handleCart);
  //
  return (
    <>
      <div className="text-white absolute lg:top-[0px] flex items-center lg:ml-[256px] lg:mt-[60px]">
        <div className="flex items-center ml-[160px] lg:opacity-100 lg:visible opacity-0 invisible">
          <Link to="/">
            <img
              src="https://madupramuka.co.id/wp-content/uploads/2020/07/Shopee-Logo-Fix.png"
              alt=""
              className="w-[56px] h-[40px] object-cover"
            />
          </Link>
          <span className="w-[2px] h-[30px] ml-[10px] lg:opacity-100 lg:visible opacity-0 invisible">
            {" "}
            |{" "}
          </span>
          <li className="ml-[10px] text-[24px] lg:opacity-100 lg:visible opacity-0 invisible">
            {" "}
            Shopee Mall{" "}
          </li>
        </div>
        <div className="flex items-center absolute lg:left-[550px]">
          <div className="w-[520px] h-[40px]">
            <input
              type="text"
              placeholder="Tìm trong Shopee Mall"
              className=" bg-[#FFFFFF] lg:w-[484px] lg:h-[34px] pl-2 font-semibold outline-none focus:border focus:border-green-600 text-purple-500 w-[240px] h-[30px] rounded-lg lg:ml-0 ml-2 lg:-translate-y-0 -translate-y-3 lg:px-0 px-4"
            />
            <span className="lg:w-[50px] lg:h-[30px] bg-[#D0011B] text-white absolute lg:left-[430px] flex items-center justify-center top-[2px] left-60 w-[34px] h-[34px] lg:mt-0 mt-[-18px] rounded-sm">
              <i class="bx bx-search-alt-2"></i>
            </span>
          </div>
          <span className="w-[26px] h-[26px] text-white text-[30px] absolute lg:top-[0px] lg:left-[600px] left-[280px] top-[-16px]">
            <Link to="/cart">
              <i class="bx bx-cart-alt"></i>
            </Link>
            <span className="absolute top-0 lg:text-[22px] lg:w-[35px] lg:h-[35px] lg:left-[40px] lg:p-2 bg-orange-300 rounded-full flex items-center justify-center w-4 h-4 text-xs left-7">
              {" "}
              {state.length}{" "}
            </span>
          </span>
        </div>
        <div className="lg:opacity-0 lg:invisible opacity-100 visible">
          <span className="absolute left-[340px] top-4 text-white text-[30px] lg:mt-0 mt-[-24px]">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavbarShopeeMall;
