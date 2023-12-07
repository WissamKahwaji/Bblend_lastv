import React from "react";
import { baseURL } from "../API/baseURL";
import { Link, useLoaderData } from "react-router-dom";
import PageContainer from "../Components/UI/PageContainer";
import { useSelector } from "react-redux";

const EditProducts = () => {
  const data = useLoaderData();
  console.log(data);
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };
  return (
    <PageContainer className={`p-1 flex items-center justify-center flex-col`}>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Available Products to Edit
      </h2>
      <ul className={`grid grid-cols-1 md:grid-cols-4 gap-5`}>
        {data.map((ele, i) => (
          <li>
            <Link to={ele._id} className={`flex flex-col items-center`}>
              <div className={`w-full h-96`}>
                <img
                  src={ele.img}
                  alt={ele.tile}
                  className={`rounded-lg w-full h-full object-contain`}
                />
              </div>
              <div>
                <p>{ele.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default EditProducts;

export const editProductsLoader = async () => {
  const response = await fetch(`${baseURL}/products`);
  const data = await response.json();

  return data;
};
