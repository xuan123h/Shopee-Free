import React from "react";
import FooterTwo from "./FooterTwo";
import FooterOne from "./FooterOne";
const Footer = ({ className = "mt-[-120px]" }) => {
  return (
    <>
      <div
        className={`bg-white mx-auto lg:mt-[370px] h-[1499px] border-4 border-t-red-700 list-none ${className}`}
      >
        <FooterOne />
      </div>
      <div>
        <FooterTwo />
      </div>
    </>
  );
};

export default Footer;
