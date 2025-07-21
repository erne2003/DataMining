// ShoppingCart.js
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import './ShoppingCart.css';

function ShoppingCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentArray = location.state?.currentArray || [];

  return (
    <div className="ShoppingCart">
      <h2 style={{ position: "relative", left: "500px" }}>
        Your Shopping Cart
      </h2>

      {/* Home button */}
      <button
        onClick={() => navigate('/DashBoard')}
        style={{
          position: "relative",
          left: "50px",
          border: "none",
          background: "none",
          color: "black",
          fontSize: "24px"
        }}
        aria-label="Go to Dashboard"
      >
        <i className="bi bi-house"></i>
      </button>

      {/* Table headers */}
      <div style={{
        display: "flex",
        gap: "100px",
        position: "relative",
        left: "480px",
        top: "40px",
        fontWeight: "bold"
      }}>
        <div>Item</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>

      {/* Cart items */}
      <div
        className="Transaction-Body"
        style={{
          position: "relative",
          left: "480px",
          top: "80px",
          border: "1px solid black",
          padding: "10px",
          width: "400px"
        }}
      >
        {currentArray.length > 0 ? (
          currentArray.map((item, idx) => (
            <div
              key={idx}
              className="Transaction-Item"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              <span style={{ flex: 1 }}>{item.name}</span>
              <span style={{ width: "50px", textAlign: "center" }}>
                {item.quantity}
              </span>
              <span style={{ width: "70px", textAlign: "right" }}>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
