import React, { useEffect, useState } from "react";
import SectionContainer from "../UI/SectionContainer/SectionContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CarouselComponent from "../UI/CarouselComponent/CarouselComponent";
import SingleProductCard from "../UI/SingleProductCard/SingleProductCard";
import styles from "../SharedCss/SharedCss.module.css";
const Offers = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const offerItemStyle = {
    border: `1px solid ${colorsData.mainColor}`,
    color: colorsData.mainColor,
  };
  const { t } = useTranslation();
  // const { products } = useSelector((state) => state.categoryThreeSlice);
  const offersData = useSelector((state) => state.offersSlice);

  const [isCarousel, setIsCarousel] = useState(false);
  const items = offersData.map((ele) => (
    <SingleProductCard
      isDiscount={true}
      discountPercentage={ele.percentage}
      className="mx-1"
      id={ele.id}
      path={`/extra_1/${ele.id}`}
      src={ele.img}
      alt={ele.title}
      title={
        ele.titleAr
          ? window.localStorage.getItem("language") === "en"
            ? ele.title
            : ele.titleAr
          : t(ele.title)
      }
      price={ele.deepDetails.first.price}
      desc={
        ele.descAR
          ? window.localStorage.getItem("language") === "en"
            ? ele.desc
            : ele.descAR
          : t(ele.desc)
      }
    />
  ));
  useEffect(() => {
    if (offersData.length <= 3) {
      setIsCarousel(false);
    } else {
      setIsCarousel(true);
    }
  }, [offersData.length]);

  return (
    <SectionContainer>
      <div className={`flex justify-between items-center mb-4`}>
        <h2 className={`text-sm md:text-4xl font-bold ${styles["play-font"]}`}>
          {t("Discounts")}
        </h2>
        <Link className="text-xl font-semibold" to="/extra_1">
          {t("Check All")}
        </Link>
      </div>
      {!isCarousel && (
        <ul
          className={`grid lg:grid-cols-3  grid-cols-2 justify-center gap-1 items-center`}
        >
          {offersData.map((ele, i) => (
            <li key={i}>
              <SingleProductCard
                isDiscount={true}
                discountPercentage={ele.percentage}
                className="mx-1"
                id={ele._id}
                path={`/extra_1/${ele._id}`}
                src={ele.img}
                alt={ele.title}
                title={
                  ele.titleAr
                    ? window.localStorage.getItem("language") === "en"
                      ? ele.title
                      : ele.titleAr
                    : t(ele.title)
                }
                price={ele.deepDetails.first.price}
                desc={
                  ele.descAR
                    ? window.localStorage.getItem("language") === "en"
                      ? ele.desc
                      : ele.descAR
                    : t(ele.desc)
                }
              />
            </li>
          ))}
        </ul>
      )}
      {isCarousel && <CarouselComponent items={items} />}
    </SectionContainer>
  );
};

export default Offers;
