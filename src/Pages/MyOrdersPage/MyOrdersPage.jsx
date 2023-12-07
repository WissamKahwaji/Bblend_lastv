import React from "react";
import { baseURL } from "../../API/baseURL";
import { useLoaderData } from "react-router-dom";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import SectionContainer from "../../Components/UI/SectionContainer/SectionContainer";
import MyOrdersItem from "../../Components/MyOrdersItem/MyOrdersItem";
import { useTranslation } from "react-i18next";

const MyOrdersPage = () => {
  const data = useLoaderData();

  const { t } = useTranslation();
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle={"My Orders"} />
      <SectionContainer>
        {data.length > 0 ? (
          <ul>
            {data.reverse().map((ele) => (
              <li>
                <MyOrdersItem data={ele} />
              </li>
            ))}
          </ul>
        ) : (
          <div className={`text-2xl font-semibold text-center`}>
            {t("No Order has been placed yet")}
          </div>
        )}
      </SectionContainer>
    </PageContainer>
  );
};

export default MyOrdersPage;
export const myOrdersPageLoader = async () => {
  if (window.localStorage.getItem("userIdentifier")) {
    const userIdentifier = JSON.parse(
      window.localStorage.getItem("userIdentifier")
    );
    const response = await fetch(`${baseURL}/orders/user/${userIdentifier}`);
    const responseData = await response.json();
    const dataArray = Object.keys(responseData).map((key) => ({
      id: key,
      ...responseData[key],
    }));

    // Convert the cartItems object within each child object to an array
    dataArray.forEach((item) => {
      item.cartItems = Object.keys(item.cartItems).map((cartItemId) => ({
        id: cartItemId,
        ...item.cartItems[cartItemId],
      }));
    });
    return dataArray;
  } else {
    return [];
  }
};
