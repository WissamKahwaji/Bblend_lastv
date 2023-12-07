import React, { useEffect } from "react";
import PageContainer from "../Components/UI/PageContainer";
import { Form, useLoaderData } from "react-router-dom";
import TextField from "../Components/UI/TextField";
import { baseURL } from "../API/baseURL";
import LoadingPage from "./LoadingPage/LoadingPage";
import apiInstance from "../API/instance";
import { useForm } from "react-hook-form";
import { createFormData } from "../utils";
import { toast } from "react-toastify";
import FileInput from "../Components/UI/FileInput";
const EditContactInfo = () => {
  const data = useLoaderData();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      img: null,
      email: "",
      callUs: "",
      insta: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (values) => {
    const data = createFormData(values);
    try {
      const res = await apiInstance.put(`/contactUs/edit`, data);
      if (res) toast.success("Update contact info successfully.");
    } catch (error) {
      toast.error("Filed to update contact info,please try again.");
    }
  };
  useEffect(() => {
    if (data) {
      setValue("email", data.email);
      setValue("callUs", data.callUs);
      setValue("insta", data.insta);
      setValue("whatsapp", data.whatsapp);
    }
  }, [data, setValue]);
  if (!data) return <LoadingPage />;
  return (
    <PageContainer className={`p-2`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`grid grid-cols-1 gap-4 lg:grid-cols-2`}>
          <FileInput
            setValue={setValue}
            imgSrc={data.img}
            name={"img"}
            label={"image"}
          />
          <TextField name={"email"} label={"email"} register={register} />
          <TextField name={"callUs"} label={"callUs"} register={register} />
          <TextField name={"insta"} label={"insta"} register={register} />
          <TextField name={"whatsapp"} label={"whatsapp"} register={register} />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`border  px-4 py-1 rounded-lg`}
        >
          Update
        </button>
      </form>
    </PageContainer>
  );
};

export default EditContactInfo;
export const editContactInfoLoader = async () => {
  const response = await fetch(`${baseURL}/contactUs`);
  const data = await response.json();
  return data;
};
// export const editContactInfoAction = async ({ request }) => {
//   const data = await request.formData();
//   await apiInstance.put(`/contactUs/edit`, data);

//   return null;
// };
