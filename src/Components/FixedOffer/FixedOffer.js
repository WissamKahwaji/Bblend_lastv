import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const FixedOffer = () => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);

  const fixedOfferStyles = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  return (
    <div className={`mx-auto w-full md:w-[70%] my-4`}>
      <p style={fixedOfferStyles} className={`text-center px-4 py-2 rounded-lg text-xl font-semibold`}>
        {t(
          "We're offering a special deal for your initial purchase - a 15% discount"
        )}
      </p>
    </div>
  );
};

export default FixedOffer;
