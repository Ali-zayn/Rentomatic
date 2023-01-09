import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import "./Footer.css";

function Footer() {
  return (
  <div className="footer">
    <a href="https://facebook.com"><BsFacebook /></a>
    <a href="https://instagram.com"><AiFillInstagram /></a>
    <a href="https://twitter.com"><AiFillTwitterCircle /></a>
    <a href="https://linkedin.com"><BsLinkedin /></a>
    <hr></hr>
    <p>Copyright © 2023, Rentomatic </p>

  </div>
  );
}

export default Footer;