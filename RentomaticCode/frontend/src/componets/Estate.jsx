import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Estate.css";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import {AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import {GiVacuumCleaner } from "react-icons/gi";
import {CiLocationOn } from "react-icons/ci";

import favorite1 from "../Images/favorite1.jfif";
import favorite2 from "../Images/favorite2.jfif";
import favorite3 from "../Images/favorite3.jfif";
import favorite4 from "../Images/favorite4.jfif";
import favorite5 from "../Images/favorite5.jfif";

function Estate() {
  return (
    <div>
      <Navbar />
      <div className="estate-details">
        <div className="estate-title">
          <h1>House Wagen</h1>
          <div className="estate-row">
            <div>
              <i>
                <BsStarFill />
              </i>
              <i>
                <BsStarFill />
              </i>
              <i>
                <BsStarFill />
              </i>
              <i>
                <BsStarHalf />
              </i>
              <i>
                <BsStar />
              </i>
              <span>245 Reviews</span>
            </div>
            <div>
              <p>Location: Downtown, Beirut</p>
            </div>
          </div>
        </div>
        <div className="estate-gallery">
          <div className="gallery-main-img">
            <img src={favorite1} />
          </div>
          <div>
            <img src={favorite2} />
          </div>
          <div>
            <img src={favorite3} />
          </div>
          <div>
            <img src={favorite4} />
          </div>
          <div>
            <img src={favorite5} />
          </div>
          <div>
            <img src={favorite1} />
          </div>
          <div>
            <img src={favorite2} />
          </div>
        </div>
        <div className="small-details">
            <h2>Entire rental unit hosted by Joseph</h2>
            <p>2 guests &nbsp; &nbsp; 2 beds &nbsp; &nbsp; 1 bathrooms</p>
            <h4>$ 100 / day</h4>
        </div>
        <hr className="line" />
        <form className="check-form">
            <div>
                <label>Check-in</label>
                <input type="text" placeholder="Add Date" />
            </div>
            <div>
                <label>Check-out</label>
                <input type="text" placeholder="Add Date" />
            </div>
            <div className="guest-field">
                <label>Guest</label>
                <input type="text" placeholder="2 Guests" />
            </div>
            <button type="submit">Check Availability</button>

        </form>
        <ul className="details-list">
          <li><i><AiOutlineHome /></i>Entire Home
            <span>You will have the entire flat for you.</span>
          </li>
          <li><i><GiVacuumCleaner /></i>Enhanced Clean
            <span>This host has committed to high cleaning process.</span>
          </li>
          <li><i><CiLocationOn /></i>Great location
            <span>90% of recent guests gave the location a 5 stars rating.</span>
          </li>
          <li><i><AiOutlineHeart /></i>Great Check-in Experience
            <span>100% of recent guests gave the Check-in Experience a 5 stars rating</span>
          </li>
        </ul>
        <hr className="line" />
      </div>
      <Footer />
    </div>
  );
}

export default Estate;
