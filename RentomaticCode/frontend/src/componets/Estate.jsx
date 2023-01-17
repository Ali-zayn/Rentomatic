import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Estate.css";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
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
        <hr className="line"></hr>
      </div>
      <Footer />
    </div>
  );
}

export default Estate;
