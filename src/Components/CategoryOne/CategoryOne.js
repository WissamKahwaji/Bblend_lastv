import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CategoryUI from "../UI/SectionContainer/CategoryUI";
const CategoryOne = () => {
  const { t } = useTranslation();
  const categoryOneData = useSelector((state) => state.categoryOneSlice);
  console.log(categoryOneData, "categoryOneData");
  return (
    <CategoryUI
      CategoryUIData={categoryOneData}
      categoryNumber="CategoryOne"
      path="/products"
    />
  );
};

export default CategoryOne;
