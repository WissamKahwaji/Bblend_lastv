import React from "react";
import category from "../../Assets/Category/Category.jpg";
import styles from "../SharedCss/SharedCss.module.css";
import { middleContent } from "./middleContent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const MiddleSection = () => {
  const middleData = useSelector((state) => state.middleSlice);
  const { t } = useTranslation();
  const componentDirection = "ltr"; // Set the desired direction here

  return (
    <div
      style={{ direction: componentDirection }}
      className={`relative mt-16 w-[80%] mx-auto lg:h-[75vh] md:mb-44 lg:mb-0`}
    >
      <div className={`lg:h-full lg:w-full relative`}>
        <img
          src={middleData.img}
          alt={middleData.title}
          className={`lg:h-full lg:w-[40%] rounded-md`}
        />
        <span
          className={`absolute h-full w-full lg:w-[40%]  bg-[#F0E2E1] -left-4 -top-4  -z-10 rounded-md`}
        ></span>
      </div>
      <div
        className={`p-8 lg:flex flex-col shadow-[5px_5px_10px_0px_#00000024] absolute  w-full lg:w-[60%] bg-white rounded-md lg:top-1/2 lg:-translate-y-1/2 lg:left-80 left-6 -bottom-40 lg:bottom-0`}
      >
        <h4 className={`mb-8 text-2xl ${styles["play-font"]}`}>
          {t(middleData.title)}
        </h4>
        <p className={`mb-4`}>{t(middleData.description)}</p>
        <Link
          to="/Contact_Us"
          className={`self-center px-4 py-1 border border-black rounded-md duration-200 hover:text-white hover:bg-black`}
        >
          {t("Discover More")}
        </Link>
      </div>
    </div>
  );
};

export default MiddleSection;
