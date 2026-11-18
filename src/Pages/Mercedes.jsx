import Cards from "../Components/Cards";
import Mercedes1 from "../assets/Mercedes1.jpg";
import Mercedes2 from "../assets/Mercedes2.jpg";
import Mercedes3 from "../assets/Mercedes4.jpg";
import Mercedes4 from "../assets/Mercedes3.jpg";
import "./Mercedes.css";
import { useState } from "react";

const cars = [
  { id: 1, src: Mercedes1, title: "Mercedes C-Class", price: "70,000", description: "A compact luxury sedan with polished styling, everyday comfort, and a composed ride." },
  { id: 2, src: Mercedes2, title: "Mercedes GLE SUV", price: "90,000", description: "A versatile SUV offering a spacious cabin, confident road presence, and flexible utility." },
  { id: 3, src: Mercedes3, title: "Mercedes E-Class", price: "100,000", description: "An executive sedan with a quiet interior, elegant details, and a smooth driving character." },
  { id: 4, src: Mercedes4, title: "Luxury Mercedes", price: "190,000", description: "A premium Mercedes with distinctive design, upscale comfort, and refined road manners." },
];

function Mercedes() {
  const [show, setShow] = useState(false);
  return (
    <div className="Mercedes-page">
      <p className="page-title">[Mercedes] عالم الفخامة من شركة</p>

      <div className="Mercedes">
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

export default Mercedes;