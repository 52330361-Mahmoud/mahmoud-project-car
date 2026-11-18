import Cards from "../Components/Cards";
import BMW1 from "../assets/Bmw1.jpg";
import BMW2 from "../assets/Bmw2.jpg";
import BMW3 from "../assets/Bmw3.jpg";
import BMW4 from "../assets/Bmw4.jpg";
import "./BMW.css";
import { useState } from "react";

const cars = [
  { id: 1, src: BMW1, title: "BMW M3 Coupe", price: "62,000", description: "A focused sports coupe with precise handling, strong acceleration, and a driver-centered cabin." },
  { id: 2, src: BMW2, title: "BMW x5 M-Sport", price: "75,000", description: "A spacious performance SUV combining confident road manners with practical everyday comfort." },
  { id: 3, src: BMW3, title: "BMW i7 Electric", price: "98,000", description: "An all-electric luxury sedan offering quiet travel, modern technology, and a refined interior." },
  { id: 4, src: BMW4, title: "BMW M8 Competition", price: "130,000", description: "A powerful grand tourer featuring bold styling, responsive control, and premium craftsmanship." },
];

function BMW() {
  const [show, setShow] = useState(false);
  return (
    <div className="BMW-page">
      <h2 className="page-title">BMW أحدث سيارات</h2>

      <div className="cards">
        {cars.map((car) => (
          <div className="card-box" key={car.id}>
            <Cards
              src={car.src}
              title={car.title}
              Price={car.price}
              button={
                <>
                  <button
                    className="buy-btn"
                    onClick={() => setShow(!show)}
                  >
                    View Details
                  </button>
                  {show && (
                    <div className="car-description">
                      <h3>Description</h3>
                      <p>{car.description}</p>
                    </div>
                  )}
                </>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BMW;