import React from "react";
import { useState, useEffect } from "react";
import Container from "../SectionContainer/SectionContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../../../Components/SharedCss/SharedCss.module.css";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const CategoryUI = ({ CategoryUIData, path, categoryNumber, className }) => {
  const { t } = useTranslation();
  const windowWidth = useWindowWidth();
  const breakpoint = 1020;
  const items = CategoryUIData.products;

  // Slice the array based on the window width and the breakpoint
  const slicedItems =
    windowWidth > breakpoint ? items.slice(0, 3) : items.slice(0, 2);
  return (
    <Container className={`mt-4 md:mt-16 ${className}`}>
      <div className={`flex justify-between items-center mb-4`}>
        <h2 className={`text-sm md:text-4xl font-bold ${styles["play-font"]}`}>
          {t(CategoryUIData.title)}
        </h2>
        <Link className="text-xl font-semibold" to={path}>
          {t("Check All")}
        </Link>
      </div>
      <ul
        className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-0 items-center   `}
      >
        {slicedItems.map((ele, i) => (
          <li className="mx-auto" key={i}>
            <SingleProductCard
              id={ele.id}
              path={`/${categoryNumber}/${ele.id}`}
              src={ele.img}
              alt={ele.title}
              title={ele.title}
              price={ele.deepDetails.first.price}
              size={ele.deepDetails.first.size}
              desc={ele.desc}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CategoryUI;
