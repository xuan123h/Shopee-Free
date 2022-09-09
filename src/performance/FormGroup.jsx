import React from "react";

const FormGroup = ({ children, className }) => {
  return (
    <div className={`flex items-start gap-x-2 ${className}`}>{children}</div>
  );
};

export default FormGroup;
