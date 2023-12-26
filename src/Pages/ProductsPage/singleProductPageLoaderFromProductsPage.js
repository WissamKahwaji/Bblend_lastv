import { baseURL } from "../../API/baseURL";

export const singleProductPageLoaderFromProductsPage = async ({ params }) => {
  const productId = params.productID;
  const response = await fetch(`${baseURL}/products/${productId}`);
  const data = await response.json();

  // Convert the imgs object into an array of image URLs
  const imgsArray = data?.imgs ? Object.values(data.imgs) : [];

  // Replace the imgs object in the data with the imgsArray
  data.imgs = imgsArray;
  const deepDetailsArray = [];
  if (data.deepDetails) {
    for (const key in data.deepDetails) {
      if (data.deepDetails.hasOwnProperty(key)) {
        const item = data.deepDetails[key];
        deepDetailsArray.push(item);
      }
    }
  }
  // Replace deepDetails object with deepDetailsArray in the data object
  data.deepDetails = deepDetailsArray;

  return data;
};
