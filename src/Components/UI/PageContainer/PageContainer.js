import React from "react";

const PageContainer = ({ children, className }) => {
  return (
    <section
      className={`px-4 py-8 mt-[60px] md:mt-[calc(70px+65px)] min-h-screen ${className}`}
    >
      {children}
    </section>
  );
};

export default PageContainer;
