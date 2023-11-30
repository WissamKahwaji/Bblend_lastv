import React, { useCallback, useEffect, useRef } from "react";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BiArrowFromTop } from "react-icons/bi";
import { BiSolidArrowToTop } from "react-icons/bi";
import { useClampText } from "@yukimoto/use-clamp-text";
import ClampLines from "react-clamp-lines";
import { TECollapse } from "tw-elements-react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const TipItem = ({ data, index }) => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const colorStyle = {
    color: colorsData.mainColor,
    borderColor: colorsData.mainColor,
  };
  
  const formattedContent = t(data.tipContent).replace(
    /\d-/g,
    (match) => `<br><br/> ${match}`
  );
  const tipItemStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };

  const {
    longEnoughToClamp,
    textContainerRef,
    addOnsContainerRef,
    wrapperContainerRef,
    clamped,
    clampedText,
    toggleClamp,
  } = useClampText({
    originalText: formattedContent,
    lines: 2, // At most how many lines
    endSpaceNumber: 4, // how many trailing space,
    unitSpaceChar: "*", // single trailing space should be the width of this char
    debounceTime: 700, // in miliseconds
  });
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  
  return (
    <div
      className={`flex flex-col  mx-auto md:w-[70%] rounded-md my-2`}
      // style={tipItemStyle}
    >
      <div id="accordionExample">
        <div className="rounded-t-lg   bg-white  ">
          <h2
            style={colorStyle}
            className={`${
              index === 0 ? "border-y-2" : "border-b-2"
            } border-solid md:gap-x-3  py-2 flex justify-start   items-center`}
            id="headingOne"
            onClick={() => handleClick("element1")}
          >
            <div className="w-[40px] md:w-[30px]">
              {activeElement ? (
                <CiCircleMinus
                  style={colorStyle}
                  type="button"
                  className={`  !w-[30px]   h-auto `}
                  aria-controls="collapseOne"
                  aria-expanded="true"
                />
              ) : (
                <CiCirclePlus
                  style={colorStyle}
                  className={` !w-[30px] h-auto    `}
                  type="button"
                  aria-controls="collapseOne"
                  aria-expanded="true"
                />
              )}
            </div>

            <button
              style={colorStyle}
              className={`text-sm  md:text-xl     border-0 bg-white   `}
              type="button"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {t(data.tipTitle)}
            </button>
          </h2>
          <TECollapse show={activeElement === "element1"}>
            <div
              dangerouslySetInnerHTML={{
                __html: formattedContent,
              }}
              className="px-5 py-4 text-[0.85rem]  font-thin md:text-xl text-black"
            ></div>
          </TECollapse>
        </div>
      </div>
      {/* <h3 style={colorStyle} className={` text-lg md:text-2xl  font-semibold`}>
        {t(data.tipTitle)} :
      </h3> */}
      {/* <ClampLines
        
        text={formattedContent}
        id="really-unique-id"
        lines={2}
        ellipsis="..."
        moreText={`... ${"\u2193"} ${t("readMore")}`}
        lessText={`... ${"\u2191"} ${t("readLess")}`}
        className="custom-class"
        innerElement="p"
      /> */}
      {/* <div className=" text-[0.8rem]  md:text-base " ref={wrapperContainerRef}>
        <span
          ref={textContainerRef}
          dangerouslySetInnerHTML={{ __html: clampedText }}
        />
        {longEnoughToClamp ? (
          <button ref={addOnsContainerRef} onClick={toggleClamp}>
            {clamped
              ? `... ${"\u2193"} ${t("readMore")}`
              : `... ${"\u2191"} ${t("readLess")}`}
          </button>
        ) : null}
      </div> */}

      {/*     
      <p
        style={{ lineHeight: "1.1rem", minHeight: "1.1rem" }}
        className={`   overflow-ellipsis  text-[0.8rem]  md:text-base       ${
          !isOpen && formattedContent.length > 270
            ? "line-clamp-2"
            : isOpen && formattedContent.length > 270
            ? "line-clamp-none"
            : "line-clamp-none h-[2.2rem]"
        }  `}
        dangerouslySetInnerHTML={{
          __html: t(formattedContent),
        }}
      />
       { (
        <div className="mt-3 flex  items-center flex-row justify-start">
          <button
            className="w-auto"
            onClick={() => {
              setIsopen((prev) => !prev);
            }}
          >
            {isOpen ? t("readLess") : t("readMore")}
          </button>
          {isOpen ? (
            <BiSolidArrowToTop
              className="hover:cursor-pointer"
              onClick={() => {
                setIsopen((prev) => !prev);
              }}
            />
          ) : (
            <BiArrowFromTop
              className="hover:cursor-pointer"
              onClick={() => {
                setIsopen((prev) => !prev);
              }}
            />
          )}
        </div>
      ) } */}
    </div>
  );
};

export default TipItem;
