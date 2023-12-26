import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useSelector } from "react-redux";

const WhatsAppIcon = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const iconStyles = {
    color: colorsData.mainColor,
  };
  const contactInfoData = useSelector((state) => state.contactInfoSlice);
  return (
    <a
      href={`https://wa.me/${contactInfoData.whatsapp?.replace(/\s/g, "")}`}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-24 right-4 z-50 text-5xl cursor-pointer`}
    >
      <BsWhatsapp
        style={iconStyles}
        className={`opacity-50 hover:opacity-100 duration-200`}
        // style={arrowStyles}
      />
    </a>
  );
};

export default WhatsAppIcon;
