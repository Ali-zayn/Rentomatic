import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Estate.css";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { GiVacuumCleaner } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";

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
          <li>
            <i>
              <AiOutlineHome />
            </i>
            Entire Home
            <span>You will have the entire flat for you.</span>
          </li>
          <li>
            <i>
              <GiVacuumCleaner />
            </i>
            Enhanced Clean
            <span>This host has committed to high cleaning process.</span>
          </li>
          <li>
            <i>
              <CiLocationOn />
            </i>
            Great location
            <span>
              90% of recent guests gave the location a 5 stars rating.
            </span>
          </li>
          <li>
            <i>
              <AiOutlineHeart />
            </i>
            Great Check-in Experience
            <span>
              100% of recent guests gave the Check-in Experience a 5 stars
              rating
            </span>
          </li>
        </ul>
        <hr className="line" />
        <p className="property-desc">
          RARE Opportunity to rent an apartment on the Downtown of Beirut with
          beach access and panoramic sea view You can build 7 floors resort
          mixed between hotel or hotel apartments What the benefits what is the
          construction cost what is the approximate income for the hotel what is
          the value of the hotel after completion If you are an investor or
          International investment company, contact us for full presentation and
          ready business plan for this opportunity.
        </p>
        <hr className="line" />
        <div className="location-map">
          <h3>Location on map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13246.365852839277!2d35.47617350781249!3d33.900174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16dbc5e807cd%3A0x3a0a0a6969dccdfc!2sRadisson%20Blu%20Martinez%20Hotel%2C%20Beirut!5e0!3m2!1sen!2slb!4v1674558267180!5m2!1sen!2slb"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <b>Downtown, Beirut, Lebanon</b>
          <p>It's like home away from home</p>
          <hr className="line" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Estate;
