
import Audi2 from "../assets/Audi2.jpg";


import "./Audi.css";
import Cards from "../Components/Cards";
import { useState } from "react";

const cars = [
  { id: 1, src: Audi2, title: "Audi A4 sedan", price: "87,000", description: "A comfortable sedan with refined styling, smooth road manners, and everyday practicality." },
  { id: 2, src: Audi2, title: "Audi A6 Executive", price: "72,000", description: "An executive sedan with a spacious cabin, polished design, and a relaxed driving feel." },
  { id: 3, src: Audi2, title: "Audi Q7 Family SUV", price: "93,000", description: "A versatile family SUV offering generous space, flexible seating, and premium comfort." },
  { id: 4, src: Audi2, title: "Audi R8 SuperCar", price: "70,000", description: "A striking sports car designed for sharp handling, strong acceleration, and an engaging drive." },
   { id: 4, src: Audi2, title: "Audi R8 SuperCar", price: "80,000", description: "A performance-focused coupe with bold styling, responsive control, and a driver-centered cabin." },
];

function Audi() {
  const [show, setShow] = useState(false);
  return (
    <div className="Audi-page">
      <p className="page-title"> [Audi]اسطول سيارات </p>

      <div className="Audi">
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

export default Audi;