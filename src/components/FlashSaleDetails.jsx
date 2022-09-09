import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import NavbarShopeeMall from "./NavbarShopeeMall";
import { addCart } from "../redux/actions/index";

// Swiper
// Swiper
// import Swiper from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
// React toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Name from "../performance/Name";
import Star from "../performance/Star";
import StarIcon from "../performance/StarIcon";
import FormGroup from "../performance/FormGroup";
import ProductXtra from "./ProductXtra";
import FooterTwoDetail from "./FooterTwoDetail";
import Footer from "./Footer";
const notify = () =>
  toast("🦄 Bạn đã thêm sản phẩm vào giỏ hàng thành công", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
//
const FlashSaleDetails = ({ products }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // handle Cart Shopee
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://6278f089d00bded55ae17142.mockapi.io/sendo/product/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <></>;
  };
  const ShowProduct = () => {
    // Swiper
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // Ham xu ly thoi gian (time) Flash-Sale
    //
    return (
      <>
        <div className="list-none">
          <div className="lg:h-[121px] bg-[#d0011b] h-[60px]">
            <Header />
            <NavbarShopeeMall />
          </div>
          <div className="flex items-center lg:ml-[270px] bg-white lg:mt-[30px] lg:w-[1380px] lg:h-[800px] mt-2 w-[455px]">
            <div className="lg:ml-[40px] ml-[-40px]">
              <div className="w-[400px] ml-[30px]">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="lg:w-[350px] w-[200px] lg:ml-0 ml-24"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={product.image04}
                      alt={product.name}
                      className="lg:w-[350px] w-[200px] lg:ml-0 ml-24"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={product.image05}
                      alt={product.name}
                      className="lg:w-[350px] w-[200px] lg:ml-0 ml-24"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={product.image06}
                      alt={product.name}
                      className="lg:w-[350px] w-[200px] lg:ml-0 ml-24"
                    />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={60}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="lg:w-[350px] w-[60px] lg:ml-0 ml-10"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={product.image04}
                      alt={product.name}
                      className="lg:w-[350px] w-[60px] lg:ml-0 ml-3"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={product.image05}
                      alt={product.name}
                      className="lg:w-[350px] w-[60px]"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={product.image06}
                      alt={product.name}
                      className="lg:w-[350px] w-[60px] lg:ml-0 ml-[415px]"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="lg:ml-[630px] absolute lg:top-[180px] top-[350px]">
              <Name> {product.name} </Name>
              <div className="flex items-center mt-[20px] lg:opacity-100 lg:visible opacity-0 invisible">
                <div className="flex items-center">
                  <Star> {product.starstar} </Star>
                  <li className="text-[14px] ml-[8px] text-orange-400">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </li>
                </div>
                <div className="flex items-center ml-[30px]">
                  <Star className="w-[30px] h-[22px] text-[#222222]">
                    {product.star}{" "}
                  </Star>
                  <li className="w-[59px] h-[25px] text-[#767676] text-[14px] ml-[22px] mt-1">
                    {" "}
                    Đánh Giá{" "}
                  </li>
                </div>
                <div className="flex items-center ml-[30px]">
                  <li className="w-[30px] h-[22px] text-[#222222] text-[16px]">
                    {" "}
                    {product.count}{" "}
                  </li>
                  <li className="w-[47px] h-[25px] text-[14px] text-[#767676] ml-2 mt-1">
                    {" "}
                    Đã Bán{" "}
                  </li>
                </div>
              </div>
              <div className="flex items-center mt-[10px] lg:ml-0 ml-6">
                <span className="line-through w-[57px] h-[20px] text-[#929292] text-[16px]">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01)}
                </span>
                <span className="w-[90px] h-[36px] text-[#EE4D2D] lg:text-[30px] ml-[45px]">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price02)}
                </span>
              </div>
              <div className="flex items-center mt-[20px] font-semibold lg:opacity-100 lg:visible opacity-0 invisible">
                <h4 className="w-[180px] h-[34px] text-[#757575] text-[16px] mt-[10px]">
                  {" "}
                  Mã Giảm Giá Của Shop{" "}
                </h4>
                <li className="ml-[10px]">{product.promotion01}</li>
                <li className="ml-[10px]">{product.promotion02}</li>
                <li className="ml-[10px]">{product.promotion03}</li>
                <li className="ml-[10px]">{product.promotion04}</li>
              </div>
              <div className="flex items-center lg:opacity-100 lg:visible opacity-0 invisible">
                <h4 className="w-[110px] h-[34px] text-[#757575] text-[16px] font-semibold mt-[10px]">
                  {" "}
                  Deal Sốc{" "}
                </h4>
                <li> Mua để nhận quà </li>
              </div>
              <div className="flex items-center">
                <h4 className="w-[110px] h-[34px] text-[#757575] text-[16px] font-semibold mt-[10px] lg:opacity-100 lg:visible opacity-0 invisible">
                  {" "}
                  Vận chuyển{" "}
                </h4>
                <div className="lg:opacity-100 lg:visible opacity-0 invisible">
                  <div className="flex items-center">
                    <span className="text-red-400">
                      <i class="bx bxs-baby-carriage"></i>
                    </span>
                    <li className="ml-[8px]"> Xử lý đơn hàng bởi Shopee </li>
                    <span className="ml-[8px] text-gray-400">
                      <i class="bx bxs-help-circle"></i>
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-violet-00">
                      <i class="bx bxs-bus-school"></i>
                    </span>
                    <li className="ml-[8px]"> Vận Chuyển Tới </li>
                    <li className="ml-[30px] text-green-400 font-medium">
                      {" "}
                      Địa chỉ của bạn{" "}
                    </li>
                  </div>
                </div>
                <div className="absolute flex items-start top-[380px] lg:opacity-100 lg:visible opacity-0 invisible">
                  <h4 className="w-[110px] h-[34px] text-[#757575] text-[16px] font-semibold ">
                    {" "}
                    Số Lượng{" "}
                  </h4>
                  <div className="flex items-center lg:opacity-100 lg:visible opacity-0 invisible">
                    <span>
                      <i class="bx bx-minus"></i>
                    </span>
                    <input
                      type="number"
                      min="1"
                      placeholder="1"
                      className="w-[40px] h-[23px] p-1 outline-none border ml-3"
                    />
                    <span className="w-[32px] h-[32px] p-1">
                      <i class="bx bx-plus"></i>
                    </span>
                  </div>
                  <li className="w-[150px] h-[17px] text-[#757575] text-[14px]">
                    {" "}
                    {product.producttotal} sản phẩm có sẵn{" "}
                  </li>
                </div>
                <div className="flex items-center absolute lg:top-[500px] top-[160px] lg:px-0 px-2">
                  <div className="w-[220px] h-[48px] bg-[#FF57221A] flex items-center justify-center rounded-lg">
                    <span className="w-[20px] h-[20px]">
                      <i class="bx bxs-cart-add"></i>
                    </span>
                    <li
                      className="w-[146px] h-[20px] text-[#EE4D2D] text-[16px] cursor-pointer"
                      onClick={() => addProduct(product)}
                    >
                      <span onClick={notify}>Thêm Vào Giỏ Hàng</span>
                    </li>
                  </div>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <div className="w-[113px] h-[48px] text-[#FFFFFF] text-[16px] bg-[#EE4D2D] flex items-center justify-center ml-[20px] rounded-lg">
                    <li>
                      {" "}
                      <Link to="/cart">Mua Ngay</Link>{" "}
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-[340px] absolute top-[860px] lg:opacity-100 lg:visible opacity-0 invisible">
            <div className="flex items-center">
              <h6 className="w-[59px] h-[20px] text-[#222222] text-[16px]">
                {" "}
                Chia sẻ:{" "}
              </h6>
              <span className="w-[25px] h-[25px] text-[22px] text-violet-500">
                <i class="bx bxs-message-rounded-check"></i>
              </span>
              <span className="w-[25px] h-[25px] text-[22px] text-gray-500">
                <i class="bx bxl-facebook-circle"></i>
              </span>
              <span className="w-[25px] h-[25px] text-[22px] text-red-500">
                <i class="bx bxl-pinterest"></i>
              </span>
              <span className="w-[25px] h-[25px] text-[22px] text-violet-400">
                <i class="bx bxl-twitter"></i>
              </span>
            </div>
            <div className="flex items-center ml-[30px]">
              <span className="w-[24px] h-[20px] text-[22px] text-red-500">
                <i class="bx bx-heart"></i>
              </span>
              <li className="w-[131px] h-[20px] text-[#222222] text-[16px] ml-2 mt-[2px]">
                {" "}
                Đã thích {product.like}{" "}
              </li>
            </div>
            <div className="flex items-center ml-[180px] lg:opacity-100 lg:visible opacity-0 invisible">
              <div className="flex items-center">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/6c502a2641457578b0d5f5153b53dd5d.png"
                  alt=""
                  className="w-[18px] h-[18px] object-cover"
                />
                <li className="w-[197px] h-[20px] text-[#4A4A4A] ml-[10px] text-[16px]">
                  {" "}
                  7 ngày miễn phí trả hàng{" "}
                </li>
              </div>
              <div className="flex items-center ml-[10px]">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/16ead7e0a68c3cff9f32910e4be08122.png"
                  alt=""
                  className="w-[18px] h-[18px] object-cover"
                />
                <li className="w-[177px] h-[20px] text-[#4A4A4A] ml-[10px] text-[16px]">
                  {" "}
                  Hàng chính hãng 100%{" "}
                </li>
              </div>
              <div className="flex items-center ml-[10px]">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/511aca04cc3ba9234ab0e4fcf20768a2.png"
                  alt=""
                  className="w-[18px] h-[18px] object-cover"
                />
                <li className="w-[177px] h-[20px] text-[#4A4A4A] ml-[10px] text-[16px]">
                  {" "}
                  Miễn phí vận chuyển{" "}
                </li>
              </div>
            </div>
          </div>
          <div className="bg-white lg:mt-[30px] lg:w-[1380px] h-[160px] lg:ml-[270px] mt-64 w-[370px] ml-[-20px]">
            <div className="flex items-center ml-[30px]">
              <div>
                <img
                  src="https://cf.shopee.vn/file/80cc0ea48958169be67d1ed574b52434_tn"
                  alt=""
                  className=" w-[100px] h-[100px] "
                />
              </div>
              <div className="ml-[30px] mt-[40px]">
                <li className="w-[350px] h-[20px] text-[#000000DE] text-[16px] font-bold mb-2">
                  {" "}
                  pg_officialstorevn{" "}
                </li>
                <p className="text-sm font-semibold mb-1">
                  {" "}
                  Online 1 Giờ Trước{" "}
                </p>
                <div className="flex items-center mt-2">
                  <div className="flex items-center text-[#EE4D2D] bg-[#FF57221A] w-[120px] h-[35px] text-sm justify-center rounded-sm">
                    <span className="mt-1">
                      <i class="bx bx-conversation"></i>
                    </span>
                    <li className="ml-2"> Chat Ngay </li>
                  </div>
                  <div className="flex items-center ml-[10px] text-[#555555] bg-[#FFFFFF] text-sm">
                    <span className="mt-1">
                      <i class="bx bx-store-alt"></i>
                    </span>
                    <li className="ml-2"> Xem Shop </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-x-8 gap-y-3 absolute top-[1040px] left-[870px] w-[520px] lg:opacity-100 lg:visible opacity-0 invisible">
              <FormGroup>
                <li className="w-[60px] h-[20px] text-black text-sm font-normal">
                  {" "}
                  Đánh Giá{" "}
                </li>
                <li className="w-[15px] h-[18px] text-[#EE4D2D] text-sm font-normal">
                  {product.star}
                </li>
              </FormGroup>
              <FormGroup>
                <li className="text-black font-normal text-sm">
                  {" "}
                  Tỉ Lệ Phản Hồi{" "}
                </li>
                <li className="text-[#EE4D2D] text-sm"> 100% </li>
              </FormGroup>
              <FormGroup>
                <li className="text-black font-normal text-sm"> Tham Gia </li>
                <li className="text-[#EE4D2D] text-sm"> 4 năm trước </li>
              </FormGroup>
              <FormGroup>
                <li className="text-black font-normaltext-sm"> Sản Phẩm </li>
                <li className="text-[#EE4D2D] text-sm">{product.shopping}</li>
              </FormGroup>
              <FormGroup>
                <li className="text-black font-normal text-sm">
                  {" "}
                  Thời Gian Phản Hồi{" "}
                </li>
                <li className="text-[#EE4D2D] text-sm"> trong vài giờ </li>
              </FormGroup>
              <FormGroup>
                <li className="text-black font-normal text-sm">
                  {" "}
                  Người Theo Dõi{" "}
                </li>
                <li className="text-[#EE4D2D] text-sm"> 381,1k </li>
              </FormGroup>
            </div>
          </div>
          <div className="bg-white mt-[30px] lg:w-[1380px] h-[410px] lg:ml-[270px] w-[370px]">
            <div className="lg:ml-[30px]">
              <h2 className="w-[903px] h-[49px] text-[#000000DE] text-[18px] bg-[#00000005] p-3 font-bold rounded-md">
                {" "}
                CHI TIẾT SẢN PHẨM{" "}
              </h2>
              <div className="flex items-center ml-[30px]">
                <li className="w-[120px] h-[17px] text-[#00000066] text-[14px] font-bold">
                  {" "}
                  Danh Mục{" "}
                </li>
                <li className="flex items-center font-normal lg:-translate-x-0 -translate-x-6">
                  <p className="w-[48px] h-[17px] text-[#0055AA] lg:text-[14px] text-xs">
                    {" "}
                    Shopee{" "}
                  </p>
                  <p className="ml-[5px] mt-2">
                    <i class="bx bx-chevron-right"></i>
                  </p>
                  <p className="w-[74px] h-[17px] text-[#000000CC] lg:text-[14px] ml-[6px] text-[12px]">
                    {" "}
                    Flash Sale{" "}
                  </p>
                  <p className="ml-[5px] mt-2">
                    <i class="bx bx-chevron-right"></i>
                  </p>
                  <p className="w-[74px] h-[17px] text-[#000000CC] lg:text-[14px] lg:ml-[10px] ml-1 text-xs">
                    {" "}
                    Mỹ Phẩm{" "}
                  </p>
                </li>
              </div>
              <div className="flex items-center ml-[30px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px] font-bold">
                  {" "}
                  Thương hiệu{" "}
                </li>
                <li className="w-[174px] h-[17px] text-[#000000CC] text-[14px] font-normal">
                  {" "}
                  {product.avatarname}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px] font-bold">
                  {" "}
                  Dung lượng{" "}
                </li>
                <li className="w-[74px] h-[17px] text-[#000000CC] text-[14px] font-normal">
                  {" "}
                  {product.starstar}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px] font-bold">
                  {" "}
                  Thành phố{" "}
                </li>
                <li className="w-[74px] h-[17px] text-[#000000CC] text-[14px] font-normal">
                  {" "}
                  {product.country}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[160px] h-[17px] text-[#00000066] text-[14px] font-bold">
                  {" "}
                  Số sản phẩm còn lại{" "}
                </li>
                <li className="w-[74px] h-[17px] text-[#000000CC] text-[14px] font-normal">
                  {" "}
                  {product.count}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px] font-bold">
                  {" "}
                  Gửi từ{" "}
                </li>
                <li className="w-[134px] h-[17px] text-[#000000CC] text-[14px] font-normal">
                  {" "}
                  {product.country}{" "}
                </li>
              </div>
            </div>
            <div className="mt-[30px] lg:ml-[30px]">
              <h2 className="w-[863px] h-[50px] text-[#000000DE] text-[18px] bg-[#00000005] p-3 font-bold rounded-md">
                {" "}
                MÔ TẢ SẢN PHẨM{" "}
              </h2>
              <li className="text-[#000000CC] text-[14px] lg:ml-[20px] px-6 py-2">
                {" "}
                {product.description}{" "}
              </li>
            </div>
          </div>
          <div className="bg-white mt-[30px] w-[1380px] h-[410px] ml-[270px] lg:opacity-100 lg:visible opacity-0 invisible">
            <h2 className="w-[903px] h-[50px] text-[#000000DE] text-[18px] bg-[#00000005] p-3 font-bold ml-[30px] rounded-md">
              {" "}
              ĐÁNH GIÁ SẢN PHẨM{" "}
            </h2>
            <div>
              <div className="ml-[150px]">
                <li>
                  {" "}
                  <b className="w-[41px] h-[34px] text-[#D0011B] text-[30px]">
                    {product.starstar}
                  </b>
                  <b className="ml-[6px] text-[20px]">trên 5</b>
                </li>
                <li className="text-[20px] text-orange-400">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </li>
              </div>
              <div className="flex items-center flex-wrap w-[1100px] absolute top-[1680px] left-[730px] gap-x-4 gap-y-4">
                <li className="w-[100px] h-[32px] text-[14px] border border-green-500 bg-green-500 text-white rounded-md flex items-center justify-center cursor-pointer">
                  {" "}
                  Tất cả{" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF] cursor-pointer">
                  8 5 Sao (9k){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF] cursor-pointer">
                  {" "}
                  4 Sao (201){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF] cursor-pointer">
                  {" "}
                  3 Sao (71){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF] cursor-pointer">
                  {" "}
                  2 Sao (37){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF] cursor-pointer">
                  {" "}
                  1 Sao (62){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF] cursor-pointer">
                  {" "}
                  Có Bình Luận (4,2k){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF] cursor-pointer">
                  {" "}
                  Có Hình Ảnh / Video (3,8k){" "}
                </li>
              </div>
            </div>
            <div className="mt-[60px] ml-[60px] flex items-center mb-10">
              <div className="absolute top-[1800px]">
                <img
                  src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/09/Good-Evening-hd-wallpapers.jpg"
                  alt={product.name}
                  className="w-[40px] h-[40px] object-cover"
                />
              </div>
              <div className="ml-[60px]">
                <p className="w-[87px] h-[12px] text-[#000000DE] text-[12px]">
                  {product.name01}
                </p>
                <li className="text-[14px] text-orange-400">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </li>
                <li className="w-[833px] h-[14px] text-[#0000008A] text-[12px]">
                  {" "}
                  {product.date01}{" "}
                </li>
                <li className="w-[833px] h-[60px] text-[#000000DE] text-[14px]">
                  {" "}
                  {product.description01}{" "}
                </li>
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.BQBOloiwj9Bry1jsGIzOXgHaEK&pid=Api&P=0"
                    alt=""
                    className="w-[100px] h-[100px] object-cover rounded-md"
                  />
                  <img
                    src="https://mtrend.vn/wp-content/uploads/2016/08/hinh-anh-song-nui-thien-nhien-8.jpg"
                    alt=""
                    className="w-[100px] h-[100px] object-cover rounded-md"
                  />
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.BQBOloiwj9Bry1jsGIzOXgHaEK&pid=Api&P=0"
                    alt=""
                    className="w-[100px] h-[100px] object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="flex items-center gap-x-3 border-t-2 border-t-gray-500 justify-end px-6 py-4 lg:opacity-100 lg:visible opacity-0 invisible">
              <span className="cursor-pointer text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
              <span className="w-[20px] h-[20px] border border-green-500 bg-violet-500 text-white flex items-center justify-center rounded-sm cursor-pointer">
                {" "}
                1{" "}
              </span>
              <span className="cursor-pointer"> 2 </span>
              <span className="cursor-pointer"> 3 </span>
              <span className="cursor-pointer"> 4 </span>
              <span className="cursor-pointer"> 5 </span>
              <span className="cursor-pointer"> ... </span>
              <span className="cursor-pointer text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* Product different */}
          <div className="w-[1380px] flex items-center justify-center mx-auto mt-[300px] bg-[#FFFFFF] lg:opacity-100 lg:visible opacity-0 invisible">
            <h2 className="absolute top-[2200px] left-[290px] text-lg text-[#000000DE] font-bold">
              {" "}
              Các sản phẩm khác từ Shopee{" "}
            </h2>
            <ProductXtra />
          </div>
          {/* <FooterTwoDetail /> */}
          <Footer className="mt-[-2000px]" />
        </div>
      </>
    );
  };
  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default FlashSaleDetails;
