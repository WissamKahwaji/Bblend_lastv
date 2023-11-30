import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function SizeSelector({ deepDetails, selectedSize, onSelectSize }) {
  // Function to translate the size unit
  const translateUnit = (size) => {
    const parts = size.split(" "); // Split the size into parts
    const number = parts[0]; // Get the number part
    const unit = parts.slice(1).join(" "); // Join the remaining parts as the unit
    const translatedUnit = t(unit); // Translate the unit part
    return `${number} ${translatedUnit}`; // Combine number and translated unit
  };
  // Extract the sizes from deepDetails
  const sizes = deepDetails
    .map((item) => item.size)
    .filter((ele) => ele !== "");
  
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const inputsStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  return (
    <>
      <div className={`my-2 `}>
        <label htmlFor="size" className={`mx-2`}>
          {t("Options")} :
        </label>
        <select
          id="size"
          value={selectedSize || sizes[0]} // Set the default selected size to the first size in the array
          onChange={(e) => onSelectSize(e.target.value)}
          style={inputsStyle}
          className={`outline-none px-3 py-1 rounded-md`}
        >
          {sizes.map((size, index) => (
            <option key={index} value={size}>
              {translateUnit(size)}
            </option>
          ))}
        </select>
      </div>
      {/*  */}
    </>
  );
  // !
}

export default SizeSelector;
