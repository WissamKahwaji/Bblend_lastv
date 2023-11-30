import React from "react";
import { useSelector } from "react-redux";
import CategoryUI from "../UI/SectionContainer/CategoryUI";

const CategoryTwo = () => {
  const categoryTwoData = useSelector((state) => state.categoryTwoSlice);

  return (
    <CategoryUI
      CategoryUIData={categoryTwoData}
      categoryNumber="CategoryTwo"
      path="/products"
    />
  );
};

export default CategoryTwo;