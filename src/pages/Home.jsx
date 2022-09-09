import React, { useState } from "react";
import ArrowTopScrollWeb from "../components/ArrowScrollTop";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageInformation from "../components/ImageInformation";
import ImageOne from "../components/ImageOne";
import Navbar from "../components/Navbar";
import ProductTab from "../components/ProductTab";
import SliderOne from "../components/Slider";
import CategoryFeatures from "../features/CategoryFeatures";
import InformationFeatures from "../features/InformationFeatures";
import SearchImportantFeatures from "../features/SearchImportantFeatures";
import ShopeeMallFeatures from "../features/ShopeeMallFeatures";
import TrendSearchFeatures from "../features/TrendSearchFeatures";
import ReactModal from "react-modal";
import ImageTwo from "../components/ImageTwo";
import MessageBox from "../components/MessageBox";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="fixed z-20 bg-red-500 lg:w-full w-[374px]">
        <ReactModal
          isOpen={modalOpen}
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
          className="modal-content w-full max-w-[512px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
        >
          <button
            className="absolute right-8 top-6 cursor-pointer"
            onClick={handleCloseModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src="https://cf.shopee.vn/file/081f7bab1eae80fc4b88bdce325ddf23"
            alt="banner"
          />
        </ReactModal>
        <Header />
        <Navbar />
      </div>
      <div className="lg:h-[440px] bg-[#ffffff]">
        <div className="flex items-center absolute lg:top-[155px] lg:ml-[100px] ">
          <SliderOne />
          <ImageInformation />
          <ImageTwo />
        </div>
        <InformationFeatures />
      </div>
      <CategoryFeatures />
      <FlashSales />
      <ImageOne />
      <ShopeeMallFeatures />
      <TrendSearchFeatures />
      <SearchImportantFeatures />
      <ProductTab />
      <ArrowTopScrollWeb />
      <MessageBox />
      <Footer />
    </>
  );
};

export default Home;
