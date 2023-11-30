import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import { useSelector } from "react-redux";
import { baseURL } from "../../API/baseURL";
const url = `${window.location.origin}/paid`;
const PaymentGatewayPage = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const checkOutButtonStyle = {
    color: `${colorsData.mainColor}`,
  };
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const userIdentifier = JSON.parse(
      window.localStorage.getItem("userIdentifier")
    );
    const orderIDinDB = JSON.parse(window.localStorage.getItem("responseData"))
      .name;

    // const response = await fetch(
    //   `${baseURL}/orders/${userIdentifier}/${orderIDinDB}/orderPaymentStatus`,
    //   {
    //     method: "put",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify("Payment Done Via Card"),
    //   }
    // );
    // const responseData = await response.json();
  
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: url,
      },
    });

    if (result.error) {
      window.alert("Payment not done ❌");
      // Show error to your customer (for example, payment details incomplete)
      
    } else {
      const fieldToClear=["cartItems","cartTotalPrice","deliveryCost","finalTotalPrice"]
      fieldToClear.forEach(filed=>{
        localStorage.removeItem(filed)
      })

      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <PageContainer>
      <form
        onSubmit={handleSubmit}
        className={`w-full md:w-[50%] mx-auto flex items-center justify-center flex-col`}
      >
        <PaymentElement />
        <button
          style={checkOutButtonStyle}
          className={` mt-4 px-4 py-1 rounded-md text-xl font-medium border border-green-500`}
        >
          Pay {window.localStorage.getItem("cartTotalPrice")} Securely
        </button>
      </form>
    </PageContainer>
  );
};

export default PaymentGatewayPage;
