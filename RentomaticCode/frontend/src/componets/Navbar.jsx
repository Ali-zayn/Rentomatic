import RentomaticLogo from "../Images/RentomaticLogo.png";
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import "./Navbar.css";

function Navbar() {


  return (
    <nav className="Navbar">
      <img src={RentomaticLogo} className="logo" />
      <ul class="nav-links">
        <li>
        <Link to={`/`} Link style={{ textDecoration: "none" }}>
          <a href="#">Home</a>
          </Link>
        </li>
        <li>
        <Link to={`/Estates`} Link style={{ textDecoration: "none" }}>
          <a href="#">Estates</a>
          </Link>
        </li>
        <li>
        <Link to={`/Estate`} Link style={{ textDecoration: "none" }}>
          <a href="#">Estate</a>
          </Link>
        </li>
      </ul>
      <a href="#" className="register-btn">
        Register Now
      </a>
    </nav>

    
  );

}

export default Navbar;
