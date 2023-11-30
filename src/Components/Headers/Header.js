import React from "react";
import UpHeader from "./UpHeader/UpHeader";
import DownHeader from "./DownHeader/DownHeader";

const Header = () => {
  // const componentDirection = "ltr"; // Set the desired direction here

  return (
    <div
      className={`fixed z-50 w-full bg-white shadow-[0px_9px_6px_0px_#00000024] top-0`}
    >
      <p className="text-center py-1  text-[0.8rem] md:text-lg  bg-[#f6f6f6]" >
        Same day delivery is available in Dubai for orders placed by 2:00 PM UAE
        time from Monday to Saturday.
      </p>
      <UpHeader />
      <DownHeader />
    </div>
  );
};

export default Header;
