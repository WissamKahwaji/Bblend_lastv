import React from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin2Line } from "react-icons/ri";
import { cartActions } from "../../Store/cartSlice";

import "react-toastify/dist/ReactToastify.css";
const CartItem = ({
  id,
  path,
  src,
  alt,
  itemTitle,
  price,
  quantity,
  size,
  notifyTheUser,
}) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const cartItemStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  const textStyle = {
    color: colorsData.mainColor,
  };
  const dispatch = useDispatch();
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart({ id: id, size: size }));
    notifyTheUser();
  };
  const increaseQuantityHandler = () => {
    const newCartEntryObject = {
      id: id,
      title: itemTitle,
      price: +price,
      quantity: 1,
      size: size,
      img: src,
    };
    dispatch(cartActions.addToCart({ ...newCartEntryObject }));
  };
  const decreaseQuantityHandler = () => {
    const newCartEntryObject = {
      id: id,
      size: size,
    };
    dispatch(cartActions.decreaseQuantity({ ...newCartEntryObject }));
  };
  return (
    <div
      style={cartItemStyle}
      className={`flex items-center justify-between flex-col md:flex-row mb-4 p-2 rounded-xl w-full md:w-[70%] mx-auto`}
    >
      <div>
        <img src={src} alt={alt} className={`w-32 rounded-xl`} />
      </div>
      <div className={`flex flex-col items-center  mt-4 md:mt-0`}>
        <h3 style={textStyle} className={`text-lg  md:text-2xl  font-semibold`}>
          {itemTitle}
          <span> ({size})</span>
        </h3>
        <div style={textStyle} className={`flex items-center`}>
          <span className={`text-2xl font-medium`}>{price} AED</span>{" "}
          <CgMathPlus className={`rotate-45 mt-1`} />{" "}
          <span className={`text-2xl font-medium`}>{quantity}</span>
        </div>
      </div>
      <div
        style={textStyle}
        className={`flex items-center text-3xl mt-4 md:mt-0`}
      >
        <CgMathPlus
          onClick={increaseQuantityHandler}
          className={`mr-2 p-1 rounded-full border  cursor-pointer`}
        />
        <span>{quantity}</span>
        <CgMathMinus
          onClick={decreaseQuantityHandler}
          className={`ml-2 p-1 rounded-full border cursor-pointer`}
        />
        <RiDeleteBin2Line
          onClick={removeFromCartHandler}
          className={`ml-8  text-red-500 rounded-full text-4xl p-1 cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default CartItem;
