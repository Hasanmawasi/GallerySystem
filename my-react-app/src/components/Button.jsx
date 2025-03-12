import React from "react";
import "../css/index.css"
const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="submit-btn mt-3"
    >
      {label}
    </button>
  );
};

export default Button;
