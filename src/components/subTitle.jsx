import React from "react";

const SubTitle = ({ text, className }) => {
  return (
    <div>
      <p className={`qip-subtitle ${className}`}>{text}</p>
    </div>
  );
};

export default SubTitle;
