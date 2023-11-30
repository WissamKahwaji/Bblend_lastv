import React, { useEffect } from "react";
import Landing from "../../Components/Landing/Landing";
import Collections from "../../Components/Collections/Collections";
import CategoryOne from "../../Components/CategoryOne/CategoryOne";
import CategoryTwo from "../../Components/CategoryTwo/CategoryTwo";
import MiddleSection from "../../Components/MiddleSection/MiddleSection";
import CategoryThree from "../../Components/CategoryThree/CategoryThree";
import IconsCollection from "../../Components/IconsCollection/IconsCollection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { useSelector } from "react-redux";
import Offers from "../../Components/Offers/Offers";
import FixedOffer from "../../Components/FixedOffer/FixedOffer";
const Msg = () => (
  <div className={`flex items-center justify-center flex-col`}>
    <h2 className={`text-center text-xl font-medium`}>
      {t("For hair salons, we've prepared a special offer.")} ✨
    </h2>
    <Link className={`text-center underline`} to="/contact_us">
      {t("Contact Us Using This Link")}
    </Link>
  </div>
);
const HomePage = () => {
  useEffect(() => {
    toast(<Msg />);
  }, []);

  return (
    <div>
      <Landing />
      <div className="lg:w-[80%] md:mx-auto overflow-hidden ">
        <FixedOffer />
        <Offers />
        <Collections />
        <IconsCollection />
        <CategoryOne />
        <CategoryTwo />
        <MiddleSection />
        <CategoryThree />
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={20000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* <FullWidthSlider /> */}
    </div>
  );
};

export default HomePage;
