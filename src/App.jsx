import { useState, useEffect } from 'react'
import axios from 'axios';
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { PageNotFound } from "./pages/PageNotFound";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const getCartData = async() => {
      const response = await axios.get("/api/cart-items?expand=product")
      setCart(response.data)
    }

  useEffect(() => {
    
    getCartData()

  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={getCartData} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart}  />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
