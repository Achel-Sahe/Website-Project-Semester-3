import React from "react";
const Button = ({ text, className }) => {
  return (
    <div>
      <a href="#qip" className="link">
        <button className={`button ${className}`}>{text} </button>
      </a>
    </div>
  );
};

export default Button;
