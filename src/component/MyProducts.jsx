import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/order/my-orders", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch orders");
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="loading-text">Loading your orders...</h3>;
  }

  if (orders.length === 0) {
    return (
      <div className="empty-orders">
        <h2>No orders yet</h2>
        <p>Your empire awaits its first acquisition.</p>
        <button onClick={() => navigate("/collections")}>
          Explore Products
        </button>
      </div>
    );
  }

  return (
    <section className="orders-page">
      <h1>Your Orders</h1>

      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-card" key={order.orderId}>
            <img
              src={order.productImage}
              alt={order.productName}
              className="order-image"
            />

            <div className="order-info">
              <h3>{order.productName}</h3>
              <p className="category">{order.productCategory}</p>

              <div className="order-meta">
                <span className="price">₹{order.price}</span>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>

              <p className="date">
                Purchased on{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>

              <button
                className="view-btn"
                onClick={() =>
                  navigate(`/product/${order.productId}`)
                }
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyOrders;
