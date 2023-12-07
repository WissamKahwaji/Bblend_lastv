import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";

const Controls = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const linkStyles = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  return (
    <>
      <NavBar />
      <Outlet />
    </>
    
  );
};

export default Controls;
