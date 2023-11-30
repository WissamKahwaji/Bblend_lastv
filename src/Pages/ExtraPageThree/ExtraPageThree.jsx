import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { baseURL } from "../../API/baseURL";
import WhyBox from "../../Components/WhyBox/WhyBox";
import RateItem from "../../Components/RateItem/RateItem";

const ExtraPageThree = () => {
  const navLinksData = useSelector((state) => state.navLinksSlice);
  const data = useLoaderData();
  
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle={navLinksData[7].title} />
      <RateItem />
      <ul className={`grid grid-cols-1 md:grid-cols-4 gap-5`}>
        {data.map((ele) => (
          <WhyBox src={ele.img} title={ele.title} text={ele.text} />
        ))}
      </ul>
    </PageContainer>
  );
};

export default ExtraPageThree;
export const extraPageThreeLoader = async () => {
  const response = await fetch(`${baseURL}/extraPageThreeContent`);
  const data = await response.json();
 return data
};
