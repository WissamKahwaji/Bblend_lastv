import React, { useState } from "react";
import SingleProductCard from "../UI/SingleProductCard/SingleProductCard";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ProductsList = ({ data }) => {
  const [titleFilter, setTitleFilter] = useState("");
  // const [typeFilter, setTypeFilter] = useState("");
  const [isPackages, setIsPackage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const { t } = useTranslation();
  // Filter the data based on the title and type filters
  const filteredData = data.filter((product) => {
    const titleMatch = product.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const typeMatch = typeFilter === "" || product.type === typeFilter;
    return titleMatch && typeMatch;
  });

  const colorsData = useSelector((state) => state.colorsSlice);

  const inputsStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  useEffect(() => {
    const packages = window.location.pathname.includes("Packages");
    if (packages) {
      setIsPackage(true);

      setTitleFilter("Package");
    }
  }, [isPackages]);

  return (
    <div className="md:w-[80%] md:mx-auto">
      <div className={`flex flex-col md:flex-row md:items-center mb-4`}>
        <div className={`flex flex-col mb-2 md:mb-0 md:mr-4`}>
          <label htmlFor="searchField" className={`mb-2`}>
            {t("Search By Name")}:
          </label>
          <input
            id="searchField"
            style={inputsStyle}
            className={`outline-none p-2 rounded-md`}
            type="text"
            placeholder={t("Type here...")}
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </div>
        <div className={`flex flex-col mb-2 md:mb-0 md:mr-4`}>
          <label htmlFor="selectType" className={`mb-2`}>
            {t("Filter By Type")}:
          </label>
          <select
            id="selectType"
            style={inputsStyle}
            className={`outline-none p-2 rounded-md`}
            value={isPackages ? "Package" : typeFilter}
            onChange={(e) => setSearchParams({ type: e.target.value })}
          >
            <option value="">{t("All Types")}</option>

            {Array.from(new Set(data.map((ele) => ele.type))).map(
              (uniqueType) => (
                <option key={uniqueType} value={uniqueType}>
                  {t(uniqueType)}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div
        className={`grid grid-cols-2   gap-2   lg:grid-cols-3 lg:gap-x-20 justify-items-center 	 `}
      >
        {filteredData.map((ele, i) => (
          <SingleProductCard
            key={i}
            id={ele._id}
            path={ele._id}
            src={ele.img}
            alt={ele.title}
            size={ele.deepDetails.first.size}
            // title={ele.title}
            price={ele.deepDetails.first.price}
            // desc={ele.desc}
            title={
              ele.titleAr
                ? window.localStorage.getItem("language") === "en"
                  ? ele.title
                  : ele.titleAr
                : t(ele.title)
            }
            desc={
              ele.descAR
                ? window.localStorage.getItem("language") === "en"
                  ? ele.desc
                  : ele.descAR
                : t(ele.desc)
            }
            weight={ele.deepDetails.first.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
