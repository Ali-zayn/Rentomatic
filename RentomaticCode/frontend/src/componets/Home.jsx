import Navbar from "./Navbar";
import Footer from "./Footer";
import search from "../Images/search.png";
import luxury1 from "../Images/luxury-real-estate1.jpg";
import luxury2 from "../Images/luxury-real-estate2.jpg";
import luxury3 from "../Images/luxury-real-estate3.jpg";
import luxury4 from "../Images/luxury-real-estate4.jpg";
import favorite1 from "../Images/favorite1.jfif";
import favorite2 from "../Images/favorite2.jfif";
import favorite3 from "../Images/favorite3.jfif";
import favorite4 from "../Images/favorite4.jfif";
import favorite5 from "../Images/favorite5.jfif";
import Baalbek from "../Images/Baalbek.jpg";
import Beirut from "../Images/Beirut.jpg";
import Tyre from "../Images/Tyre.jpg";
import Jounieh from "../Images/Jounieh.jpg";
import Batroun from "../Images/Batroun.jfif";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Navbar />

        <div class="home-container">
          <h1>Find Your Next Stay</h1>
          <div class="search-bar">
            <form>
              <div>
                <label className="location-input">Location</label>
                <input type="text" placeholder="Where are you going?" />
              </div>
              <div>
                <label>Check in</label>
                <input type="text" placeholder="Add Date" />
              </div>
              <div>
                <label>Check out</label>
                <input type="text" placeholder="Add Date" />
              </div>
              <div>
                <label>Guest</label>
                <input type="text" placeholder="Add Guest" />
              </div>
              <button type="submit">
                <img src={search} alt="" className="search-image" />
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="container">
        <h2 className="sub-title">Luxury Places</h2>
        <div class="luxury-places">
          <div>
            <img src={luxury1} />
            <span>
              <h3>Beirut</h3>
              <p>starting from 250$</p>
            </span>
          </div>
          <div>
            <img src={luxury2} />
            <span>
              <h3>Tyre</h3>
              <p>starting from 200$</p>
            </span>
          </div>
          <div>
            <img src={luxury3} />
            <span>
              <h3>Jounieh</h3>
              <p>starting from 200$</p>
            </span>
          </div>
          <div>
            <img src={luxury4} />
            <span>
              <h3>Byblos</h3>
              <p>starting from 150$</p>
            </span>
          </div>
        </div>
      </div>
      <h2 className="sub-title">Favorite Places</h2>
      <div className="favorite-places">
        <div>
          <img src={Baalbek} />
          <h3>Baalbek</h3>
        </div>
        <div>
          <img src={Beirut} />
          <h3>Beirut</h3>
        </div>
        <div>
          <img src={Jounieh} />
          <h3>Jounieh</h3>
        </div>
        <div>
          <img src={Tyre} />
          <h3>Tyre</h3>
        </div>
        <div>
          <img src={Batroun} />
          <h3>Batroun</h3>
        </div>
      </div>
      <div className="explore">
        <h3>Explore <br></br>amazing places</h3>
        <p>Great opportunity to explore <br></br> more places in city of your choice</p>
        <a href="#" className="explore-btn">Explore more</a>
      </div>
      <div className="about-us">
        <h2>About Rentomatic</h2>
        <p>As an innovative residential real estate firm, we empower
             our agents so they have more time for advising their clients. With the solutions-driven mindset of
             a startup and the sophistication of a luxury brand, Rentomatic is the future of real estate.</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
