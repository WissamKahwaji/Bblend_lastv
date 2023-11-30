import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BiArrowFromTop } from "react-icons/bi";
import { BiSolidArrowToTop } from "react-icons/bi";
import { useClampText } from "@yukimoto/use-clamp-text";
import { TECollapse } from "tw-elements-react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FAQItem = ({ data, index }) => {
  const { t } = useTranslation();

  const colorsData = useSelector((state) => state.colorsSlice);
  const colorStyle = {
    color: colorsData.mainColor,
    borderColor: colorsData.mainColor,
  };

  let formattedContent = data.faqContent.replace(
    /\d-/g,
    (match) => `<br><br/>${match}`
  );
  formattedContent = t(`${formattedContent}`);
  const faqItemStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };


  return (
    <div className={`flex flex-col py-2   md:mx-auto md:w-[70%] rounded-md col-span-1    `}>
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
              className={`text-sm md:text-lg  font-bold   border-0 bg-white   `}
              type="button"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {t(data.faqTitle)}
            </button>
          </h2>
          <TECollapse show={activeElement === "element1"}>
            <div
              dangerouslySetInnerHTML={{
                __html: formattedContent,
              }}
              className="px-5 py-4 text-[0.85rem] font-thin md:text-base text-black "
            ></div>
          </TECollapse>
        </div>
        {/* <div className="rounded-t-lg   bg-white  ">
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
              className={`text-lg md:text-xl     border-0 bg-white   `}
              type="button"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {t(data.faqTitle)}
            </button>
          </h2>
          <TECollapse show={activeElement === "element1"}>
            <div
              dangerouslySetInnerHTML={{
                __html: formattedContent,
              }}
              className="px-5 py-4 text-[0.8rem] text-black md:text-base"
            ></div>
          </TECollapse>
        </div> */}
      </div>

      {/* <div className=" text-[0.8rem]  md:text-base " ref={wrapperContainerRef}>
        <span ref={textContainerRef} dangerouslySetInnerHTML={{__html: clampedText}}/>
        {longEnoughToClamp ? (
          <button ref={addOnsContainerRef} onClick={toggleClamp}>
            {clamped
              ? `... ${"\u2193"} ${t("readMore")}`
              : `... ${"\u2191"} ${t("readLess")}`}
          </button>
        ) : null}
      </div> */}
    </div>
  );
};

export default FAQItem;
