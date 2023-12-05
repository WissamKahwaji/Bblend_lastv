import React, { useEffect } from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import SectionContainer from "../../Components/UI/SectionContainer/SectionContainer";
import { useSelector } from "react-redux";
import CartItem from "../../Components/CartItem/CartItem";
import CartInfo from "../../Components/CartInfo/CartInfo";
import { ToastContainer, toast } from "react-toastify";
import useCalculateTotalPrice from "../../Hooks/useCalculateTotalPrice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { t } = useTranslation();
  const cartData = useSelector((state) => state.cartSlice);
  const totalPrice = useCalculateTotalPrice();
  useEffect(() => {
    const total = totalPrice();
    localStorage.setItem("cartTotalPrice", total);
  }, [cartData, totalPrice]);

  const notifyTheUser = () => {
    toast("Your selected item has been deleted 😥");
  };
  const colorsData = useSelector((state) => state.colorsSlice);
  const checkOutButtonStyle = {
    color: `${colorsData.mainColor}`,
    border: `1px solid ${colorsData.mainColor}`,
  };
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle="Your Cart" />
      <CartInfo cartLength={cartData.length} totalPrice={totalPrice()} />
      <SectionContainer className={`flex flex-col items-center justify-center`}>
        <ul className={`self-stretch`}>
          {cartData.map((ele, i) => (
            <CartItem
              notifyTheUser={notifyTheUser}
              id={ele.id}
              src={ele.img}
              alt={ele.title}
              itemTitle={ele.title}
              price={ele.price}
              size={ele.size}
              quantity={ele.quantity}
            />
          ))}
        </ul>
        {cartData.length > 0 && (
          <Link
            to="/checkOutForm"
            style={checkOutButtonStyle}
            className={`px-4 py-1 capitalize rounded-lg`}
          >
            {t("checkOut")}
          </Link>
        )}
      </SectionContainer>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </PageContainer>
  );
};

export default CartPage;
