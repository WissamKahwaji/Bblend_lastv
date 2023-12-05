import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutSentence = ({ aboutSentenceParagraph }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };
  const { t } = useTranslation();
  return (
    <div className="text-center mt-4 w-full md:w-[70%] mx-auto text-gray-500 mb-8">
      {showFullText ? (
        <p>{t(aboutSentenceParagraph)}</p>
      ) : (
        <p>
          {aboutSentenceParagraph.length > 300
            ? t(aboutSentenceParagraph).slice(0, 300) + "..."
            : t(aboutSentenceParagraph)}
        </p>
      )}
      {aboutSentenceParagraph.length > 300 && (
        <button
          onClick={toggleFullText}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {showFullText ? t("readLess") : t("readMore")}
        </button>
      )}
    </div>
  );
};

export default AboutSentence;
