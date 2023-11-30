import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const PageHeading = ({ pageHeadingTitle }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const { t } = useTranslation();
  return (
    <h2
      style={{ color: colorsData.mainColor }}
      className={`text-4xl font-semibold text-center my-3  md:mb-4  `}
    >
      {t(pageHeadingTitle)}
    </h2>
  );
};

export default PageHeading;
