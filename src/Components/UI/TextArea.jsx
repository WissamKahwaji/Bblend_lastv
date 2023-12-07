import React from "react";

const TextArea = ({
  register,
  name,
  label,
  required = false,
  labelProps,
  ...props
}) => {
  return (
    <>
      <label htmlFor="textArea" {...labelProps}>
        {label}
      </label>
      <textarea {...props} id="textArea" {...register(name, { required })} />
    </>
  );
};

export default TextArea;
