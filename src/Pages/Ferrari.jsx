import Cards from "../Components/Cards";
import Ferrari1 from "../assets/Ferrari1.jpg";

import Ferrari4 from "../assets/Ferrari2.jpg";
import "./Ferrari.css";
import { useState } from "react";

const cars = [
  { id: 1, src: Ferrari1, title: "Ferrari Roma", price: "62,000", description: "An elegant grand touring coupe with flowing lines and a comfortable, refined cabin." },
  { id: 2, src: Ferrari1, title: "Ferrari portoFina", price: "75,000", description: "A stylish open-top cruiser designed for relaxed drives and memorable road trips." },
  { id: 3, src: Ferrari4, title: "Ferrari 296 GTB", price: "98,000", description: "A modern sports car with sculpted bodywork, agile handling, and a driver-focused cockpit." },
  { id: 4, src: Ferrari4, title: "Ferrari SF90", price: "130,000", description: "A dramatic supercar combining race-inspired character with striking contemporary design." },
];

function Ferrari() {
  const [show, setShow] = useState(false);
  return (
    <div className="Ferrari-page">
      <p className="page-title1">الفاخره [Ferrari]نخبه </p>

      <div className="Ferrari">
        {cars.map((car) => (
          <Cards
            key={car.id}
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
        ))}
      </div>
    </div>
  );
}

export default Ferrari;