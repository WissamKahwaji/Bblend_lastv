import React from "react";

const InputRHF = ({
  inputTitle,
  inputName,
  inputType,
  required,
  placeholder,
  accept,
  register,
}) => {
  return (
    <div className={`flex flex-col mb-4`}>
      <label className={`text-xl mb-2 `}>{inputTitle} :</label>

      {inputType === "file" ? (
        <input
          required={required ? true : false}
          name={inputName}
          {...register(inputName, {
            required: required ?? false,
          })}
          type={inputType}
          accept={accept}
          placeholder={placeholder}
          className={`p-1 border w-60 rounded-lg outline-none mt-2`}
          // value={value}
          // onChange={onChange}
          // defaultValue={defaultValue}
        />
      ) : (
        <input
          required={required ? true : false}
          name={inputName}
          {...register(inputName, {
            required: required ?? false,
          })}
          type={inputType}
          placeholder={placeholder}
          className={`p-1 border w-60 rounded-lg outline-none mt-2`}
          // value={value}
          // onChange={onChange}
          // defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

export default InputRHF;
