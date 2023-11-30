import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../SharedCss/SharedCss.module.css";
const TheMessage = () => {
  const middleData = useSelector((state) => state.middleSlice);
  const { t } = useTranslation();
  return (
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
  );
};

export default TheMessage;
