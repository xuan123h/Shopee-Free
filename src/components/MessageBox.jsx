import React, { useState } from "react";
import ReactModal from "react-modal";

const MessageBox = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="flex items-center gap-x-4 absolute top-[4150px] right-20 z-50 list-none w-28 h-10 bg-gray-300 rounded-lg justify-center lg:opacity-100 lg:visible opacity-0 invisible">
      <span
        className="text-violet-600 font-semibold cursor-pointer"
        onClick={openModal}
      >
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          ></path>
        </svg>
      </span>
      <li onClick={openModal} className="text-red-700 font-bold cursor-pointer">
        {" "}
        Chat{" "}
      </li>
      {modalIsOpen && (
        <span
          onClick={closeModal}
          className="cursor-pointer translate-y-16 translate-x-6"
        >
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      )}
      <ReactModal isOpen={modalIsOpen}>
        <ShowModel />
      </ReactModal>
    </div>
  );
};
function ShowModel() {
  return (
    <div className="w-[800px] h-[400px] absolute right-4 top-[4200px] bg-gray-300 rounded-lg list-none">
      {/* Sidebar */}
      <div className="flex items-center justify-between px-6 py-4">
        <li className="font-bold text-red-700 text-lg"> Chat </li>
      </div>
      {/* Left bar - Right bar */}
      <div className="flex items-center">
        {/* Left bar */}
        <div className="flex items-center gap-x-2 mt-6 -translate-y-4 border-r-2 border-r-green-500 -translate-x-8">
          <div className="flex flex-col gap-y-6">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-seller-live-vn/chateasy/6abdc0872a25853b36d17e7498335326.png"
              alt="logo"
              className="w-40 h-40 object-cover mx-auto"
            />
            <h2 className="mx-36 my-4 font-semibold text-orange-500">
              {" "}
              Xin Chào!{" "}
            </h2>
          </div>
        </div>
        {/* Right bar */}
        <div className="-translate-y-16">
          <div className="flex items-center gap-x-4 mb-4">
            {/* icon */}
            <span className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center text-white">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Tìm theo tên khách hàng"
              className="w-[390px] h-10 rounded-lg px-3 outline-none focus:border focus:border-gray-600 transition-all"
            />
          </div>
          <div className="flex items-center gap-x-4">
            <img
              src="https://i.pinimg.com/originals/2e/f0/86/2ef086033e321d78e9bbd2cd06083fa4.jpg"
              alt=""
              className="w-[50px] h-[50px] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-y-2">
              <h3 className="text-green-800 font-semibold"> laluvavn </h3>
              <span className="w-30 font-medium text-orange-700">
                {" "}
                Vào 00--2h đêm nay sẽ có 3 mã giảm giá siêu to khổ{" "}
              </span>
            </div>
            <p> 10 Th11 2021 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
