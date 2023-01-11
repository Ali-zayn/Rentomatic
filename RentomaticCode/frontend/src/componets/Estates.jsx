import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Estates.css";
import favorite1 from "../Images/favorite1.jfif";
import favorite2 from "../Images/favorite2.jfif";
import favorite3 from "../Images/favorite3.jfif";
import favorite4 from "../Images/favorite4.jfif";
import favorite5 from "../Images/favorite5.jfif";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Estates() {
  return (
    <div>
      <Navbar />
      <div className="estates-container">
        <div className="estates">
          <p>200+ options</p>
          <h1>Recommended Places for you</h1>
          <div className="estate">
            <div className="estate-img">
              <img src={favorite1} />
            </div>
            <div className="estate-info">
              <p>Private Villa in Beirut</p>
              <h3>Deluxe Queen Room With Street View</h3>
              <p>3 bedrooms / 2 bathrooms / Wifi / Kitchen </p>
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
              <div className="estate-price">
                <p>2 Guests</p>
                <h4>
                  $ 100 <span>/ day</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="estate">
            <div className="estate-img">
              <img src={favorite2} />
            </div>
            <div className="estate-info">
              <p>Private Villa in Beirut</p>
              <h3>Deluxe Queen Room With Street View</h3>
              <p>3 bedrooms / 2 bathrooms / Wifi / Kitchen </p>
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
              <div className="estate-price">
                <p>2 Guests</p>
                <h4>
                  $ 100 <span>/ day</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="estate">
            <div className="estate-img">
              <img src={favorite3} />
            </div>
            <div className="estate-info">
              <p>Private Villa in Beirut</p>
              <h3>Deluxe Queen Room With Street View</h3>
              <p>3 bedrooms / 2 bathrooms / Wifi / Kitchen </p>
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
              <div className="estate-price">
                <p>2 Guests</p>
                <h4>
                  $ 100 <span>/ day</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="estate">
            <div className="estate-img">
              <img src={favorite4} />
            </div>
            <div className="estate-info">
              <p>Private Villa in Beirut</p>
              <h3>Deluxe Queen Room With Street View</h3>
              <p>3 bedrooms / 2 bathrooms / Wifi / Kitchen </p>
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
              <div className="estate-price">
                <p>2 Guests</p>
                <h4>
                  $ 100 <span>/ day</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="estate">
            <div className="estate-img">
              <img src={favorite5} />
            </div>
            <div className="estate-info">
              <p>Private Villa in Beirut</p>
              <h3>Deluxe Queen Room With Street View</h3>
              <p>3 bedrooms / 2 bathrooms / Wifi / Kitchen </p>
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
              <div className="estate-price">
                <p>2 Guests</p>
                <h4>
                  $ 100 <span>/ day</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-estates"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Estates;
