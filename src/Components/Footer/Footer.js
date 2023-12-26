import React, { useTransition } from "react";
import Container from "../UI/SectionContainer/SectionContainer";
import styles from "../../Components/SharedCss/SharedCss.module.css";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { BsWhatsapp } from "react-icons/bs";
const Footer = ({ data }) => {
  const footerData = useSelector((state) => state.footerSlice);

  const { t, i18n } = useTranslation();
  const contactInfoData = useSelector((state) => state.contactInfoSlice);
  console.log(contactInfoData);
  // Function to format the phone number based on language direction
  const formatPhoneNumber = (phoneNumber) => {
    if (i18n.language === "ar") {
      // For RTL languages like Arabic
      return String(phoneNumber).replace(
        /(\d{3})(\d{3})(\d{3})(\d{3})/,
        "$4 $3 $2 $1+"
      );
    } else {
      // For LTR languages
      return String(phoneNumber).replace(
        /(\d{3})(\d{3})(\d{3})(\d{3})/,
        "+$1 $2 $3 $4"
      );
    }
  };
  const navLinksData = useSelector((state) => state.navLinksSlice);

  const colorsData = useSelector((state) => state.colorsSlice);
  const iconStyles = {
    color: colorsData.navLinksColor,
  };

  return (
    <Container
      className={`flex justify-between flex-col bg-[#221100] text-white !py-12`}
    >
      <div className={`flex justify-between flex-wrap`}>
        <div className="mb-4 flex flex-col items-center">
          {/* <h5 className={`text-xl ${styles["play-font"]} mb-2`}>{t("Menu")}</h5> */}
          <ul className={`grid grid-cols-3`}>
            {navLinksData.map((ele) => (
              <li className={`mb-2 underline overflow-hidden text-ellipsis`}>
                <Link
                  to={ele.path}
                  className={`whitespace-nowrap overflow-hidden text-ellipsis`}
                >
                  {t(ele.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h5 className={`text-xl ${styles["play-font"]} mb-2`}>
            {t("Recommended Products")}
          </h5>
          <ul>
            {data.slice(1, 4).map((ele) => (
              <li className={`mb-2`}>
                <Link to={`Products/${ele._id}`}>{t(ele.title)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h5 className={`text-xl ${styles["play-font"]} mb-2`}>{t("FAQ")}</h5>
          <ul>
            <li className={`mb-2 underline`}>
              <Link to="/extra_2">{t(footerData.first)}</Link>
            </li>
            <li className={`mb-2 underline`}>
              <Link to="/extra_2">{t(footerData.second)}</Link>
            </li>{" "}
            <li className={`mb-2 underline`}>
              <Link to="/extra_4">{t(footerData.third)}</Link>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className={`text-xl ${styles["play-font"]} mb-2`}>
            {t("Contact Us")}
          </h5>
          <ul>
            <li dir="ltr" className={`mb-2`}>
              {" "}
              {formatPhoneNumber(contactInfoData.callUs)}
            </li>
            <li className={`mb-2`}>{t(footerData.fifth)}</li>
            <li className={`flex items-center `}>
              <a
                href={contactInfoData.insta}
                target="_blank"
                rel="noreferrer"
                className={`mx-2`}
              >
                <AiFillInstagram
                  style={iconStyles}
                  className={`hover:opacity-100 duration-200 text-5xl`}
                />
              </a>
              <a
                href={`https://wa.me/${contactInfoData.whatsapp?.replace(
                  /\s/g,
                  ""
                )}`}
                className={`flex items-center`}
              >
                <BsWhatsapp
                  style={iconStyles}
                  className={`w-[37px] h-[37px] mx-1`}
                />
              </a>
            </li>
          </ul>
        </div>
        {/* {footerContent.map((ele) => (
          <div className={`w-[1/2] lg:w-[29%] mb-4 lg:mb-0`}>
            <h5 className={`text-xl ${styles["play-font"]} mb-2`}>
              {ele.mainTitle}
            </h5>
            <ul>
              {ele.links.map((ele, i) => (
                <li className={`mb-2`}>
                  <Link className={`underline text-sm font-bold`}>
                    {ele.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>

      <div className={`flex items-center justify-between mt-4`}>
        <div></div>
        <div
          className={`flex items-center [&>*]:text-white [&>*]:text-2xl [&>*]:mr-5   [&>*]:opacity-80 [&>*]:cursor-pointer`}
        >
          {/* <a href={`https://www.instagram.com/bblends.ae/?igshid=NzZhOTFlYzFmZQ`} target="_blank" rel="noreferrer">
            <AiFillInstagram className={`hover:opacity-100 duration-200`} />
          </a> */}
          {/* <a href={``} target="_blank" rel="noreferrer">
            <AiFillFacebook className={`hover:opacity-100 duration-200`} />
          </a>
          <a href={``} target="_blank" rel="noreferrer">
            <AiFillTwitterSquare className={`hover:opacity-100 duration-200`} />
          </a>
          <a href={``} target="_blank" rel="noreferrer">
            <AiFillLinkedin className={`hover:opacity-100 duration-200`} />
          </a>
          <a href={``} target="_blank" rel="noreferrer">
            <AiFillYoutube className={`hover:opacity-100 duration-200`} />
          </a> */}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
