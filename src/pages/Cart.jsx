import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { addCart, delCart } from "../redux/actions";

const Cart = () => {
  // handle Cart Shopee
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const emptyCart = () => {
    return (
      <>
        <div className="absolute top-[300px] left-[650px]">
          <h2 className="text-orange-600 text-[22px] ml-[30px]">
            {" "}
            Bạn chưa có sản phẩm nào trong giỏ hàng{" "}
          </h2>
          <button className="w-[400px] h-[60px] bg-red-400 text-white mt-[20px] rounded-lg ml-8">
            <Link to="/"> Quay về trang chủ </Link>
          </button>
        </div>
      </>
    );
  };
  const cartItems = (product) => {
    return (
      <div className="list-none h-[200px] flex items-center justify-center lg:mb-2 mb-20">
        <table className="lg:w-[1380px] h-[100%] mt-40 bg-white rounded-lg px-2 py-2 w-[370px]">
          <thead>
            <tr>
              <th className="float-left px-20 py-10"> Sản Phẩm </th>
              <th> Đơn Giá </th>
              <th> Số Lượng </th>
              <th> Số Tiền </th>
              <th> Thao Tác </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center px-10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="lg:w-[100px] lg:h-[100px] w-10 h-10 "
                  />
                  <h4 className="lg:w-[400px] lg:ml-8 ml-2 w-[100px]">
                    {" "}
                    {product.name}{" "}
                  </h4>
                </div>
              </td>
              <td>
                <span className="lg:ml-6 text-orange-400 font-bold ml-2">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01)}
                </span>
              </td>
              <td>
                <div className="ml-4">
                  <span
                    onClick={() => handleDel(product)}
                    className="cursor-pointer"
                  >
                    <i class="bx bx-minus"></i>
                  </span>
                  <span> {product.qty} </span>
                  <span
                    onClick={() => handleAdd(product)}
                    className="cursor-pointer"
                  >
                    <i class="bx bx-plus"></i>
                  </span>
                </div>
              </td>
              <td>
                <span className="ml-8 text-gray-400 font-bold">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01 * product.qty)}
                </span>
              </td>
              <td onClick={() => handleDel(product)} className="cursor-pointer">
                <span className="ml-6">Xóa</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  const checkout = () => {
    return (
      <>
        <div className="w-[200px] h-[50px] bg-orange-400 flex items-center justify-center lg:mt-[200px] mx-auto rounded-lg mt-[600px]">
          <button className="text-white">
            {" "}
            <Link to="/pay"> Đặt hàng</Link>{" "}
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        {state.length === 0 && emptyCart()}
        <div className="bg-red-500 lg:h-[600px] h-[200px]">
          <Header></Header>
          <Navbar></Navbar>
          {state.length !== 0 && state.map(cartItems)}
        </div>
        {state.length !== 0 && checkout()}
      </div>
    </>
  );
};

export default Cart;
