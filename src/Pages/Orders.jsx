import React, { useState } from "react";
import { toast } from "react-toastify";
import { baseURL } from "../API/baseURL";
import { Form, Link, useLoaderData, redirect } from "react-router-dom";
import PageContainer from "../Components/UI/PageContainer";
import { useSelector } from "react-redux";
import { ImEye } from "react-icons/im";
import OrderDetailsModal from "../Components/UI/OrderDetailsModal";
import apiInstance from "../API/instance";
const Orders = () => {
  const data = useLoaderData();

  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };

  // State to manage the visibility of the order details modal
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
  // State to store the selected order
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to open the order details modal
  const openOrderDetailsModal = (order) => {
    setSelectedOrder(order);
    setIsOrderDetailsVisible(true);
  };

  // Function to close the order details modal
  const closeOrderDetailsModal = () => {
    setSelectedOrder(null);
    setIsOrderDetailsVisible(false);
  };

  return (
    <PageContainer>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Orders
      </h2>
      <div>
        <ul>
          {data?.map((order) => (
            <li
              key={order.orderId}
              className={`mb-4 bg-gray-100 rounded-lg py-1`}
            >
              <Link to={order._id} className={`py-8 block`}>
                <div
                  className={`flex flex-col md:grid md:grid-cols-4 md:place-items-center [&>*]:mb-2`}
                >
                  <p>
                    <strong>Order ID:</strong> {order._id}
                  </p>
                  <p>
                    <strong>User Name:</strong> {order.userName}
                  </p>

                  <p>
                    <strong>User Country:</strong> {order.userCountry}
                  </p>

                  <p>
                    <strong>Total Price:</strong> {order.cartItemsTotalPrice}
                  </p>
                </div>
              </Link>
              <div className={`flex items-center justify-between px-4`}>
                <Form method="post">
                  {/* <input hidden name="order_id_in_db" value={order.idInDB} /> */}
                  <input hidden name="orderId" value={order._id} />
                  <input hidden name="status" value="received" />
                  <button
                    disabled={order.orderStatus === "Pending" ? false : true}
                    className={`px-4 py-1 rounded-lg bg-blue-400 text-white text-lg disabled:text-blue-100 disabled:cursor-not-allowed`}
                  >
                    Received
                  </button>
                </Form>
                <div>
                  <button
                    onClick={() => openOrderDetailsModal(order)}
                    className={`px-4 py-1 rounded-lg bg-green-400 text-white text-lg flex items-center`}
                  >
                    See Order <ImEye className={`ml-2`} />
                  </button>
                </div>
                <Form method="post">
                  {/* <input hidden name="order_id_in_db" value={order.idInDB} /> */}
                  <input hidden name="orderId" value={order._id} />
                  <input hidden name="status" value=" canceled" />
                  <button
                    disabled={
                      order.orderStatus === "Store Canceled The Order"
                        ? true
                        : false
                    }
                    className={`px-4 py-1 rounded-lg bg-red-400 text-white text-lg disabled:text-red-100 disabled:cursor-not-allowed`}
                  >
                    Cancel
                  </button>
                </Form>
              </div>
            </li>
          ))}
        </ul>
        {isOrderDetailsVisible && (
          <OrderDetailsModal
            order={selectedOrder}
            onClose={closeOrderDetailsModal}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default Orders;
export const ordersLoader = async () => {
  const response = await fetch(`${baseURL}/orders`);
  const data = await response.json();
  return data;
};

export const ordersAction = async ({ request }) => {
  const data = await request.formData();
  const orderId = data.get("orderId");
  const status = data.get("status");
  const confirmation = window.confirm("Continue The Process?");

  try {
    if (confirmation) {
      const response = await apiInstance.put(`/orders/${orderId}/orderStatus`, {
        status,
      });
      if (response.data) {
        redirect("controls/check_orders");
      }
    }
  } catch (error) {
    toast.error(`Failed to ${status} order.`);
  }

  return null;
};
