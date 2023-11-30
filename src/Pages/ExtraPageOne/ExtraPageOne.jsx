import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SingleProductCard from "../../Components/UI/SingleProductCard/SingleProductCard";
import { baseURL } from "../../API/baseURL";

const ExtraPageOne = () => {
  const navLinksData = useSelector((state) => state.navLinksSlice);
  const colorsData = useSelector((state) => state.colorsSlice);
  const offersData = useSelector((state) => state.offersSlice);

  const { t } = useTranslation();
console.log(offersData,"offers")
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle={navLinksData[5].title} />
      <ul className={`grid grid-cols-2 md:grid-cols-3 gap-10`}>
        {offersData.map((ele, i) => (
          <li key={i}>
            <SingleProductCard
              isDiscount={true}
              discountPercentage={ele.percentage}
              className="mx-1"
              id={ele._id}
              path={`/extra_1/${ele._id}`}
              src={ele.img}
              alt={ele.title}
              title={
                ele.titleAr
                  ? window.localStorage.getItem("language") === "en"
                    ? ele.title
                    : ele.titleAr
                  : t(ele.title)
              }
              price={ele.deepDetails.first.price}
              desc={
                ele.descAR
                  ? window.localStorage.getItem("language") === "en"
                    ? ele.desc
                    : ele.descAR
                  : t(ele.desc)
              }
            />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default ExtraPageOne;
// export const extraPageOneLoader = async () => {
//   const response = await fetch(`${baseURL}offers);
// };
