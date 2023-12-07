import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const brandingData = useSelector((state) => state.brandingSlice);
  const logoData = useSelector((state) => state.logoSlice);
  const brandStyle = {
    color: colorsData.mainColor,
  };
  const navBarStyle = {
    borderRight: `1px solid ${colorsData.mainColor}`,
  };
  return (
    <nav
      style={navBarStyle}
      className={`fixed bg-gray-200 left-0 top-0  w-full lg:w-[20%] h-auto lg:h-full py-5 px-2 flex flex-col items-center`}
    >
      <div>
        <img
          src={logoData.mainLogo}
          alt={brandingData.BrandName}
          className={`w-10`}
        />
      </div>
      <div>
        <h2 style={brandStyle} className={`text-3xl font-bold`}>
          {brandingData.BrandName}
        </h2>
      </div>
      <ul className={`mt-4 flex flex-col items-center w-full`}>
        <li className={`w-full border-b-8 border-white py-4`}>
          <NavLink
            className={({ isActive }) =>
              [
                isActive ? "underline" : "",
                "text-black",
                "block",
                "text-center",
                "transition-colors",
                "duration-[300ms]",
                "w-full",
              ].join(" ")
            }
            to="check_orders"
          >
            Manage Orders
          </NavLink>
        </li>
        <li className={`w-full border-b-8 border-white py-4`}>
          <NavLink
            className={({ isActive }) =>
              [
                isActive ? "underline" : "",
                "text-black",
                "block",
                "text-center",
                "transition-colors",
                "duration-[300ms]",
                "w-full",
              ].join(" ")
            }
            to="add_product"
          >
            Add Product
          </NavLink>
        </li>
        <li className={`w-full border-b-8 border-white py-4`}>
          <NavLink
            className={({ isActive }) =>
              [
                isActive ? "underline" : "",
                "text-black",
                "block",
                "text-center",
                "transition-colors",
                "duration-[300ms]",
                "w-full",
              ].join(" ")
            }
            to="edit_products"
          >
            Edit Product
          </NavLink>
        </li>
        <li className={`w-full border-b-8 border-white py-4`}>
          <NavLink
            className={({ isActive }) =>
              [
                isActive ? "underline" : "",
                "text-black",
                "block",
                "text-center",
                "transition-colors",
                "duration-[300ms]",
                "w-full",
              ].join(" ")
            }
            to="delete_product"
          >
            Delete Product
          </NavLink>
        </li>
        <li className={`w-full border-b-8 border-white py-4`}>
          <NavLink
            className={({ isActive }) =>
              [
                isActive ? "underline" : "",
                "text-black",
                "block",
                "text-center",
                "transition-colors",
                "duration-[300ms]",
                "w-full",
              ].join(" ")
            }
            to="add_offer"
          >
            Add Offer
          </NavLink>
        </li>
        <li className={`w-full border-b-8 border-white py-4`}>
          <NavLink
            className={({ isActive }) =>
              [
                isActive ? "underline" : "",
                "text-black",
                "block",
                "text-center",
                "transition-colors",
                "duration-[300ms]",
                "w-full",
              ].join(" ")
            }
            to="delete_offer"
          >
            Delete Offer
          </NavLink>
        </li>
        <li className={`w-full border-b-8 border-white py-4`}>
          <NavLink
            className={({ isActive }) =>
              [
                isActive ? "underline" : "",
                "text-black",
                "block",
                "text-center",
                "transition-colors",
                "duration-[300ms]",
                "w-full",
              ].join(" ")
            }
            to="edit_Contact"
          >
            Edit Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
