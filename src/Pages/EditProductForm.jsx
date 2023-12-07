import React, { useEffect } from "react";
import { baseURL } from "../API/baseURL";
import { useLoaderData, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PageContainer from "../Components/UI/PageContainer";
import { useForm } from "react-hook-form";
import TextArea from "../Components/UI/TextArea";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { product } from "../services/product";
import LoadingPage from "./LoadingPage/LoadingPage";
import TextField from "../Components/UI/TextField";
import FileInput from "../Components/UI/FileInput";

const EditProductForm = () => {
  const data = useLoaderData();
  const colorsData = useSelector((state) => state.colorsSlice);

  const { productId } = useParams();

  const headingTitle = {
    color: colorsData.mainColor,
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useForm({});

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("titleAr", data.titleAr);

      setValue("desc", data.desc);
      setValue("descAR", data.descAR);

      setValue("ing", data.ing);
      setValue("ingAR", data.ingAR);

      setValue("usage", data.usage);
      setValue("usageAR", data.usageAR);
      setValue("exp", data.exp);
      setValue("expAR", data.expAR);

      setValue("type", data.type);
      setValue("deepDetails.first.size", data.deepDetails.first.size);
      setValue("deepDetails.first.price", data.deepDetails.first.price);
      setValue("deepDetails.first.weight", data.deepDetails.first.weight);
      setValue("deepDetails.second.size", data.deepDetails.second.size);
      setValue("deepDetails.second.price", data.deepDetails.second.price);
      setValue("deepDetails.second.wight", data.deepDetails.second.weight);
      setValue("deepDetails.third.size", data.deepDetails.third.size);
      setValue("deepDetails.third.price", data.deepDetails.third.price);
      setValue("deepDetails.third.wight", data.deepDetails.third.weight);
    }
  }, [setValue, data]);

  const { mutate: UpdateProduct, isLoading } = useMutation({
    mutationKey: "updateProduct",
    mutationFn: (data) => product.UpdateProduct({ data, productId }),
    onSuccess(data) {
      toast.success(`Update ${data.title} successfully.`);
    },
    onError(error) {
      toast(`failed to update ${watch("title")}`, {
        type: "error",
      });
    },
  });

  const onSubmit = async (values) => {
    UpdateProduct(values);
  };

  if (!data) return <LoadingPage />;
  return (
    <PageContainer className={`p-2`}>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Your Product
      </h2>
      <div className="my-10 mx-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`flex flex-col md:grid gap-8 md:grid-cols-2`}>
            <TextField
              label={`Enter the Product Title`}
              name={`title`}
              type="text"
              register={register}
            />
            <TextField
              label={`Enter the Product Title`}
              name={`titleAr`}
              type="text"
              register={register}
            />

            <FileInput
              name={"img"}
              label={"Enter the Product Image :"}
              setValue={setValue}
              imgSrc={data.img}
            />

            <FileInput
              name={"first"}
              label={"Enter the Product First Image"}
              setValue={setValue}
              imgSrc={data.imgs.first}
            />

            <FileInput
              name={"second"}
              label={"Enter the Product Second Image"}
              setValue={setValue}
              imgSrc={data.imgs.second}
            />

            <FileInput
              name={"third"}
              label={"Enter the Product Third Image"}
              setValue={setValue}
              imgSrc={data.imgs.third}
            />

            <TextArea
              register={register}
              name={"desc"}
              label={"Enter The Description of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
            <TextArea
              register={register}
              name={"descAR"}
              label={"Enter The Description of the Product AR:"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
            <TextArea
              register={register}
              name={"ing"}
              label={"Enter The Ingredients of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
            <TextArea
              register={register}
              name={"ingAR"}
              label={"Enter The Ingredients of the Product AR:"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
            <TextArea
              register={register}
              name={"usage"}
              label={"Enter the Usage of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
            <TextArea
              register={register}
              name={"usageAR"}
              label={"Enter the Usage of the Product AR:"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
            <TextArea
              register={register}
              name={"exp"}
              label={"Enter the Expiry Information of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
            <TextArea
              register={register}
              name={"expAR"}
              label={"Enter the Expiry Information of the Product AR:"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />

            <TextField
              required
              register={register}
              label={`Enter the Product Prefix`}
              name={`type`}
              type="text"
            />
            <TextField
              required
              register={register}
              label={`Enter the Product Size 1`}
              name={`deepDetails.first.size`}
              type="text"
            />
            <TextField
              required
              register={register}
              label={`Enter the Product Price for Size 1`}
              name={`deepDetails.first.price`}
              type="text"
            />
            <TextField
              register={register}
              label={`Enter the Product wight for Size 1`}
              name={`deepDetails.first.wight`}
              type="text"
            />
            {/*  */}
            <TextField
              required
              register={register}
              label={`Enter the Product Size 2`}
              name={`deepDetails.second.size`}
              type="text"
            />
            <TextField
              required
              register={register}
              label={`Enter the Product Price for Size 2`}
              name={`deepDetails.second.price`}
              type="text"
            />
            <TextField
              register={register}
              label={`Enter the Product Wight for Size 2`}
              name={`deepDetails.second.wight`}
              type="text"
            />
            {/*  */}
            <TextField
              required
              register={register}
              label={`Enter the  Product Size 3`}
              name={`deepDetails.third.size`}
              type="text"
            />
            <TextField
              required
              register={register}
              label={`Enter the  Product Price for Size 3`}
              name={`deepDetails.third.price`}
              type="text"
            />
            <TextField
              register={register}
              label={`Enter the  Product Wight for Size 3`}
              name={`deepDetails.third.wight`}
              type="text"
            />
          </div>
          <button
            disabled={isSubmitting}
            className={`border px-4 py-1 rounded-lg`}
          >
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </PageContainer>
  );
};

export default EditProductForm;

export const editProductFormLoader = async ({ params }) => {
  const productId = params.productId;
  const response = await fetch(`${baseURL}/products/${productId}`);
  const data = await response.json();
  return data;
};
