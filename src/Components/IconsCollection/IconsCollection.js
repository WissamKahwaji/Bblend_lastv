import React from "react";
import Container from "../UI/SectionContainer/SectionContainer";
import { iconsCollectionContent } from "./iconsCollectionContent";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IconsCollection = () => {
  const {t} = useTranslation();
  return (
    <Container className={``}>
      <ul className={`w-full flex justify-between items-center`}>
        {iconsCollectionContent.map((ele, i) => (
          <li className={`w-[25%] py-2 md:py-14    border border-[#e1e1e1]`}>
            <Link
              to={ele.path}
              className={`flex flex-col items-center justify-center`}
            >
              <span>{ele.icon}</span>
              <span
                className={`mt-4 font-semibold overflow-hidden text-center text-ellipsis whitespace-nowrap w-[90%] mx-auto`}
              >
                {t(ele.title)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default IconsCollection;
