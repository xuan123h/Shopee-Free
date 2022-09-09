import React from "react";

const FooterSize = ({ children, className = "top-[5780px] right-[260px]" }) => {
  return <div className={`absolute ${className}`}>{children}</div>;
};

export default FooterSize;
