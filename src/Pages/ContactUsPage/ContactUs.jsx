import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import { ContactFrom } from "../../Components/ContactForm/ContactFrom";
import { baseURL } from "../../API/baseURL";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const ContactUsPage = () => {
  const data = useLoaderData();
  const colorsData = useSelector((state) => state.colorsSlice);
  const contactStyles = {
    color: colorsData.mainColor,
  };
  const iconsStyle = {
    color: colorsData.mainColor,
  };
  const contactDivStyle = {
    borderBottom: `1px solid ${colorsData.mainColor}`,
  };
  const { t, i18n } = useTranslation();
  const contactInfoData = useSelector((state) => state.contactInfoSlice);

  // Function to format the phone number based on language direction
  const formatPhoneNumber = (phoneNumber) => {
    if (i18n.language === "ar") {
      // For RTL languages like Arabic
      return String(phoneNumber).replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$4 $3 $2 $1+");
    } else {
      // For LTR languages
      return String(phoneNumber).replace(
        /(\d{3})(\d{3})(\d{3})(\d{3})/,
        "+$1 $2 $3 $4"
      );
    }
  };

  return (
    <PageContainer>
     
      <PageHeading pageHeadingTitle={t("Contact Us")} />
      <div
        style={contactDivStyle}
        className={`flex flex-col items-center my-8 pb-4`}
      >
        <p className={`text-2xl font-medium my-1`}>
          <span>{t("Mail-ID")} : </span>
          <span style={contactStyles} className={`font-normal`}>
            {data.email}
          </span>
        </p>
        <p className={`text-2xl font-medium my-1`}>
          <span>{t("Mobile Number")} : </span>
          <span style={contactStyles} className={`font-normal font-sans text-base lg:text-lg`}>
            {formatPhoneNumber(data.callUs)}
          </span>
        </p>
        <div className={`flex items-center my-1`}>
          <a
            style={iconsStyle}
            href={`https://api.whatsapp.com/send?phone=${data.whatsapp}`}
            className={`flex items-center`}
          >
            <BsWhatsapp className={`text-4xl mr-1`} />
          </a>
          <a
            style={iconsStyle}
            href={data.insta}
            target="_blank"
            rel="noreferrer"
            className={`mx-2`}
          >
            <AiFillInstagram
              className={`hover:opacity-100 duration-200 text-5xl`}
            />
          </a>
        </div>
      </div>
      <ContactFrom img={data.img} />
    </PageContainer>
  );
};

export default ContactUsPage;
export const contactUsPageLoader = async () => {
  const response = await fetch(`${baseURL}/contactUs`);
  const data = await response.json();
  return data;
 
};
