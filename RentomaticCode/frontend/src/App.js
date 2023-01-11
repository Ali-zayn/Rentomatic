import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./componets/Home"

function App() {
  return (
    <Router>
    <>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </>
  </Router>

  );
}

export default App;
