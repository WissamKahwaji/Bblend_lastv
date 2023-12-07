import React from "react";
import NavBar from "../Components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Root;
