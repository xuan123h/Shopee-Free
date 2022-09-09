import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="h-[400px] flex items-center justify-center lg:my-60 my-20">
      <div className="lg:w-[1380px] h-[100%] bg-white rounded-lg w-[370px]">
        <h2 className="text-center lg:text-[30px] mb-4 mt-20 font-semibold text-lg">
          {" "}
          Đơn hàng của bạn , mã #126394 đã được đặt thành công.{" "}
        </h2>
        <p className="text-center lg:text-[25px] mb-4 font-normal text-gray-700 text-sm">
          {" "}
          Chúng tôi sẽ giao hàng cho bạn trong thời gian sớm nhất.{" "}
        </p>
        <span className="flex items-center justify-center mb-10 text-violet-900">
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            ></path>
          </svg>
        </span>
        <div className="flex items-center gap-x-2 bg-gray-400 text-white w-48 h-10 rounded-lg justify-center px-1 mx-auto cursor-pointer">
          <span>
            {" "}
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>{" "}
          </span>
          <p>
            {" "}
            <Link to="/">Tiếp tục mua hàng</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
