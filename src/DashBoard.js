import React, { useState } from 'react';
import './DashBoard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Shopping Cart Clicked");
    navigate('/ShoppingCart'); // Navigate to the ShoppingCart page
  };

  // Set up state to track counts for each item
  const [counts, setCounts] = useState({
    iceCream: 0,
    cloroxWipes: 0,
    toothpaste: 0,
    bodyWash: 0,
    strawberries: 0,
    avocados: 0,
    paperTowel: 0,
    chocolateChips: 0,
    sourdough: 0,
    chickenBreast: 0,
    reeseCookies: 0,
    salmon: 0,
    broccoli: 0,
    organicEggs: 0,
    milk: 0,
    pennePasta: 0,
    pretzelChips: 0,
    lasagna: 0,
    orangeJuice: 0,
    vitaminWater: 0,
  });

  const handleIncrement = (item) => {
    setCounts((prevCounts) => ({ ...prevCounts, [item]: prevCounts[item] + 1 }));
  };

  const handleDecrement = (item) => {
    if (counts[item] > 0) {
      setCounts((prevCounts) => ({ ...prevCounts, [item]: prevCounts[item] - 1 }));
    }
  };

  return (
    <div className="App" style={{ backgroundColor: "rgb(224, 247, 207)" }}>
      <header className="App-header">
        Fresh Market
      </header>

      <h2 className="Classification-NavBar">
        <button className="Category-Button">Grocery</button>
        <button className="Category-Button">Produce</button>
        <button className="Category-Button">Bakery</button>
        <button className="Category-Button">Dairy </button>
        <button className="Category-Button">Meat & Seafood </button>
        <button className="Category-Button">Frozen Foods</button>
        <button className="Category-Button">Beverages </button>
        <button className="Category-Button">Snacks</button>
        <button className="Category-Button">Household</button>
        <button className="Category-Button">Health</button>
        <button className="Shopping-Cart-Button" onClick={handleClick}>
          <i className="bi bi-cart"></i>
        </button>
      </h2>

      <div className="Items-Container">
        {/* Item 1: Ice Cream */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/076326-600x600-A.avif" alt="Product Image" style={{ position: "relative", right: "7px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Ice Cream</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px"  }}>
           <div style={{ position: "relative", top: "-6px", left: "2px" }}>
            <button onClick={() => handleDecrement('iceCream')} style={{border:"none", background:"none", fontSize:"24px"}}>-</button>
            {counts.iceCream}
            <button onClick={() => handleIncrement('iceCream')}style={{border:"none", background:"none"}}>+</button>
          </div>
          </div>
        </button>

        {/* Item 2: Clorox Wipes */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Clorox Disinfecting Wipes.jpg" alt="Product Image" style={{ position: "relative", right: "7px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Clorox Wipes</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
            <button onClick={() => handleDecrement('cloroxWipes')} style={{border:"none", background:"none"}}>-</button>
            {counts.cloroxWipes}
            <button onClick={() => handleIncrement('cloroxWipes')} style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 3: Toothpaste */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Colgate Total Toothpaste.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Tooth Paste</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
            <button onClick={() => handleDecrement('toothpaste')}style={{border:"none", background:"none"}}>-</button>
            {counts.toothpaste}
            <button onClick={() => handleIncrement('toothpaste')} style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 4: Dove Body Wash */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Dove Sensitive Skin Body Wash.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Dove Body Wash</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
            <button onClick={() => handleDecrement('bodyWash')}style={{border:"none", background:"none"}}>-</button>
            {counts.bodyWash}
            <button onClick={() => handleIncrement('bodyWash')}style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 5: Strawberries */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Fresh Strawberries.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Strawberries</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
            <button onClick={() => handleDecrement('strawberries')}style={{border:"none", background:"none"}}>-</button>
            {counts.strawberries}
            <button onClick={() => handleIncrement('strawberries')}style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 6: Avocados */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Organic Avocados.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Avocados</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
            <button onClick={() => handleDecrement('avocados')}style={{border:"none", background:"none"}}>-</button>
            {counts.avocados}
            <button onClick={() => handleIncrement('avocados')}style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 7: Paper Towel */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Paper Towel.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Bounty Paper</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
            <button onClick={() => handleDecrement('paperTowel')}style={{border:"none", background:"none"}}>-</button>
            {counts.paperTowel}
            <button onClick={() => handleIncrement('paperTowel')}style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 8: Chocolate Chips */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Publix Bakery Chocolate Chip Cookies.jpg" alt="Product Image" style={{ position: "relative", right: "6px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Chocolate Chips</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
            <button onClick={() => handleDecrement('chocolateChips')}style={{border:"none", background:"none"}}>-</button>
            {counts.chocolateChips}
            <button onClick={() => handleIncrement('chocolateChips')}style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 9: Sourdough */}
        <button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="Product-Image">
            <img src="/Assets/Publix Bakery Sourdough Bread.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
            <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Sourdough</p>
          </div>
          <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px" ,height:"20px"}}>
            <button onClick={() => handleDecrement('sourdough')}style={{border:"none", background:"none"}}>-</button>
            {counts.sourdough}
            <button onClick={() => handleIncrement('sourdough')}style={{border:"none", background:"none"}}>+</button>
          </div>
        </button>

        {/* Item 10: Chicken Breast */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix Chicken Tenderloins.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Chicken Breast</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('chickenBreast')}style={{border:"none", background:"none"}}>-</button>
    {counts.chickenBreast}
    <button onClick={() => handleIncrement('chickenBreast')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 11: Reese Cookies */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix Chocolate Chip Cookies.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Reese Cookies</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('reeseCookies')}style={{border:"none", background:"none"}}>-</button>
    {counts.reeseCookies}
    <button onClick={() => handleIncrement('reeseCookies')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 12: Salmon */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix Fresh Salmon Fillets.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Salmon</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px" ,height:"20px"}}>
    <button onClick={() => handleDecrement('salmon')}style={{border:"none", background:"none"}}>-</button>
    {counts.salmon}
    <button onClick={() => handleIncrement('salmon')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 13: Broccoli */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix Frozen Broccoli Florets.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Broccoli</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('broccoli')}style={{border:"none", background:"none"}}>-</button>
    {counts.broccoli}
    <button onClick={() => handleIncrement('broccoli')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 14: Organic Eggs */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix Grade A Cage Free Eggs.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Organic Eggs</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('organicEggs')}style={{border:"none", background:"none"}}>-</button>
    {counts.organicEggs}
    <button onClick={() => handleIncrement('organicEggs')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 15: Milk */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix GreenWise Organic Milk.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Milk</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('milk')} style={{border:"none", background:"none"}}>-</button>
    {counts.milk}
    <button onClick={() => handleIncrement('milk')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 16: Penne Pasta */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix GreenWise Organic Pasta.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Penne Pasta</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('pennePasta')}style={{border:"none", background:"none"}}>-</button>
    {counts.pennePasta}
    <button onClick={() => handleIncrement('pennePasta')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 17: Pretzel Chips */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Publix Pretzel Crisps.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Pretzel Chips</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('pretzelChips')}style={{border:"none", background:"none"}}>-</button>
    {counts.pretzelChips}
    <button onClick={() => handleIncrement('pretzelChips')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 18: Lasagna */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Stouffer's Frozen Lasagna.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Lasagna</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('lasagna')}style={{border:"none", background:"none"}}>-</button>
    {counts.lasagna}
    <button onClick={() => handleIncrement('lasagna')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 19: Orange Juice */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Tropicana Light Orange Juice.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Orange Juice</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px",height:"20px" }}>
    <button onClick={() => handleDecrement('orangeJuice')}style={{border:"none", background:"none"}}>-</button>
    {counts.orangeJuice}
    <button onClick={() => handleIncrement('orangeJuice')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

{/* Item 20: Vitamin Water */}
<button className="Item-button" style={{ marginLeft: "20px", marginRight: "20px" }}>
  <div className="Product-Image">
    <img src="/Assets/Vitaminwater Zero Sugar.avif" alt="Product Image" style={{ position: "relative", right: "6px" }} />
    <p style={{ position: "relative", top: "105px", right: "95px", fontSize: "12px", width: "200px" }}>Vitamin Water</p>
  </div>
  <div style={{ border: "1px solid black", borderRadius: "30px", position: "relative", top: "30px", width: "60px", fontSize: "18px", left: "33px", height:"20px" }}>
    <button onClick={() => handleDecrement('vitaminWater')}style={{border:"none", background:"none"}}>-</button>
    {counts.vitaminWater}
    <button onClick={() => handleIncrement('vitaminWater')}style={{border:"none", background:"none"}}>+</button>
  </div>
</button>

      </div>
    </div>
  );
}

export default DashBoard;
