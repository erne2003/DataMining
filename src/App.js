import logo from './logo.svg';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import Items from './Items';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} /> {/* Home page */}
        <Route path="/" element={<Items />} /> {/* Items page */}
</Routes>
    </Router>
  );
}

export default App;
