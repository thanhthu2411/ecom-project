import "./OrdersPage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

import { OrderContainer } from "./OrderContainer";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    getOrderData();
  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return <OrderContainer order={order} />;
          })}
        </div>
      </div>
    </>
  );
}
