import React from "react";
import SectionContainer from "../UI/SectionContainer/SectionContainer";
import { useSelector } from "react-redux";

const CartInfo = ({ cartLength, totalPrice }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const cartInfoStyles = {
    borderColor: colorsData.mainColor,
  };
  return (
    <SectionContainer
      style={cartInfoStyles}
      className={`border mb-2 rounded-2xl`}
    >
      <div className={`mb-2 flex items-center justify-between`}>
        <span>Number Of Items :</span>
        <span>{cartLength}</span>
      </div>
      <div className={`flex items-center justify-between`}>
        <span>Total Price :</span>
        <span>{totalPrice}</span>
      </div>
    </SectionContainer>
  );
};

export default CartInfo;
