import React from 'react';
import "../css/index.css";

const InputField = ({ type = "text", placeholder, value, onChange }) => {
    return (
        <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field mt-3"
    /> 
    );
};



export default InputField;