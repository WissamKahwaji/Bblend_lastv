import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const GoUp = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const arrowStyles = {
    color: colorsData.mainColor,
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optionally, add smooth scrolling behavior
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-4 z-50 text-5xl cursor-pointer`}
      onClick={scrollToTop}
    >
      <BsFillArrowUpCircleFill className={`opacity-50 hover:opacity-100 duration-200`} style={arrowStyles} />
    </div>
  );
};

export default GoUp;
