import React from "react";
import { useTranslation } from "react-i18next";
import { Link, redirect, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../Store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCartPlus } from "react-icons/bs";
const SingleProductCard = ({
  id,
  path,
  src,
  alt,
  title,
  price,
  size,
  desc,
  className,
  imgClassName,
  isDiscount,
  discountPercentage,
  weight,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = () => {
    const newCartEntryObject = {
      id: id,
      title: title,
      price: price,
      desc: desc,
      quantity: 1,
      size: size,
      img: src,
      weight: weight,
    };
    dispatch(cartActions.addToCart({ ...newCartEntryObject }));

    toast("Your item has been added to your cart 🤩");
  };
  const colorsData = useSelector((state) => state.colorsSlice);
  const buttonStyle = {
    color: colorsData.mainColor,
    borderColor: colorsData.mainColor,
  };

  const logoData = useSelector((state) => state.logoSlice);

  return (
    <div className="  w-full overflow-hidden  sm:w-[230px]   lg:w-[255px] xl:w-[300px]  my-4  md:my-3">
      <Link to={path} className={`flex  flex-col  items-center ${className}`}>
        <div
          className={`  relative   h-[180px] w-[180px]   lg:w-[255px] lg:h-[255px]  xl:w-[300px] xl:h-[300px]   overflow-hidden`}
        >
          {isDiscount && (
            <span
              className={`absolute w-20 md:w-32  bg-red-600 -rotate-45 z-10  top-2 md:top-4  -left-7  text-[0.5rem] md:text-base text-center text-white`}
            >
              {discountPercentage}
            </span>
          )}
          <img
            src={src ? src : logoData}
            alt={alt}
            className={` w-full h-full bg-gray-300 overflow-hidden   ${imgClassName}`}
          />
        </div>
      </Link>
      <div
        className=" 
        bg-[#f6f6f6]
      md:bg-transparent
       w-[180px]   lg:w-[255px]   xl:w-[300px] mx-auto
      "
      >
        <div
          className={`flex  flex-col md:flex-row justify-between w-full overflow-hidden`}
        >
          <p
            className={`text-base font-light text-center  text-[1rem] whitespace-nowrap overflow-hidden text-ellipsis`}
          >
            {t(title)}
          </p>
          <button
            style={buttonStyle}
            className={`flex   px-1    md:w-[90%]  rounded-md mx-auto md:px-3   text-base md:text-xl border-2 border-solid  items-center justify-center md:hidden`}
            onClick={addToCartHandler}
          >
            {t("Add To Cart")}
          </button>
          <button
            style={buttonStyle}
            className={`hidden items-center justify-center md:flex`}
            onClick={addToCartHandler}
          >
            <BsCartPlus className={`text-lg md:text-2xl`} />
          </button>
        </div>
        <div className={`flex flex-col`}>
          <div
            className={`flex items-center  justify-center  md:justify-end   flex-wrap  `}
          >
            <p>
              <span className=" text-[0.9rem] font-normal">{t("AED")}</span>
              <span className={` text-[1.1rem] font-normal  `}>
                {Number.parseFloat(price).toFixed(2)}
              </span>
            </p>
          </div>
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
        theme="light"
      />
    </div>
  );
};

export default SingleProductCard;
