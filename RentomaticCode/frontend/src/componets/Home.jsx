import Navbar from "./Navbar";
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
          <img src={favorite1} />
          <h3>Byblos</h3>
        </div>
        <div>
          <img src={favorite2} />
          <h3>Byblos</h3>
        </div>
        <div>
          <img src={favorite3} />
          <h3>Byblos</h3>
        </div>
        <div>
          <img src={favorite4} />
          <h3>Byblos</h3>
        </div>
        <div>
          <img src={favorite5} />
          <h3>Byblos</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
