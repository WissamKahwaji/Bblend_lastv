import React, { useEffect, useState } from "react";
import Container from "../../UI/SectionContainer/SectionContainer";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const DownHeader = () => {
  const { t } = useTranslation();
  const [isNav, setIsNav] = useState(false);
  const colorsData = useSelector((state) => state.colorsSlice);
  const navLinksData = useSelector((state) => state.navLinksSlice);
  const logoData = useSelector((state) => state.logoSlice);
  const mainLogoData = useSelector((state) => state.mainLogoSlice);

  const cartData = useSelector((state) => state.cartSlice);
  const cartLengthStyle = {
    backgroundColor: colorsData.mainColor,
  };
  console.log(navLinksData);
  const location = useLocation(); // Access the current route location

  useEffect(() => {
    setIsNav(false); // Set isNav to false when the route changes
  }, [location]);
  const contactInfoData = useSelector((state) => state.contactInfoSlice);
  const direction = useSelector((state) => state.lang.direction);

  return (
    <Container
      className={`flex items-center !px-2 justify-between lg:justify-start !py-2 !scroll-pl-6 lg:px-8 relative`}
    >
      <div className={`block lg:hidden text-3xl mr-5`}>
        <CiMenuBurger
          className={`cursor-pointer`}
          onClick={() => setIsNav(!isNav)}
        />
      </div>

      <ul
        className={`${
          isNav
            ? ` ${direction === "ltr" ? "-left-0" : "-right-0"}`
            : `${direction === "ltr" ? "-left-[400rem]" : "-right-[400rem]"} `
        } w-screen flex flex-col absolute bg-white top-[2.85rem]  duration-700 max-h-fit`}
      >
        {navLinksData.map(
          (ele, i) =>
            ele.title !== "" && (
              <NavLink
                to={ele.path}
                style={({ isActive }) => ({
                  color: isActive ? colorsData.navLinksColor : "black",
                  "&:hover": {
                    color: colorsData.navLinksColor,
                  },
                })}
                className={`font-medium text-xl`}
              >
                <li
                  className={`py-4 pr-4 border-b border-black flex justify-center`}
                >
                  {t(ele.title)}
                </li>
              </NavLink>
            )
        )}
      </ul>
      {/* <li className={`flex items-center justify-between py-4 px-2`}>
          <a
            href={`mailto:${contactInfoData.Email}`}
            className={`!mr-0 flex items-center`}
          >
            <MdOutlineAlternateEmail className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("Email Message")}</span>
          </a>
          <a
            href={`https://wa.me/${contactInfoData.whatsapp}`}
            className={`flex items-center`}
          >
            <BsWhatsapp className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("WhatsApp")}</span>
          </a>
          <a
            href={`tel:${contactInfoData.callUs}`}
            className={`flex items-center`}
          >
            <PiDeviceMobileSpeaker className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("Call Us")}</span>
          </a>
        </li> */}
      <div className={`flex items-center justify-start w-full`}>
        <div className={`lg:mx-4 w-20 md:w-40`}>
          <Link to="/" className={`w-full`}>
            <img
              src={logoData.mainLogo}
              alt={logoData.toString().slice(0, 3)}
            />
          </Link>
        </div>
        <div className={`hidden lg:block px-3`}>
          <ul className={`flex items-center [&>*]:mr-2 `}>
            {navLinksData.map(
              (ele, i) =>
                ele.title !== "" && (
                  <li>
                    <NavLink
                      to={ele.path}
                      style={({ isActive }) => ({
                        color: isActive ? colorsData.navLinksColor : "black",
                        "&:hover": {
                          color: colorsData.navLinksColor,
                        },
                      })}
                      className={() =>
                        [
                          "block",
                          "mr-4",
                          "text-center",
                          "transition-colors",
                          "duration-[300ms]",
                        ].join(" ")
                      }
                    >
                      {t(ele.title)}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      <div className={`flex justify-end items-center lg:hidden`}>
        <LanguageSwitcher />

        <div className={`flex items-center`}>
          <Link to="/my_cart" className={`relative`}>
            <span
              style={cartLengthStyle}
              className={`absolute z-50 w-4 h-4 flex items-center justify-center rounded-full text-white text-xs -top-2 -right-1`}
            >
              {cartData.length}
            </span>
            <AiOutlineShoppingCart className={`text-2xl font-medium mx-2`} />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DownHeader;
