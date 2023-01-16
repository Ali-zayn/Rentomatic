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
        <div className="filter-estates">
          <div className="filter-estates-sideBar">
            <h2>Select Filters</h2>
            <h3>Property Type</h3>
            <div className="filters-selects">
              <select className="trans_select">
                <option>Type</option>
                <option>Apartment</option>
                <option>Studio</option>
                <option>office</option>
                <option>Villa</option>
              </select>
            </div>
            <div className="filters-selects">
              <select className="trans_select">
                <option>Rent Period</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="filters-selects">
              <select className="trans_select">
                <option>Rent Frequency</option>
                <option>Below 100$</option>
                <option>Below 500$</option>
                <option>Below 1000$</option>
                <option>Above 1000$</option>
              </select>
            </div>
            <div className="filters-selects">
              <select className="trans_select">
                <option>Rooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="filters-selects">
              <select className="trans_select">
                <option>Bathrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Estates;
