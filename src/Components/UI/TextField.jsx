import React from "react";

const TextField = ({ label, name, type, register, required }) => {
  console.log(register);
  return (
    <div className={`flex flex-col mb-4`}>
      <label className={`text-xl mb-2 `}>{label} :</label>
      <input
        className="border p-2"
        type={type}
        {...register(name, { required })}
      />
    </div>
  );
};

export default TextField;
