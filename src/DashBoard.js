// DashBoard.js
import React, { useState } from 'react';
import './DashBoard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { itemList as initialItems } from './Items';

function DashBoard() {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialItems);
  const [currentArray, setCurrentArray] = useState([]);

  const handleClick = () => {
    // Navigate and hand off currentArray
    navigate('/ShoppingCart', { state: { currentArray } });
  };

  const handleIncrement = (name) => {
    // Update quantity in items
    setItems(prev =>
      prev.map(i => i.name === name
        ? { ...i, quantity: i.quantity + 1 }
        : i
      )
    );
    // Add one instance of that item to currentArray
    const item = items.find(i => i.name === name);
    if (item) setCurrentArray(prev => [...prev, item]);
  };

  const handleDecrement = (name) => {
    // Update quantity in items
    setItems(prev =>
      prev.map(i => i.name === name && i.quantity > 0
        ? { ...i, quantity: i.quantity - 1 }
        : i
      )
    );
    // Remove one instance from currentArray
    setCurrentArray(prev => {
      const idx = prev.findIndex(i => i.name === name);
      if (idx === -1) return prev;
      const copy = [...prev];
      copy.splice(idx, 1);
      return copy;
    });
  };

  return (
    <div className="App" style={{ backgroundColor: "rgb(224, 247, 207)" }}>
      <header className="App-header">Fresh Market</header>

      <h2 className="Classification-NavBar">
        {["Grocery","Produce","Bakery","Dairy","Meat & Seafood",
          "Frozen Foods","Beverages","Snacks","Household","Health"
        ].map(cat => (
          <button key={cat} className="Category-Button">{cat}</button>
        ))}
        <button className="Shopping-Cart-Button" onClick={handleClick}>
          <i className="bi bi-cart"></i>
        </button>
      </h2>

      <div className="Items-Container">
        {items.map(item => (
          <button
            key={item.name}
            className="Item-button"
            style={{ margin: "0 20px" }}
          >
            <div className="Product-Image">
              <img
                src={item.image}
                alt={item.name}
                style={{ position: "relative", right: "7px" }}
              />
              <p style={{
                position: "relative",
                top: "105px",
                right: "95px",
                fontSize: "12px",
                width: "200px"
              }}>
                {item.name}
              </p>
            </div>

            <div style={{
              position: "relative",
              top: "35px",
              left: "30px",
              display: "flex",
              marginBottom: "10px",
              fontSize: "15px"
            }}>
              <button
                className="Add-Remove-Item-Button"
                onClick={() => handleDecrement(item.name)}
                style={{ border: "none", background: "none" }}
              >
                <i className="bi bi-dash-circle"></i>
              </button>

              <span style={{ padding: "0 10px" }}>{item.quantity}</span>

              <button
                className="Add-Remove-Item-Button"
                onClick={() => handleIncrement(item.name)}
                style={{ border: "none", background: "none" }}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
export { initialItems as itemList };
