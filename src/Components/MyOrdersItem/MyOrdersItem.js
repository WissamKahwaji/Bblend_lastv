import React from "react";
import "./MyOrderItem.css";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { baseURL } from "../../API/baseURL";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Rating } from "@mui/material";
import RatingSystem from "../UI/RatingSystem/RatingSystem";

const MyOrdersItem = ({ data }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const itemStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  const { t } = useTranslation();
  return (
    <div style={itemStyle} className={`mb-8 p-2 rounded-md`}>
      <h2 className={`font text-center mb-2`}>
        {t("Order ID")} : {data.orderId}
      </h2>
      <h3 className={`text-lg font-semibold mb-2`}>{t("Order Details")}:</h3>
      <div className={`flex flex-col`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 [&>*]:mb-2`}>
          <p>
            <span className={`text-sm md:text-lg font-semibold`}>
              Order Total Price :{" "}
            </span>
            {data.cartItemsTotalPrice}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Order Placed At :{" "}
            </span>
            {data.orderPlacedAt}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Order Status :{" "}
            </span>
            {data.orderStatus}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Order Payment Method :{" "}
            </span>
            {data.paymentMethod}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Payment Status :{" "}
            </span>
            {data.orderPaymentStatus}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Mobile Number :{" "}
            </span>
            {data.userMobileNumber}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Mail ID :{" "}
            </span>
            {data.userMailId}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Address :{" "}
            </span>
            {`${data.userCountry}, ${data.userCity}, ${data.userStreet}, ${data.userBuilding}, ${data.userNearby}`}
          </p>
          <p>
            <span className={`text-sm md:text-lg  font-semibold`}>
              Notes :{" "}
            </span>
            {data.userNote}
          </p>
        </div>
        <ul
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mt-2`}
        >
          {data.cartItems.map((ele) => (
            <li className={`flex items-center  flex-col`}>
              <div>
                <img
                  src={ele.img}
                  alt={ele.title}
                  className={`rounded-lg w-full h-56 object-cover`}
                />
              </div>
              <div
                className={`flex flex-col items-center justify-center text-center`}
              >
                <h4>
                  {ele.price} x {ele.quantity}
                </h4>
                <h5>{ele.title}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <RatingSystem />
      <Form method="post" className={`mt-4`}>
        <input
          hidden
          name="idIndB"
          value={data.userName.replace(/\s+/g, "") + data.userMobileNumber}
        />
        <input hidden name="id" value={data.id} />
        <button
          disabled={data.orderStatus === "Canceled By The Costumer"}
          className={`px-4 py-2 bg-red-500 text-white rounded-md place-self-start disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {data.orderStatus === "Canceled By The Costumer"
            ? "Canceled"
            : "Cancel"}
        </button>
      </Form>
    </div>
  );
};

export default MyOrdersItem;

export const myOrdersItemAction = async ({ request }) => {
  const data = await request.formData();
  const idInDb = data.get("idIndB");
  const id = data.get("id");
  const response = await fetch(`${baseURL}orders/${idInDb}/${id}/orderStatus`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify("Canceled By The Costumer"),
  });
  const dataResponse = await response.json();

  return null;
};
