import logo from './logo.svg';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import Items from './Items';
import ShoppingCart from './ShoppingCart';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />} /> {/* Home page */}
        <Route path="/" element={<Items />} /> {/* Items page */}
        <Route path="/shoppingCart" element={<ShoppingCart />} /> {/* Shopping cart page */}
</Routes>
    </Router>
  );
}

export default App;
