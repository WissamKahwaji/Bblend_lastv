import React from "react";
import ReactFlagsSelect from "react-flags-select";
import "./currencySelect.css";
const CurrencySelect = () => {
  const customStyles = {
    // Reduce padding for the select container
    container: {
      padding: "4px", // Adjust this value as needed
    },
  };

  return (
    <ReactFlagsSelect
      id="currency"
      selectedSize={12}
      optionsSize={12}
      countries={["AE", "US"]}
      fullWidth={false}
      customLabels={{ AE: "AED", US: "USD" }}
      selected="AE"
      customStyles={customStyles}
    />
  );
};

export default CurrencySelect;
