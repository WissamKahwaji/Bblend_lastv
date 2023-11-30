import React, { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import PaymentGatewayPage from "../PaymentGatewayPage/PaymentGatewayPage";
import { loadStripe } from "@stripe/stripe-js";
import useCreatePaymentIntent from "../../Hooks/useCreatePaymentIntent";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import LoadingPage from "../LoadingPage/LoadingPage";
const stripePromise = loadStripe(
  "pk_test_51NcotDFDslnmTEHTC1GIVWyuc6ZGAfhWvQFlyE7v6Pno2VZeZ8gAHlwFPP1Euj5Rqdxyo58LMdOuLTQKIazuD13G00cUhvtJLe"
);
const LastCheckOutForm = () => {
  const amount =
    JSON.parse(window.localStorage.getItem("finalTotalPrice")) * 100;
  const {
    paymentIntent,
    error,
    createPaymentIntent,
  } = useCreatePaymentIntent();

  const [isPaymentIntentLoading, setIsPaymentIntentLoading] = useState(true);

  useEffect(() => {
    setIsPaymentIntentLoading(true);

    createPaymentIntent(amount.toString(), "AED")
      .then(() => setIsPaymentIntentLoading(false))
      .catch(() => setIsPaymentIntentLoading(false));
  }, [amount]);

  const options = {
    // Use the clientSecret from paymentIntentData
    clientSecret: paymentIntent ? paymentIntent.client_secret : "",
  };
  return isPaymentIntentLoading ? (
    <LoadingPage />
  ) : (
    <PageContainer>
      <Elements stripe={stripePromise} options={options}>
        <PaymentGatewayPage />
      </Elements>
    </PageContainer>
  );
};

export default LastCheckOutForm;
