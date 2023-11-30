import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "../../Components/SharedCss/SharedCss.module.css";
import Container from "../UI/SectionContainer/SectionContainer";
import { categoryThreeContent } from "./categoryThreeContent";
import CategoryUI from "../UI/SectionContainer/CategoryUI";
import { useSelector } from "react-redux";

const CategoryThree = () => {
  const categoryThreeData = useSelector((state) => state.categoryThreeSlice);
  return (
    <CategoryUI
      className={`mt-44`}
      CategoryUIData={categoryThreeData}
      categoryNumber="CategoryThree"
      path="/products"
    />
  );
};

export default CategoryThree;
