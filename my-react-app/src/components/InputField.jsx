import React from 'react';
import "../css/index.css";

const InputField = ({ type = "text", placeholder, value, onChange,style }) => {
    return (
        <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input-field ${style}`} 
    /> 
    );
};



export default InputField;