import React from "react";

const Input = ({
  inputTitle,
  inputName,
  inputType,
  required,
  placeholder,
  value,
  onChange,
  defaultValue,
}) => {
  return (
    <div className={`flex flex-col mb-4`}>
      <label className={`text-xl mb-2 `}>{inputTitle} :</label>
      <input
        required={required ? true : false}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        className={`p-1 border w-60 rounded-lg outline-none mt-2`}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
