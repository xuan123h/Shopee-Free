import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Tippy
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!

// Hover
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useEffect } from "react";
import { useState } from "react";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Navbar = () => {
  // Tippy
  const [searchResult, setSearchResult] = useState([]);
  // Giá trị của ô input
  const [searchValue, setSearchValue] = useState("");
  // Show Search Result - Học từ F8
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState("");
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(data);
  let ComponentMounted = true;
  // handle Cart Shopee
  const state = useSelector((state) => state.handleCart);

  //  Hiệu ứng tắt bỏ cái thanh Search - Result
  const handleHideResult = () => {
    setShowResult(false);
  };
  //
  // Giá trị của ô search
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6278f089d00bded55ae17142.mockapi.io/sendo/product"
      );
      if (ComponentMounted) {
        setData(await response.clone().json());
        setProduct(await response.json());
        setLoading(false);
      }
      return () => {
        ComponentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <div className="z-100 absolute mt-16 -translate-y-16">
        <div className="mt-1 ml-2">
          <h2 className="w-[289px] h-[24px] text-[#3f4b53] text-[12px] font-bold">
            {" "}
            Lịch sử tìm kiếm{" "}
          </h2>
          <div>
            <p className="text-[#6f787e] text-[12px] font-bold ml-1">
              {" "}
              máy xay{" "}
            </p>
          </div>
        </div>
        <div className="mt-1 ml-2">
          <h2 className="w-[289px] h-[24px] text-[#3f4b53] text-[12px] font-bold">
            {" "}
            Xu hướng tìm kiếm{" "}
          </h2>
          <div className="text-[#6f787e] text-[12px] font-bold ml-1">
            <p> máy khoan pin </p>
            <p> áo sơ mi nữ </p>
            <p> máy giặt </p>
            <p> quần lót nữ lọt khe </p>
            <p> dao cạo râu </p>
            <p> áo </p>
            <p> thuốc lá điện tử </p>
            <p> kem chống nắng </p>
            <p> bàn phím cơ </p>
          </div>
        </div>
      </div>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <ul className="text-red-600 font-bold grid grid-cols-4 gap-y-2 ml-5">
          {product
            .filter((val) => {
              if (encodeURIComponent(searchProduct) == "") {
                return null;
              } else if (
                val.name.toLowerCase().includes(searchProduct.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(0, 16)
            .map((val, key) => {
              return (
                <div key={key}>
                  <div>
                    <img
                      src={val.image}
                      alt={val.name}
                      className="w-[50px] h-[50px] object-cover"
                    />
                    <p className="text-[10px] w-[200px] mt-1"> {val.name} </p>
                    <div className="text-[8px]">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                      }).format(val.price01)}
                      <span> {val.price02} </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </>
    );
  };
  const [searchProduct, setSearchProduct] = useState("");
  return (
    <div className="lg:h-[135px] color shadow-lg h-[30px]">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://www.takraonline.com/App_Themes/TakraOnlineWebsite/Images/web2019/background/shopee/img_logo_white.png"
            alt=""
            className="w-[200px] h-[70px]  inline text-[14px] left-[220px] object-cover absolute top-[78px] rounded-[20px] lg:opacity-100 lg:visible opacity-0 invisible"
          />
        </Link>
        {/* Search */}
        <div className="flex items-center">
          {/* search */}
          <Tippy
            interactive
            // Khi nào có kết quả trả về thì nó mới hiện
            // visible={showResult && searchResult.length > 0}
            visible={showResult}
            render={(attrs) => (
              <div
                tabIndex="-1"
                {...attrs}
                className="lg:w-[978px] lg:h-[481px] bg-[#FFFFFF] lg:-translate-x-[177px] lg:-translate-y-8 rounded-sm z-100 absolute lg:mt-36 lg:ml-[680px] border lg:opacity-100 lg:visible opacity-0 invisible"
              >
                {loading ? <Loading /> : <ShowProduct />}
              </div>
            )}
            onClickOutside={handleHideResult}
          >
            <div className="flex items-center px-2">
              <input
                type="text"
                placeholder="Hoàn xu 50% - 16.3 SHOPEEPAY DAY"
                className="lg:w-[984px] lg:h-[49px] bg-[#FFFFFF] absolute lg:left-[500px] lg:top-[80px] lg:pl-2 font-semibold outline-none lg:text-[20px] lg:rounded-md w-[240px] h-[30px] text-[10px] lg:px-0 px-2 rounded-sm"
                onChange={(e) => setSearchProduct(e.target.value)}
                // Khi chúng ta vào trang thì nó sẽ không có thanh search kết quả
                onFocus={() => setShowResult(true)}
              />
              <span className="lg:w-[60px] lg:h-[36px] lg:bg-[#FB5533] lg:pl-3 lg:pr-3 absolute lg:left-[1420px] lg:top-[87.5px] left-[250px] bg-gray-400 lg:rounded-none rounded-sm lg:flex-none flex items-center justify-center w-[25px] h-[30px] lg:text-white">
                <i class="bx bx-search-alt-2 lg:one"></i>
              </span>
            </div>
          </Tippy>
        </div>
        {/* End search */}
        <span className="lg:w-[26px] lg:h-[26px] lg:left-[1580px] absolute lg:top-[80px] lg:text-[40px] text-white left-[290px] text-[30px] lg:mt-0 mt-1">
          <Link to="/cart">
            <i class="bx bx-cart"></i>
          </Link>
          <span className="absolute lg:top-[0px] lg:text-[23px] lg:left-[44px] lg:p-2 bg-orange-300 rounded-full lg:h-[35px] lg:w-[35px] flex items-center justify-center w-4 h-4 text-xs left-7 top-1">
            {" "}
            {state.length}{" "}
          </span>
        </span>
      </div>
      <div className="flex items-center text-[#FFFFFFE6] text-[15px] absolute top-[140px] left-[500px] list-none font-semibold lg:ml-2 cursor-pointer lg:opacity-100 lg:visible opacity-0 invisible">
        <li className="cursor-pointer"> Dép </li>
        <li className="ml-[20px] cursor-pointer"> Váy </li>
        <li className="ml-[20px] cursor-pointer"> Túi Xách Nữ </li>
        <li className="ml-[20px] cursor-pointer"> Áo Khoác </li>
        <li className="ml-[20px] cursor-pointer"> Áo Phông </li>
        <li className="ml-[20px] cursor-pointer"> Áo Croptop </li>
        <li className="ml-[20px] cursor-pointer"> Áo Thun </li>
        <li className="ml-[20px] cursor-pointer"> Chân Váy </li>
      </div>
      <div className="lg:opacity-0 lg:invisible opacity-100 visible">
        <span className="absolute left-[340px] top-4 text-white text-[30px] lg:mt-0 mt-1">
          <Link to="/register">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
