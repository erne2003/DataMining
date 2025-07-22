// ShoppingCart.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

function ShoppingCart() {
  const navigate = useNavigate();

  // Load the saved items array (with per-item quantities) from sessionStorage
  const items = JSON.parse(sessionStorage.getItem('shoppingItems') || '[]');

  // Only keep those with quantity > 0
  const filtered = items.filter(i => i.quantity > 0);

  // Store transaction and reset cart & quantities
  const handlePay = () => {
    // Append this transaction to history
    const history = JSON.parse(sessionStorage.getItem('transactions') || '[]');
    history.push(filtered);
    sessionStorage.setItem('transactions', JSON.stringify(history));

    // Clear stored cart so Dashboard resets counts
    sessionStorage.removeItem('shoppingItems');
    sessionStorage.removeItem('shoppingCart');

    // Go view all transactions
    navigate('/dashBoard');
  };

  return (
    <div className="ShoppingCart">
      <h2 style={{ position: "relative", left: "500px", top: "40px" }}>
        Your Shopping Cart
      </h2>

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
        <div style={{ position: "relative", top: "30px", left:"50px" }}>Item</div>
        <div style={{ position: "relative", left: "70px", top: "30px" }}>Quantity</div>
        <div style={{ position: "relative", left: "17px", top: "30px" }}>Total</div>
      </div>

      {/* Grouped cart items */}
      <div
        className="Transaction-Body"
        style={{
          position: "relative",
          left: "460px",
          top: "80px",
          border: "1px solid black",
          padding: "10px",
          width: "450px"
        }}
      >
        {filtered.length > 0 ? (
          filtered.map(item => (
            <div
              key={item.name}
              className="Transaction-Item"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                width: "380px",
                gap: "20px"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "30px", height: "30px" }}
              />
              <span style={{ flex: 1, width:"30px" }}>{item.name}</span>
              <span style={{
                width: "50px",
                textAlign: "center",
                position: "relative",
                left: "-5px"
              }}>
                {item.quantity}
              </span>
              <span style={{
                width: "70px",
                textAlign: "right",
                position: "relative",
                left: "25px"
              }}>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px"
          }}>
            Your cart is empty.
          </p>
        )}
      </div>

      <button
        className="Payment-Button"
        onClick={handlePay}
        style={{
          position: "relative",
          left: "600px",
          top: "200px",
          width: "100px"
        }}
      >
        Pay
      </button>
    </div>
  );
}

export default ShoppingCart;
