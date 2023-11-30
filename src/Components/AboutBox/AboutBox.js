import React from "react";
import SectionContainer from "../UI/SectionContainer/SectionContainer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const AboutBox = ({ src, alt, title, text, orderImg, orderText, isRTL }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const titleStyles = {
    color: colorsData.navLinksColor,
  };
  const sectionContainerStyles = {
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  };
  const { t } = useTranslation();
  return (
    <SectionContainer
      styles={sectionContainerStyles}
      className={`flex items-center w-full md:w-[60%] mx-auto ${
        isRTL ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"
      } mb-12 rounded-lg !px-0 !py-0`}
    >
      <div className={`w-full md:w-1/2`}>
        <img src={src} alt={alt} className={`w-full h-full rounded-lg`} />
      </div>
      <div className={`w-full md:w-1/2 p-2  ${orderText}`}>
        <h3
          style={titleStyles}
          className={`text-center mb-4 text-2xl font-bold`}
        >
          {t(title)}
        </h3>
        <p>{t(text)}</p>
      </div>
    </SectionContainer>
  );
};

export default AboutBox;
