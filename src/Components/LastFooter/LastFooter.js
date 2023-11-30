import React from "react";
import Container from "../UI/SectionContainer/SectionContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LastFooter = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  const { t } = useTranslation();
  return (
    <Container className={`flex justify-between items-center flex-col md:flex-row`}>
      <Link className={`underline font-semibold text-sm`}>
        {t("Terms & Conditions")}
      </Link>
      <Link className={`underline font-semibold text-sm`}>
        {t("Security & Privacy Policy")}
      </Link>
      <a
        href="https://siimedia.net/"
        target="_blank"
        className={`underline font-semibold text-sm mt-2 md:mt-0`}
        rel="noreferrer"
      >
        {t(`Copyright © ${thisYear} | Powered by Sii Media.`)}
      </a>
    </Container>
  );
};

export default LastFooter;
