import RentomaticLogo from "../Images/RentomaticLogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={RentomaticLogo} class="logo" />
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
      <a href="#" class="register-btn">
        Register Now
      </a>
    </nav>
  );
}

export default Navbar;
