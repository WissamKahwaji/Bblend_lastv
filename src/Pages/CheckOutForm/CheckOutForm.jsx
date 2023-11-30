import React, { useEffect, useState } from "react";
import { Form, redirect } from "react-router-dom";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import Input from "../../Components/UI/Input/Input";
import { useSelector } from "react-redux";
import { BsCashStack } from "react-icons/bs";
import { baseURL } from "../../API/baseURL";

import "react-toastify/dist/ReactToastify.css";
import visaIcon from "../../Assets/Payment/visa.svg";
import masterIcon from "../../Assets/Payment/mastercard.svg";
import { useTranslation } from "react-i18next";
const CheckOutForm = () => {
  const [isOutSideUAE, setIsOutSideUAE] = useState(null);
  const [isAllowedToCheckOut, setIsAllowedToCheckOut] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const [deliveryCost, setDeliveryCost] = useState(
    "Please select the country First"
  );
  const [totalWeight, setTotalWeight] = useState(0);
  const [isUAE, setIsUAE] = useState(false);
  const colorsData = useSelector((state) => state.colorsSlice);
  const cartData = useSelector((state) => state.cartSlice);
  
  const hStyle = {
    color: `${colorsData.mainColor}`,
  };
  const inputStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  const checkOutButtonStyle = {
    color: `${colorsData.mainColor}`,
    border: `1px solid ${colorsData.mainColor}`,
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const totalWeight = cartData.reduce((total, item) => {
      const quantity = item.quantity;
      const weight = item.weight;

      // Calculate the total weight for the item (weight * quantity)
      const totalWeight = quantity > 1 ? weight * quantity : weight;

      // Add the total weight of the item to the running total
      return total + totalWeight;
    }, 0);
    setTotalWeight(totalWeight);
  }, [cartData]);
  // Handle the change event of the select element
  const citiesByCountry = {
    "United Arab Emirates": [
      "Abu Dhabi",
      "Dubai",
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al-Quwain",
    ],
    Bahrain: ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali"],
    Kuwait: ["Kuwait City", "Hawalli", "Salmiya", "Al Ahmadi", "Farwaniya"],
    Oman: ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"],
    Qatar: ["Doha", "Al Rayyan", "Al Wakrah", "Al Khor", "Umm Salal"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar"],
  };

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);

    // Reset the selected city when the country changes
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
  };

  useEffect(() => {
    
    if (window.localStorage.getItem("userInfo")) {
      setSelectedCountry(
        JSON.parse(window.localStorage.getItem("userInfo")).userCountry
      );
      setSelectedCity(
        JSON.parse(window.localStorage.getItem("userInfo")).userCity
      );
    }
    if (selectedCountry === "United Arab Emirates") {
      setIsOutSideUAE(false);
      setIsAllowedToCheckOut(true);
      
      setDeliveryCost(30);
      window.localStorage.setItem("deliveryCost", JSON.stringify(deliveryCost));
      window.localStorage.setItem(
        "finalTotalPrice",
        deliveryCost + JSON.parse(window.localStorage.getItem("cartTotalPrice"))
      );
      return;
    } else {
      setIsOutSideUAE(true);
      const keywords = [
        "Aloe",
        "Flaxseed",
        "Shampoo",
        "conditioner",
        "garlic",
        "Lemon",
        "Coconut",
        "Package",
        "Hairbrush",
        "Towel",
      ];
      let isAllowedToCheckOut = true; // Assuming it's initially true

      for (let i = 0; i < cartData.length; i++) {
        const item = cartData[i];
        const containsKeyword = keywords.some((keyword) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        );
        if (containsKeyword) {
          isAllowedToCheckOut = false;
          
          window.alert(
            "Sorry Only Toner, Henna, Sidr and Oil are qualified for shipping outside UAE"
          );
          break; // Stop the loop as soon as a keyword is found
        }
      }
      setIsAllowedToCheckOut(isAllowedToCheckOut);

      if (
        selectedCountry === "Kuwait" ||
        selectedCountry === "Qatar" ||
        (selectedCountry === "Bahrain" && selectedCountry !== "")
      ) {
        if (totalWeight <= 1000) {
          setDeliveryCost(100);
        }
        if (totalWeight > 1000) {
          setDeliveryCost(100 + 0.03 * (totalWeight - 1000));
        }
      }
      if (selectedCountry === "Saudi Arabia" && selectedCountry !== "") {
        if (totalWeight <= 1000) {
          setDeliveryCost(70);
        }
        if (totalWeight > 1000) {
          setDeliveryCost(70 + 0.03 * (totalWeight - 1000));
        }
      }
      if (selectedCountry === "Oman" && selectedCountry !== "") {
        if (totalWeight <= 1000) {
          setDeliveryCost(60);
        }
        if (totalWeight > 1000) {
          setDeliveryCost(60 + 0.01 * (totalWeight - 1000));
        }
      }
    }

    // setDeliveryCost(totalWeight * 0.07);
    window.localStorage.setItem("deliveryCost", JSON.stringify(deliveryCost));
    window.localStorage.setItem(
      "finalTotalPrice",
      deliveryCost + JSON.parse(window.localStorage.getItem("cartTotalPrice"))
    );
    return;
  }, [
    cartData,
    deliveryCost,
    isAllowedToCheckOut,
    selectedCountry,
    totalWeight,
  ]);

  const { t } = useTranslation();
  return (
    <PageContainer>
      <Form method="post">
        <h3 style={hStyle} className={`text-2xl font-bold mb-2`}>
          Personal Information
        </h3>
        <div className={`grid grid-rows-2 grid-cols-2 gap-5 mb-8`}>
          <Input
            label="Your Name"
            input={{
              required: true,
              placeholder: "Enter Here Your Name",
              name: "user_name",
              type: "text",
              defaultValue:
                window.localStorage.getItem("userInfo") &&
                JSON.parse(window.localStorage.getItem("userInfo")).userName,
            }}
            example="E.G. John Doe"
          />
          <Input
            label="Mobile Number"
            input={{
              required: true,
              placeholder: "Enter Here Your Mobile Number",
              name: "user_mobile_number",
              type: "number",
              defaultValue:
                window.localStorage.getItem("userInfo") &&
                JSON.parse(window.localStorage.getItem("userInfo"))
                  .userMobileNumber,
            }}
            example="E.G. +971XXXXXXXXX"
          />
          <Input
            label="Mail ID"
            input={{
              required: true,
              placeholder: "Enter Here Your Mail ID",
              name: "user_mail_id",
              type: "mail",
              defaultValue:
                window.localStorage.getItem("userInfo") &&
                JSON.parse(window.localStorage.getItem("userInfo")).userMailId,
            }}
            example="E.G. john.doe@mail.com"
          />
        </div>
        <h3 style={hStyle} className={`text-2xl font-bold mb-2`}>
          Address Details
        </h3>
        <div className={`grid grid-rows-2 grid-cols-2 gap-5 mb-8`}>
          <div className={`flex flex-col`}>
            <label htmlFor="user_country" className={`mb-2`}>
              Country
            </label>
            <select
              style={inputStyle}
              id="user_country"
              name="user_country"
              required
              className={`outline-none rounded-md p-1`}
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="" disabled>
                Select your country
              </option>
              {Object.keys(citiesByCountry).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {isOutSideUAE && (
              <div className={`text-xl text-red-600`}>
                {t(
                  "Please note: If you order any Sidr product or one that contains Sidr, it will be shipped to your country as a powder"
                )}
              </div>
            )}
          </div>
          {selectedCountry && (
            <div className={`flex flex-col`}>
              <label htmlFor="user_city" className={`mb-2`}>
                City
              </label>
              <select
                style={inputStyle}
                id="user_city"
                name="user_city"
                required
                className={`outline-none rounded-md p-1`}
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="" disabled>
                  Select your city
                </option>
                {citiesByCountry[selectedCountry].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}
          <Input
            label="Street"
            input={{
              required: true,
              placeholder: "Enter Here Your Street Name",
              name: "user_street",
              type: "text",
              defaultValue:
                window.localStorage.getItem("userInfo") &&
                JSON.parse(window.localStorage.getItem("userInfo")).userStreet,
            }}
          />
          <Input
            label="Building"
            input={{
              required: true,
              placeholder: "Enter Here Your Building Name",
              name: "user_building",
              type: "text",
              defaultValue:
                window.localStorage.getItem("userInfo") &&
                JSON.parse(window.localStorage.getItem("userInfo"))
                  .userBuilding,
            }}
          />
          <Input
            label="Nearby"
            input={{
              required: true,
              placeholder: "Enter Here a place Nearby to you",
              name: "user_nearby",
              type: "text",
              defaultValue:
                window.localStorage.getItem("userInfo") &&
                JSON.parse(window.localStorage.getItem("userInfo")).userNearby,
            }}
          />
        </div>
        <h3 style={hStyle} className={`text-2xl font-bold mb-2`}>
          Note
        </h3>
        <div className={`grid grid-cols-1 mb-8`}>
          <label></label>
          <textarea
            className={`outline-none rounded-md p-1`}
            style={inputStyle}
            placeholder="Leave a Note if You have any"
            name="user_note"
          />
        </div>

        <input type="hidden" value={JSON.stringify(cartData)} name="cart" />
        <div className={`p-2 w-full md:w-[50%] mx-auto border rounded-lg`}>
          <h2 className={`text-2xl font-semibold mb-2`}>Your Total Price</h2>
          <div>
            <p
              className={`p-1 flex items-center justify-between border-b text-lg`}
            >
              <span>Items Price</span>
              <span>
                {+JSON.parse(window.localStorage.getItem("cartTotalPrice"))}
              </span>
            </p>
            <p
              className={`p-1 flex items-center justify-between border-b text-lg`}
            >
              <span>Delivery Fees</span>
              <span>
                {typeof deliveryCost === "string"
                  ? deliveryCost
                  : deliveryCost.toFixed(2)}{" "}
              </span>
            </p>
            <p
              className={`p-1 flex items-center justify-between text-xl font-medium`}
            >
              <span>Total</span>
              <span>
                {+JSON.parse(window.localStorage.getItem("cartTotalPrice")) +
                  +deliveryCost}
              </span>
            </p>
          </div>
        </div>
        <div className={`flex flex-col mt-4`}>
          <h3 style={hStyle} className={`text-2xl  text-center font-bold mb-2`}>
            Payment Method
          </h3>
          <div className={`flex w-80 mx-auto items-center mb-4`}>
            <input
              name="payment_method"
              type="radio"
              value="cash"
              className={`w-5 h-5 mr-2`}
              onChange={handlePaymentMethodChange}
            />
            <label className={`mr-2 text-xl`}>Cash On Delivery</label>
            <BsCashStack className={`text-green-500 text-3xl`} />
          </div>
          <div className={`flex w-80 mx-auto  items-center`}>
            <input
              name="payment_method"
              type="radio"
              value="card"
              className={`w-5 h-5 mr-2`}
              onChange={handlePaymentMethodChange}
            />
            <label className={`mr-2 text-xl`}>Card</label>
            <div className={`flex items-center`}>
              <img src={visaIcon} alt="visa" className={`w-10`} />
              <img src={masterIcon} alt="master" className={`w-10`} />
            </div>
          </div>
        </div>
        {paymentMethod === "cash" && (
          <button
            disabled={!isAllowedToCheckOut}
            style={checkOutButtonStyle}
            className={`px-4 py-1 rounded-lg mx-auto w-full inline-block mt-4 disabled:cursor-not-allowed`}
          >
            Submit Your Order
          </button>
        )}
        {paymentMethod === "card" && (
          <button
            disabled={!isAllowedToCheckOut}
            style={checkOutButtonStyle}
            className={`px-4 py-1 rounded-lg mx-auto w-full inline-block mt-4 disabled:cursor-not-allowed`}
          >
            Continue to payment Gateway
          </button>
        )}
      </Form>
    </PageContainer>
  );
};

export default CheckOutForm;
export const checkOutFormAction = async ({ request }) => {
  const data = await request.formData();

  const cartItemsFromInput = JSON.parse(data.get("cart"));
  const cartItems = cartItemsFromInput.reduce((acc, currentItem) => {
    acc.push(currentItem)  ;
    return acc;
  }, []);
  const cartItemsTotalPrice = window.localStorage.getItem("cartTotalPrice");
  const order = {
    orderPlacedAt: new Date(Date.now()),
    userName: data.get("user_name"),
    userMobileNumber: `${data.get("user_mobile_number")}`,
    userMailId: data.get("user_mail_id"),
    userCountry: data.get("user_country"),
    userCity: data.get("user_city"),
    userStreet: data.get("user_street"),
    userBuilding: data.get("user_building"),
    userNearby: data.get("user_nearby"),
    userNote: data.get("user_note"),
    paymentMethod: data.get("payment_method"),
    orderStatus: "Pending",
    orderPaymentStatus:
      data.get("payment_method") === "cash" ? "Cash On Delivery" : "Pending",
    cartItems: cartItems,
    deliveryCost: JSON.parse(window.localStorage.getItem("deliveryCost")),
    itemsPrice: cartItemsTotalPrice,
    cartItemsTotalPrice: JSON.parse(
      window.localStorage.getItem("finalTotalPrice")
    ),
    // cartItemsTotalPrice: cartItemsTotalPrice,
  };
  //
  const userIdentifier =
    order.userName.replace(/\s+/g, "") + order.userMobileNumber;
  window.localStorage.setItem("userIdentifier", JSON.stringify(userIdentifier));
  const userName = order.userName;
  const userMailId = order.userMailId;
  const userMobileNumber = order.userMobileNumber;
  const userCountry = order.userCountry;
  const userCity = order.userCity;
  const userStreet = order.userStreet;
  const userBuilding = order.userBuilding;
  const userNearby = order.userNearby;
  const userInfo = {
    userName,
    userMailId,
    userMobileNumber,
    userCountry,
    userCity,
    userStreet,
    userBuilding,
    userNearby,
  };
  window.localStorage.setItem("userInfo", JSON.stringify(userInfo));

 
  
    const response = await fetch(`${baseURL}/orders/${userIdentifier}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const responseData = await response.json();
 
    if (order.paymentMethod === "cash") {
      return redirect("/paid");
    }
    if (order.paymentMethod === "card") {
      window.localStorage.setItem("responseData", JSON.stringify(responseData));
      return redirect("/paymentGateway");
    }
  
 
};
