import React from "react";
import { useSelector } from "react-redux";
const WhyBox = ({ src, alt, title, text }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const boxStyles = {
    borderColor: colorsData.mainColor,
  };
  const titleStyles = {
    color: colorsData.navLinksColor,
  };
  return (
    <div
      style={boxStyles}
      className={`border-2 p-2 rounded-xl  scale-90 duration-500 hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.4)] hover:scale-100 `}
    >
      <div className={`w-full`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover rounded-lg`}
        />
      </div>
    </div>
  );
};

export default WhyBox;
