import RentomaticLogo from "../Images/RentomaticLogo.png";
import {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import "./Navbar.css";

function Navbar() {


  return (
    <nav className="Navbar">
      <img src={RentomaticLogo} className="logo" />
      <ul class="nav-links">
        <li>
          <a href="#">Popular Places</a>
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
