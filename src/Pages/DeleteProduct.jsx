import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../API/baseURL";
import PageContainer from "../Components/UI/PageContainer";
import { useSelector } from "react-redux";
import apiInstance from "../API/instance";
import LoadingPage from "./LoadingPage/LoadingPage";
const DeleteProduct = () => {
  const data = useLoaderData();
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };
  if (!data) return <LoadingPage />;
  console.log(data);
  return (
    <PageContainer className={`p-1 flex items-center justify-center flex-col`}>
      <h1
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Available Products to Delete
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
                <input type="hidden" name="productId" value={ele._id} />
                <input type="hidden" name="productTitle" value={ele.title} />

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

export default DeleteProduct;
export const deleteProductsLoader = async () => {
  const response = await apiInstance.get("/products");
  return response.data;
};
export const deleteProductAction = async ({ request }) => {
  const data = await request.formData();
  const productId = data.get("productId");
  const productTitle = data.get("productTitle");
  const confirmation = window.confirm("Continue The Process?");
  if (confirmation) {
    try {
      const response = await apiInstance.delete(
        `${baseURL}/products/${productId}`
      );
      if (response) {
        redirect("controls/delete_product");
      }
    } catch (error) {
      toast.error(`Failed to delete ${productTitle}.`);
    }
    return null;
  } else {
    window.alert("The Process has been Canceled");
    return null;
  }
};
