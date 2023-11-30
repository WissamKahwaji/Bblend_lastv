import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import { useSelector } from "react-redux";
import { baseURL } from "../../API/baseURL";
import { useLoaderData } from "react-router-dom";
import FAQItem from "../../Components/FAQItem/FAQItem";
import { useTranslation } from "react-i18next";

const ExtraPageTwo = () => {
  const navLinksData = useSelector((state) => state.navLinksSlice);
  const data = useLoaderData();
  

  const hana = data.slice(0, 10);
  const mask = data.slice(10);
  const { t } = useTranslation();
  return (
    <PageContainer>
      <PageHeading  pageHeadingTitle={"Frequently_Asked_Questions"} />

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-span-1 flex flex-col">
          <div className="col-span-1  md:mx-auto md:w-[70%] my-4 md:my-8 ">
            <h3 className="text-3xl text-[#4a4a4a] ">{t("Henna_Temriyah")} </h3>
          </div>
          {hana.map((ele, index) => (
            <FAQItem data={ele} index={index} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="col-span-1 md:mx-auto md:w-[70%] my-6 md:my-8 ">
            <h3 className="text-3xl text-[#4a4a4a]">{t("mask_of_arugula_and_aloe_vera")} </h3>
          </div>
          {mask.map((ele, index) => (
            <FAQItem data={ele} index={index} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default ExtraPageTwo;
export const extraPageTwoLoader = async () => {
  const response = await fetch(`${baseURL}/faq`);
  const data = await response.json();
  const dataArray = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      dataArray.push(data[key]);
    }
  }

  return dataArray;
};
