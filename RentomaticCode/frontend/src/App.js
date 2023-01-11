import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./componets/Home"
import Estates from './componets/Estates';

function App() {
  return (
    <Router>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Estates" element={< Estates />} />

      </Routes>
    </>
  </Router>

  );
}

export default App;
