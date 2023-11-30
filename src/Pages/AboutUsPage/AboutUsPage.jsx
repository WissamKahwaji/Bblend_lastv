import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import AboutSentence from "../../Components/AboutSentence/AboutSentence";
import { baseURL } from "../../API/baseURL";
import { useLoaderData } from "react-router-dom";
import AboutBox from "../../Components/AboutBox/AboutBox";

const AboutUsPage = () => {
  const data = useLoaderData();
  
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle="About Us" />
      <AboutSentence aboutSentenceParagraph={data.intro} />
      <AboutBox
        isRTL={true}
        src={data.firstBox.img}
        alt={data.firstBox.title}
        title={data.firstBox.title}
        text={data.firstBox.text}
      />
      <AboutBox
        src={data.secondBox.img}
        alt={data.secondBox.title}
        title={data.secondBox.title}
        text={data.secondBox.text}
      />
    </PageContainer>
  );
};

export default AboutUsPage;
export const aboutUsPageLoader = async () => {
  const response = await fetch(`${baseURL}/aboutContent`);
  const data = await response.json();
  return data;
};
