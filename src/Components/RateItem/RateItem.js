import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const RateItem = () => {
  const colorsData = useSelector((state) => state.colorsSlice);

  const ratingItemsStyle = {
    border: `1px solid ${colorsData.mainColor}`,
    direction: "ltr",
  };
  return (
    <div
      style={ratingItemsStyle}
      className={`w-full md:w-[60%] mx-auto flex items-center justify-between my-8 px-4 py-2 rounded-xl`}
    >
      <div className={`flex items-center`}>
        <h4
          className={`mr-2 w-10 h-10 rounded-full border border-black flex items-center justify-center`}
        >
          S
        </h4>
        <h3>Sii Media</h3>
      </div>
      <div>
        <p className={`text-lg font-semibold`}>
          It Was An Amazing Experience, Recommended
        </p>
      </div>
      <div>
        <Rating name="size-small" value={4} size="medium" readOnly />
      </div>
    </div>
  );
};

export default RateItem;
