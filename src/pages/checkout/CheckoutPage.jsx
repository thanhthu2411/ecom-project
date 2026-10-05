import "./CheckoutPage.css";
import "../../components/CheckoutHeader";
import { CheckoutHeader } from "../../components/CheckoutHeader";
import axios from "axios";
import { useState, useEffect } from "react";

import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const getCheckoutData = async () => {
      const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
      const paymentResponse = await axios.get("/api/payment-summary");
      setDeliveryOptions(response.data);
      setPaymentSummary(paymentResponse.data)
    };

    getCheckoutData();

  }, [cart]);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />

          {paymentSummary && (
            <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
          )}
        </div>
      </div>
    </>
  );
}
