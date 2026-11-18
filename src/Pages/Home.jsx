import { Link } from "react-router-dom";
import BMW from "../assets/Bmw.webp";
import Mercedes from "../assets/Mercedes.webp";
import Audi from "../assets/Audi.jpg";
import Ferrari from "../assets/Ferrari.jpg";
import MyCar from '../assets/MyCar.jpg';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <p className="top-bar">New 2026 Collection Available Now</p>

      <div className="hero">
        <img src={MyCar} className="hero-img" alt="car" />

        <div className="hero-text">
          <h1>
            Find Your <span>Dream Car</span>
          </h1>
          <p>أفخم السيارات العالمية بمكان واحد</p>
          <a href="#brands" className="hero-btn">
            Explore Brands
          </a>
        </div>
      </div>

      <div className="brands" id="brands">
        <h2 className="brands-title">Brands</h2>

        <div className="brand-grid">
          <Link to="/BMW" className="brand-tile bmw">
            <img src={BMW} alt="BMW" />
            <span>BMW</span>
          </Link>

          <Link to="/Mercedes" className="brand-tile mercedes">
            <img src={Mercedes} alt="Mercedes" />
            <span>Mercedes</span>
          </Link>

          <Link to="/Audi" className="brand-tile audi">
            <img src={Audi} alt="Audi" />
            <span>Audi</span>
          </Link>

          <Link to="/Ferrari" className="brand-tile ferrari">
            <img src={Ferrari} alt="Ferrari" />
            <span>Ferrari</span>
          </Link>
        </div>
      </div>
    </div>
  );
}



export default Home;