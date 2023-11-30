import { useEffect } from "react";
import { useSelector } from "react-redux";

const useCalculateTotalPrice = () => {
  const cartData = useSelector((state) => state.cartSlice);

  const calculateTotalPrice = () => {
    return cartData.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return calculateTotalPrice;
};

export default useCalculateTotalPrice;
