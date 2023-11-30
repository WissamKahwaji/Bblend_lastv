import React from "react";
import { useSelector } from "react-redux";

const Input = ({ input, id, label, example }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const inputStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  return (
    <div className={`flex flex-col`}>
      <label htmlFor={id} className={`mb-2`}>
        {label}
      </label>
      <input
        id={id}
        {...input}
        className={`outline-none rounded-md p-1`}
        style={inputStyle}
      />
      <span className={`text-gray-400 mt-2 text-xs`}>{example}</span>
    </div>
  );
};

export default Input;
