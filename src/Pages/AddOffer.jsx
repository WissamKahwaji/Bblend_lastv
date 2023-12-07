import React from "react";
import PageContainer from "../Components/UI/PageContainer";
import TextField from "../Components/UI/TextField";
import { toast } from "react-toastify";
import { Form, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseURL } from "../API/baseURL";
import { useForm } from "react-hook-form";
import TextArea from "../Components/UI/TextArea";
import FileInput from "../Components/UI/FileInput";
import { createFormData } from "../utils";
import { product } from "../services/product";
import apiInstance from "../API/instance";

const AddOffer = () => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      type: "offer",
    },
  });
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };
  const onSubmit = async (values) => {
    const data = createFormData(values);
    try {
      const res = await apiInstance.post("/offers/add", data);
      if (res) toast.success(`add offer to ${values.title} successfully`);
    } catch (error) {
      toast.error(`failed to add offer to ${values.title}`);
    }
  };
  return (
    <PageContainer>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Add Offer
      </h2>
      <p className={`text-center text-gray-400 mb-4`}>
        Please Enter The Required Information
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 p-4`}>
          <TextField
            required
            register={register}
            label={`Enter the Product Title`}
            name={`title`}
            type="text"
          />
          <TextField
            required
            register={register}
            label={`Enter the Product Title AR`}
            name={`title_ar`}
            type="text"
          />
          <FileInput
            setValue={setValue}
            label={`Enter the Product Image Link`}
            name={`img`}
          />
          <FileInput
            setValue={setValue}
            label={`Enter the Product First Sub Image Link`}
            name={`first`}
          />
          <FileInput
            setValue={setValue}
            label={`Enter the Product Second Sub Image Link`}
            name={`second`}
          />
          <FileInput
            setValue={setValue}
            label={`Enter the Product Third Sub Image Link`}
            name={`third`}
          />
          <TextField
            required
            register={register}
            label={`Enter the Product offer Percentage`}
            name={`percentage`}
            type="text"
          />
          <div className={`flex flex-col mb-4`}>
            <TextArea
              register={register}
              name={"desc"}
              label={"Enter The Description of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
          </div>
          <div className={`flex flex-col mb-4`}>
            <TextArea
              register={register}
              name={"descAR"}
              label={"Enter The Description of the Product AR:"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
          </div>
          <div className={`flex flex-col mb-4`}>
            <TextArea
              register={register}
              name={"ing"}
              label={"Enter The Ingredients of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
          </div>
          <div className={`flex flex-col mb-4`}>
            <TextArea
              register={register}
              name={"ingAR"}
              label={"Enter The Ingredients of the Product AR:"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
          </div>
          <div className={`flex flex-col mb-4`}>
            <TextArea
              register={register}
              name={"usage"}
              label={"Enter the Usage of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
          </div>
          <div className={`flex flex-col mb-4`}>
            <TextArea
              register={register}
              name={"usageAR"}
              label={"Enter the Usage of the Product AR:"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
          </div>
          <div className={`flex flex-col mb-4`}>
            <TextArea
              register={register}
              name={"exp"}
              label={"Enter the Expiry Information of the Product :"}
              required
              className={`p-1 border  w-60 rounded-lg outline-none`}
              labelProps={{ className: "text-xl mb-2" }}
            />
          </div>
          <div className={`flex flex-col mb-4`}>
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
          </div>
        </div>
        <button className={`border px-4 py-1 rounded-lg`}>
          {isSubmitting ? "Submitting...Please Wait" : "Submit"}
        </button>
      </form>
    </PageContainer>
  );
};

export default AddOffer;
