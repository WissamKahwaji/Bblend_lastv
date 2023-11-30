import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AfterPayment = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const styles = {
    color: colorsData.mainColor,
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.assign("/my_orders");
    }, 20000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const fieldToClear=["cartItems","cartTotalPrice","deliveryCost","finalTotalPrice"]
    fieldToClear.forEach(filed=>{
      localStorage.removeItem(filed)
    })
    toast("Your Order has been placed successfully🎉");
     }, []);
  return (
    <PageContainer className={` min-h-screen `}>
      <div className={` flex items-center justify-center flex-col`}>
        <h1 style={styles} className={`text-3xl font-semibold mb-2`}>
          A tip for you:
        </h1>
        <div
          className={`w-full text-center text-lg md:w-1/2  border border-black rounded-md p-2`}
        >
          Store all products in the refrigerator immediately upon receiving
          them, except for toner, oil, and scrub, which can be stored at room
          temperature: All products stored in the refrigerator are considered
          valid for three weeks to a month, depending on the refrigerator's
          temperature. To extend the product's shelf life, it can be divided
          into air-tight plastic bags and stored in the freezer, where it
          remains valid for up to 6 months.
        </div>
      </div>
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
        theme="dark"
      />
    </PageContainer>
  );
};

export default AfterPayment;
// export const afterPaymentLoader = async () => {};
