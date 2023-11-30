import React from "react";
import landing from "../../Assets/Landing/landing.png";

import styles from "../../Components/SharedCss/SharedCss.module.css";
import FullWidthSlider from "../Swiper/FullWidthSlider";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Landing = () => {
  const brandingData = useSelector((state) => state.brandingSlice);
  
  const { t } = useTranslation();
  return (
    <div className={`relative`}>
      {/* <div className={`mt-[3rem] lg:mt-[7rem] mx-auto`}>
        <FullWidthSlider />
      </div> */}
      <div className={`mt-[6rem] lg:mt-[10rem] mx-auto`}>
        <img src='https://i.imgur.com/bU4I23w.png' alt="one img" className="  w-full h-full md:h-[650px] " />
      </div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center flex-col w-full`}
      >
        <h1
          className={`text-3xl lg:text-5xl font-bold mb-2 ${styles["play-font"]}`}
        >
          {t(brandingData.BrandName)}
        </h1>
        <p className={`text-xs lg:text-xl font-normal text-center mb-2`}>
          {t(brandingData.brandDescription)}
        </p>
        <Link
          to="/products"
          className={`px-2 py-1 text-md bg-white text-black hover:text-white hover:bg-black duration-200 rounded-sm`}
        >
          {t("Our Products")}
        </Link>
      </div>
    </div>
  );
};

export default Landing;
