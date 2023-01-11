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
        <Link to={`/MyEstates`} Link style={{ textDecoration: "none" }}>
          <a href="#">Popular Places</a>
          </Link>
        </li>
        <li>
          <a href="#">Travel Outside</a>
        </li>
        <li>
          <a href="#">Online Packages</a>
        </li>
      </ul>
      <a href="#" className="register-btn">
        Register Now
      </a>
    </nav>

    
  );

}

export default Navbar;
