import React from "react";
import Container from "../UI/SectionContainer/SectionContainer";
import styles from "../../Components/SharedCss/SharedCss.module.css";
import { useSelector } from "react-redux";

const Collections = () => {
  const logoData = useSelector((state) => state.logoSlice);
  const collectionsData = useSelector((state) => state.collectionsSlice);
  return (
    <Container className={`block`}>
      {collectionsData.length > 0 && (
        <div className={` grid  md:grid-cols-2    w-full h-auto md:h-[419px] gap-2  md:mb-20 `}>
          <div className={`relative h-[302px] md:h-[419px] col-span-1  `}>
            <img
              className={`h-full w-full object-cover bg-white`}
              src={collectionsData[0].img}
              alt={collectionsData[0].description}
            />
            <p
              className={`absolute w-full bottom-0  py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
            >
              {collectionsData[0].description}
            </p>
          </div>
          <div
            className={`grid grid-rows-2 grid-cols-2   col-span-1 gap-3 h-[302px] md:h-[419px]    `}
          >
            <div
              className={`grid grid-cols-2  grid-rows-2 col-span-2   gap-x-2  `}
            >
              <div className={` relative row-span-2 col-span-1    `}>
                <img
                  className={`w-full h-full object-cover bg-white`}
                  src={collectionsData[1].img}
                  alt={collectionsData[1].description}
                />
                <p
                  className={`absolute w-full bottom-0 py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
                >
                  {collectionsData[1].description}
                </p>
              </div>
              <div className={` relative row-span-2 col-span-1 `}>
                <img
                  className={`w-full  h-full object-cover bg-white`}
                  src={collectionsData[2].img}
                  alt={collectionsData[2].description}
                />
                <p
                  className={`absolute w-full bottom-0  py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
                >
                  {collectionsData[2].description}
                </p>
              </div>
            </div>
            <div className={`relative row-span-1 col-span-2   `}>
              <img
                className={`w-full  h-full object-cover bg-white`}
                src={collectionsData[3].img}
                alt={collectionsData[3].description}
              />
              <p
                className={`absolute w-full bottom-0  py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
              >
                {collectionsData[3].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Collections;
