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
      <h2 style={{ position: "relative", left: "500px", top:"40px" }}>
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
        <div style={{position:"relative", top:"30px"}}>Item</div>
        <div style={{position:"relative", left:"50px",top:"30px"}}>Quantity</div>
        <div style={{position:"relative", left:"17px",top:"30px"}}>Total</div>
      </div>

      {/* Cart items */}
      <div
        className="Transaction-Body"
        style={{
          position: "relative",
          left: "450px",
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
                marginBottom: "8px",
                width:"350px",
                gap:"10px"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              <span style={{ flex: 1 }}>{item.name}</span>
              <span style={{ width: "50px", textAlign: "center",position:"relative", left:"-5px"}}>
                {item.quantity}
              </span>
              <span style={{ width: "70px", textAlign: "right",position:"relative", left:"25px"}}>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p style={{display:"flex", justifyContent:"center", marginTop:"12px"}}>Your cart is empty.</p>
        )}
      </div>
    <button className="Payment-Button" style={{position:"relative", left:"600px", top:"200px", width:"100px"}}>Pay</button>
    </div>
  );
}

export default ShoppingCart;
