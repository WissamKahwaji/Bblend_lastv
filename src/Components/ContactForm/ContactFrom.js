import React, { useRef, useTransition } from "react";
import emailjs from "@emailjs/browser";
import { sendEmail } from "./contactFromSendFunction";
import SectionContainer from "../UI/SectionContainer/SectionContainer";
import { TbHealthRecognition } from "react-icons/tb";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
export const ContactFrom = ({ img }) => {
  const form = useRef();
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    sendEmail(e, emailjs, form); // Call the sendEmail function with the necessary parameters
    toast("Your mail has been sent 🎉");
  };
  const colorsData = useSelector((state) => state.colorsSlice);

  const inputsStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };

  const buttonStyle = {
    border: `1px solid ${colorsData.mainColor}`,
    backgroundColor: colorsData.mainColor,
  };

  const iconStyle = {
    color: colorsData.mainColor,
  };
  const brandingData = useSelector((state) => state.brandingSlice);

  return (
    <SectionContainer className={`grid grid-cols-1 lg:grid-cols-2 gap-4`}>
      <div className={`w-full lg:w-[80%]`}>
        <form ref={form} onSubmit={handleSubmit} className={`flex flex-col`}>
          <div>
            <input
              className={`outline-none p-2 rounded-md`}
              style={inputsStyle}
              type="hidden"
              name="receiver_name"
              value="Ali Hsaino"
            />
          </div>
          <div
            className={`flex lg:items-center justify-between flex-col lg:flex-row mb-2`}
          >
            <label className={`text-lg`}>{t("Your Name")}:</label>
            <input
              className={`outline-none p-2 rounded-md`}
              style={inputsStyle}
              type="text"
              name="sender_name"
              required
            />
          </div>
          <div
            className={`flex lg:items-center justify-between flex-col lg:flex-row mb-2`}
          >
            <label className={`text-lg`}>{t("Your Email")}:</label>
            <input
              className={`outline-none p-2 rounded-md`}
              style={inputsStyle}
              type="email"
              name="sender_mail_id"
              required
            />
          </div>
          <div
            className={`flex lg:items-center justify-between flex-col lg:flex-row mb-2`}
          >
            <label className={`text-lg`}>{t("Your Subject")}:</label>
            <input
              className={`outline-none p-2 rounded-md`}
              style={inputsStyle}
              type="text"
              name="subject"
              required
            />
          </div>
          <div
            className={`flex lg:items-center justify-between flex-col lg:flex-row mb-2`}
          >
            <label className={`text-lg`}>{t("Message")}:</label>
            <textarea
              className={`outline-none p-2 rounded-md`}
              style={inputsStyle}
              name="message"
            />
          </div>
          <input
            className={`outline-none p-2 rounded-md text-white font-medium hover:!bg-transparent hover:!text-black duration-200 cursor-pointer`}
            style={buttonStyle}
            type="submit"
            value={t("Send")}
          />
        </form>
      </div>
      <div className={`flex flex-col items-center`}>
        <img src={img} alt={img.toString().slice(0, 3)} className={`w-52`} />
        <h3>{t("Send Us a Mail Regarding your Query")}</h3>
        <p className={`text-center`}>
          {t("We will get to you back as soon as possible")}
        </p>
        <p className={`flex items-center`}>
          <span className={`text-3xl`}>
            {t(`${brandingData.brandName} Team`)}
          </span>
          <TbHealthRecognition style={iconStyle} className={`text-3xl`} />
        </p>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </SectionContainer>
  );
};
