// DashBoard.js
import React, { useState, useEffect } from 'react';
import './DashBoard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { itemList as initialItems } from './Items';

function DashBoard() {
  const navigate = useNavigate();

  // load saved items (with quantities) or fall back to initialItems
  const [items, setItems] = useState(() => {
    const saved = sessionStorage.getItem('shoppingItems');
    return saved ? JSON.parse(saved) : initialItems;
  });

  // load saved cart or start empty
  const [currentArray, setCurrentArray] = useState(() => {
    const saved = sessionStorage.getItem('shoppingCart');
    return saved ? JSON.parse(saved) : [];
  });

  // persist items whenever they change
  useEffect(() => {
    sessionStorage.setItem('shoppingItems', JSON.stringify(items));
  }, [items]);

  // persist cart whenever it changes
  useEffect(() => {
    sessionStorage.setItem('shoppingCart', JSON.stringify(currentArray));
  }, [currentArray]);

  // filter state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    "Grocery","Produce","Bakery","Dairy","Meat & Seafood",
    "Frozen Foods","Beverages","Snacks","Household","Health"
  ];

  // pick items matching the selected category (or all if none)
  const displayedItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  const handleClick = () => {
    navigate('/ShoppingCart', { state: { currentArray } });
  };

  const handleIncrement = (name) => {
    setItems(prev =>
      prev.map(i =>
        i.name === name ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
    const item = items.find(i => i.name === name);
    if (item) setCurrentArray(prev => [...prev, item]);
  };

  const handleDecrement = (name) => {
    setItems(prev =>
      prev.map(i =>
        i.name === name && i.quantity > 0
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
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
 <button
          className="Transaction-Menu"
          onClick={() => navigate('/TransactionScreen')}
        >
          <i className="bi bi-list"></i>
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className="Category-Button"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <button className="Shopping-Cart-Button" onClick={handleClick}>
          <i className="bi bi-cart"></i>
        </button>
      </h2>

      <div className="Items-Container">
        {displayedItems.map(item => (
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
