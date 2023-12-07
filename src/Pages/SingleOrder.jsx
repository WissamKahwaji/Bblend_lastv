import React from "react";
import { baseURL } from "../API/baseURL";
import { useLoaderData } from "react-router-dom";
import PageContainer from "../Components/UI/PageContainer";
import { useSelector } from "react-redux";

const SingleOrder = () => {
  const data = useLoaderData();
  console.log(data);
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };

  return (
    <PageContainer className={`p-4`}>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Order Details
      </h2>
      <div className={`flex flex-col`}>
        <div
          className={`grid grid-cols-2 gap-5 mb-4 border-b border-black py-2`}
        >
          {" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>Order Id : </span>
            <span className={`text-sm`}>{data.orderId}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Order Payment Status :{" "}
            </span>
            <span className={`text-sm`}>{data.orderPaymentStatus}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Order Placed At :{" "}
            </span>
            <span className={`text-sm`}>{data.orderPlacedAt}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Order Items TotalPrice:{" "}
            </span>
            <span className={`text-sm`}>{data.cartItemsTotalPrice}</span>
          </p>
          <p className={``}>
            <span className={`text-base font-semibold`}>order Status:</span>
            <span className={`text-sm`}>{data.orderStatus}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>Payment Method : </span>
            <span className={`text-sm`}>{data.paymentMethod}</span>
          </p>
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Order Items TotalPrice:{" "}
            </span>
            <span className={`text-sm`}>{data.cartItemsTotalPrice}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Order Items TotalPrice:{" "}
            </span>
            <span className={`text-sm`}>{data.cartItemsTotalPrice}</span>
          </p>
        </div>
        <h3 className={`text-base font-semibold text-center`}>Order Items</h3>
        <ul className={`grid grid-cols-5 gap-5 border-b border-black py-2`}>
          {data.cartItems.map((ele) => (
            <li key={ele.id} className={`flex flex-col`}>
              <img src={ele.img} alt={ele.title} className={`rounded-md`} />
              <h2 className={`whitespace-nowrap overflow-hidden text-ellipsis`}>
                {ele.title}
              </h2>
              <h3 className={`self-center`}>
                {ele.price} AED X {ele.quantity}
              </h3>
            </li>
          ))}
        </ul>
        <h3 className={`text-base font-semibold text-center`}>
          User Information
        </h3>
        <div className={`grid grid-cols-2 gap-5 py-2`}>
          <p className={``}>
            <span className={`text-base font-semibold`}>Costumer Name: </span>
            <span className={`text-sm`}>{data.userName}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Costumer Address:{" "}
            </span>
            <span
              className={`text-sm`}
            >{`${data.userCountry}, ${data.userCity}, ${data.userStreet}, ${data.userBuilding}, ${data.userNearby}`}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Costumer Mail-ID:{" "}
            </span>
            <span className={`text-sm`}>{data.cartItemsTotalPrice}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>
              Costumer Mobile Number:{" "}
            </span>
            <span className={`text-sm`}>{data.userMobileNumber}</span>
          </p>{" "}
          <p className={``}>
            <span className={`text-base font-semibold`}>Costumer Note: </span>
            <span className={`text-sm`}>{data.userNote}</span>
          </p>{" "}
        </div>
      </div>
    </PageContainer>
  );
};

export default SingleOrder;
export const singleOrderLoader = async ({ params }) => {
  const orderId = params.orderId;
  const userId = params.userId;
  const response = await fetch(`${baseURL}/orders/${userId}/${orderId}`);
  const data = await response.json();
  const cartItemsArray = Object.values(data.cartItems);

  // Create a new object with the cartItems as an array
  const output = {
    ...data,
    cartItems: cartItemsArray,
  };
  return output;
};
