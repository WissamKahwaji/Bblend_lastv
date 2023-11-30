import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import { useSelector } from "react-redux";
import { baseURL } from "../../API/baseURL";
import { useLoaderData } from "react-router-dom";
import FAQItem from "../../Components/FAQItem/FAQItem";
import TipItem from "../../Components/TipItem/TipItem";

const ExtraPageFour = () => {
  const navLinksData = useSelector((state) => state.navLinksSlice);
  const data = useLoaderData();
  
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle={navLinksData[8].title} />
      <ul className="mt-10">
        {data.map((ele,index) => (
          <li >
            <TipItem data={ele} index={index} />
          </li>
        ))}
        {/* {data.map(
          <li className={`mb-8`}>
            <FAQItem data={data} />
          </li>
        )} */}
      </ul>
    </PageContainer>
  );
};

export default ExtraPageFour;
export const extraFourPageLoader = async () => {
  const response = await fetch(`${baseURL}/Tips`);
  const data = await response.json();
  const dataArray = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      dataArray.push(data[key]);
    }
  }

  return dataArray;
};
