
import Audi2 from "../assets/Audi2.jpg";


import "./Audi.css";
import Cards from "../Components/Cards";

const cars = [
  { id: 1, src: Audi2, title: "Audi A4 sedan", price: "87,000" },
  { id: 2, src: Audi2, title: "Audi A6 Executive", price: "72,000" },
  { id: 3, src: Audi2, title: "Audi Q7 Family SUV", price: "93,000" },
  { id: 4, src: Audi2, title: "Audi R8 SuperCar", price: "60,000" },
];

function Audi() {
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
            button={<button className="buy-btn">View Details</button>}
          />
        ))}
      </div>
    </div>
  );
}

export default Audi;