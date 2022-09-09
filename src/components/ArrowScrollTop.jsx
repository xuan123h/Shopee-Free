import React, { useEffect, useState } from "react";

const ArrowTopScrollWeb = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      {backToTopButton && (
        <div
          className="lg:w-[40px] lg:h-[40px] bg-[#FFFFFF] absolute lg:right-[145px] lg:-translate-y-[200px] flex items-center justify-center cursor-pointer lg:ml-0 ml-[180px] -translate-y-[200px]"
          onClick={scrollUp}
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
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ArrowTopScrollWeb;
