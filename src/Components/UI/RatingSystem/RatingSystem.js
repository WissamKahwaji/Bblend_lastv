import { Rating } from "@mui/material";
import React, { useState } from "react";
import Input from "../Input/Input";

const RatingSystem = () => {
  const [value, setValue] = useState(0); // Set the default value here

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };
  const componentDirection = "ltr"; // Set the desired direction here

  return (
    <div
      style={{ direction: componentDirection }}
      className={`flex items-center flex-col mt-4`}
    >
      <label className={`text-lg font-semibold text-c`}>Rate Our Product</label>
      <Rating
        name="size-small"
        value={value} // Controlled value
        size="large"
        onChange={handleRatingChange} // Handle value changes
      />
      <Input label="Write Your Feedback" />
      <button className={`px-2 py-1`}>{"Submit"}</button>
    </div>
  );
};

export default RatingSystem;
