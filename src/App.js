import logo from './logo.svg';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import Items from './Items';
import ShoppingCart from './ShoppingCart';
import TransactionScreen from './TransactionScreen';
import Results from './Results';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />} /> {/* Home page */}
        <Route path="/" element={<DashBoard />} /> {/* Home page */}
        <Route path="/" element={<Items />} /> {/* Items page */}
       <Route path="/transactionScreen" element={<TransactionScreen />} /> {/* Transaction  page */}
        <Route path="/results" element={<Results />} /> {/* Items page */}
        <Route path="/shoppingCart" element={<ShoppingCart />} /> {/* Shopping cart page */}
</Routes>
    </Router>
  );
}

export default App;
