import React from "react";
import { Link } from "react-router-dom";

const OrderDetailsModal = ({ order, onClose }) => {
  // Render the order details here
  return (
    <div className="modal absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full min-h-screen flex items-center justify-center">
      <div className="modal-content bg-white py-2 px-4 rounded-lg">
        <h2 className={`text-lg text-center`}>Order Details</h2>
        <p className={`text-center`}>Order ID: {order.orderId}</p>
        <p>User Name: {order.userName}</p>
        <p>Order Payment Status : {order.orderPaymentStatus}</p>
        <p>Order Total Price : {order.cartItemsTotalPrice}</p>
        <p>Order Status : {order.orderStatus}</p>
        <div className={`mt-4 flex items-center justify-between`}>
          <button
            className={`py-1 px-4 text-white mt-4 rounded-lg bg-red-500`}
            onClick={onClose}
          >
            Close
          </button>
          <Link
            to={`${order.id}/${order.idInDB}`}
            className={`py-1 px-4 text-white mt-4 rounded-lg bg-green-500`}
            onClick={onClose}
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
