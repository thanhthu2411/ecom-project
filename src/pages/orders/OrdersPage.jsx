import "./OrdersPage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

import { OrderContainer } from "./OrderContainer";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((res) => {
      setOrders(res.data);
    });
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
