import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { baseURL } from "../API/baseURL";
import PageContainer from "../Components/UI/PageContainer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiInstance from "../API/instance";
const DeleteOffer = () => {
  const data = useLoaderData();
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };
  return (
    <PageContainer className={`p-1 flex items-center justify-center flex-col`}>
      <h1
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Available Offers to Delete
      </h1>
      <ul className={`grid grid-cols-1 md:grid-cols-4 gap-5`}>
        {data.map((ele, i) => (
          <li key={ele.id} className={`flex flex-col items-center`}>
            <div className={`w-full h-96`}>
              <img
                src={ele.img}
                alt={ele.tile}
                className={`rounded-lg w-full h-full object-contain`}
              />
            </div>
            <div className={`flex items-center justify-center flex-col`}>
              <p>{ele.title}</p>
              <Form method="post">
                <input type="hidden" name="id" value={ele._id} />
                <input type="hidden" name="title" value={ele.title} />
                <button
                  className={`px-4 py-1 rounded-lg bg-red-500 text-white font-semibold cursor-pointer mt-2`}
                >
                  Delete
                </button>
              </Form>
            </div>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default DeleteOffer;
export const deleteOffersLoader = async () => {
  const response = await fetch(`${baseURL}/offers`);
  const data = await response.json();
  const dataArray = Object.keys(data).map((key) => {
    return {
      id: key,
      ...data[key],
    };
  });
  return dataArray;
};
export const deleteOffersAction = async ({ request }) => {
  const data = await request.formData();
  const productId = data.get("id");
  const productTitle = data.get("title");
  const confirmation = window.confirm("Continue The Process?");
  if (confirmation) {
    try {
      const response = await apiInstance(`/offers/${productId}`, {
        method: "delete",
      });
      if (response) redirect("/control/delete_offer");
    } catch (error) {
      toast.error(`failed to delete ${productTitle}`);
    }

    return null;
  } else {
    window.alert("The Process has been Canceled");
    return null;
  }
};
