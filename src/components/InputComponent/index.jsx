import "./styles.css";
import React from "react";

const InputComponent = ({ label, type, className, value, handleChange }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={value}
        className={className}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputComponent;
