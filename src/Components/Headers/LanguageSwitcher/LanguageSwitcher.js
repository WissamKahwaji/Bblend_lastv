import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeLang } from "../../../Store/LangSlice";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    const direction = selectedLanguage === "ar" ? "rtl" : "ltr";

    localStorage.setItem("selectedLanguage", selectedLanguage);
    localStorage.setItem("direction", direction);
    dispatch(changeLang({ lang: selectedLanguage, direction: direction }));
    i18n.changeLanguage(selectedLanguage);
    window.localStorage.setItem("language", selectedLanguage);
    document.documentElement.dir = direction;
  };

  // Get the detected language from i18n.language
  console.log(i18n.language);
  // Get the detected language from i18n.language or retrieve from local storage
  const detectedLanguage =
    i18n.language || localStorage.getItem("selectedLanguage");

  // Get the direction from local storage
  const direction = localStorage.getItem("direction");
  useEffect(() => {
    if (direction) {
      document.documentElement.dir = direction;
    }
  }, [direction]);
  return (
    <div className={`flex items-center `}>
      <div className={`flex items-center mx-4`}>
        <select
          name="language"
          id="language"
          className={`border border-[#C9C9C9] rounded-md outline-none`}
          value={detectedLanguage}
          onChange={changeLanguage}
        >
          <option value="en">English</option>
          <option value="ar">عربي</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
