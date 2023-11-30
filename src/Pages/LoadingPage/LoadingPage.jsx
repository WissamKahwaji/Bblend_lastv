import React from "react";
import { useSelector } from "react-redux";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import styles from "../../Components/SharedCss/SharedCss.module.css";
import classes from "./LoadingPage.module.css";
const LoadingPage = () => {
  const logoData = useSelector((state) => state.logoSlice);
  const brandingData = useSelector((state) => state.brandingSlice);
  const colorsData = useSelector((state) => state.colorsSlice);


  const logoStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  return (
    <PageContainer className={`flex items-center justify-center`}>
      <div className={`flex items-center`}>
        <h1 className={`text-4xl mx-1 ${styles["play-font"]}`}>
          {brandingData.BrandName}
        </h1>
        <img
          src={logoData.logoData}
          alt={brandingData.BrandName}
          style={logoStyle}
          className={`w-10 rounded-full ${classes.loaderAnimation}`}
        />
      </div>
    </PageContainer>
  );
};

export default LoadingPage;
