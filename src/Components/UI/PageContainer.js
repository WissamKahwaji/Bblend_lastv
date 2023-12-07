import React from "react";

const PageContainer = ({ children, className }) => {
  return (
    <div
      className={`w-full lg:w-[80%] absolute right-0 top-[37rem] lg:top-0 bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
