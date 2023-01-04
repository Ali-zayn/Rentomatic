import homeImage from '../Images/HomeImage.jpg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={homeImage} className="App-logo" alt="logo" />
    
      </header>
    </div>
  );
}

export default Home;