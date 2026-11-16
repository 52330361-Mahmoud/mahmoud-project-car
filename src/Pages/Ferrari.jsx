import Cards from "../Components/Cards";
import Ferrari1 from "../assets/Ferrari1.jpg";

import Ferrari4 from "../assets/Ferrari2.jpg";
import "./Ferrari.css";

const cars = [
  { id: 1, src: Ferrari1, title: "Ferrari Roma", price: "62,000" },
  { id: 2, src: Ferrari1, title: "Ferrari portoFina", price: "75,000" },
  { id: 3, src: Ferrari4, title: "Ferrari 296 GTB", price: "98,000" },
  { id: 4, src: Ferrari4, title: "Ferrari SF90", price: "130,000" },
];

function Ferrari() {
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
            
          />
        ))}
      </div>
    </div>
  );
}

export default Ferrari;