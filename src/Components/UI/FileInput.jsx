import React, { useState } from "react";

const FileInput = ({ label, imgSrc, name, required, setValue }) => {
  const [_imgSrc, setimgSrc] = useState("");
  const handleUploadImage = (e) => {
    if (e.target && e.target.files[0]) setValue(name, e.target.files[0]);
    setimgSrc(URL.createObjectURL(e.target.files[0]));
  };
  console.log(imgSrc || imgSrc || "");
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="file">{label}</label>
      <input
        id="file"
        type="file"
        required={required}
        onChange={handleUploadImage}
        accept="image/*"
      />
      <img className="w-40 h-40" src={_imgSrc || imgSrc || ""} alt="" />
    </div>
  );
};

export default FileInput;
