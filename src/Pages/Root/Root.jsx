import React, { useEffect, useState } from "react";
import Header from "../../Components/Headers/Header";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import LastFooter from "../../Components/LastFooter/LastFooter";
import LoadingPage from "../LoadingPage/LoadingPage";
import { baseURL } from "../../API/baseURL";
import GoUp from "../../Components/GoUp/GoUp";
import WhatsAppIcon from "../../Components/WhatsAppIcon/WhatsAppIcon";
import { useSelector } from "react-redux";

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [navigationStatus, setNavigationStatus] = useState();

  const navigation = useNavigation();
  useEffect(() => {
    setNavigationStatus(navigation.state);
  }, [navigation.state]);
  
  const data = useLoaderData();
  

  return (
    <>
      <Header />
      {navigationStatus === "loading" ? (
        <LoadingPage />
      ) : (
        <div className={`relative`}>
          <WhatsAppIcon />
          <GoUp />
          <Outlet />
          <Footer data={data} />
          <LastFooter />
        </div>
      )}
    </>
  );
};

export default Root;
export const rootLoader = async () => {
  const response = await fetch(`${baseURL}/products`);
  const data = await response.json();
  
  // const data = [];

  // for (const key in responseData) {
  //   if (responseData.hasOwnProperty(key)) {
  //     const obj = responseData[key];
  //     const imgsArray = Object.values(obj.imgs);
  //     const newObj = {
  //       id: key,
  //       ...obj,
  //       imgs: imgsArray,
  //     };
  //     data.push(newObj);
  //   }
  // }
  
  return data;
};
