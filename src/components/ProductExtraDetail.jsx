import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Header from "./Header";
import NavbarShopeeMall from "./NavbarShopeeMall";
import { addCart } from "../redux/actions";

const ProductExtraDetail = () => {
  // handle Cart
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
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
    return <>Loading ...</>;
  };
  const ShowProduct = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    return (
      <div>
        <div className="h-[121px] bg-[#d0011b]">
          <Header />
          <NavbarShopeeMall />
        </div>
        <div className="flex items-center ml-[270px] bg-white mt-[30px] w-[1380px] h-[650px]">
          <div className="">
            <img
              src={product.image}
              alt={product.name}
              className="w-[450px] h-[450px] absolute top-[180px] ml-[20px]"
            />
            <div className="w-[400px] mt-[200px] absolute ml-[30px]">
              
            </div>
          </div>
          <div className="absolute top-[180px] left-[800px]">
            <h2 className="w-[832px] h-[46px] text-[#000000CC] text-[20px] font-bold">
              {" "}
              {product.name}{" "}
            </h2>
            <div className="flex items-center mt-8 absolute">
              <span className="w-[90px] h-[36px] text-[#EE4D2D] text-[30px] ">
                {" "}
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price01)}{" "}
              </span>
              <span className="line-through w-[57px] h-[20px] text-[#929292] text-[18px] ml-[45px] mt-1">
                {" "}
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price02)}{" "}
              </span>
            </div>
            <div className="flex items-center mt-[100px] font-semibold list-none absolute ">
              <h4 className="w-[180px] h-[34px] text-[#757575] text-[16px] mt-[10px]">
                {" "}
                Mã Giảm Giá Của Shop{" "}
              </h4>
              <li className="ml-[10px]">{product.promotion01}</li>
              <li className="ml-[10px]">{product.promotion02}</li>
              <li className="ml-[10px]">{product.promotion03}</li>
              <li className="ml-[10px]">{product.promotion04}</li>
            </div>
            <p className="text-[#000000CC] text-[14px] w-[800px] absolute mt-[180px] font-medium">
              {" "}
              {product.description}{" "}
            </p>
            <div className="flex items-center absolute mt-[300px] ml-[40px]">
              <button className="add" onClick={() => addProduct(product)}>
                <span onClick={notify}>Thêm vào giỏ hàng</span>
              </button>
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
              <button className="addcart ml-6"> Mua hàng </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default ProductExtraDetail;
