import Cards from "../Components/Cards";
import Mercedes1 from "../assets/Mercedes1.jpg";
import Mercedes2 from "../assets/Mercedes2.jpg";
import Mercedes3 from "../assets/Mercedes4.jpg";
import Mercedes4 from "../assets/Mercedes3.jpg";
import "./Mercedes.css";

const cars = [
  { id: 1, src: Mercedes1, title: "Mercedes C-Class", price: "70,000" },
  { id: 2, src: Mercedes2, title: "Mercedes GLE SUV", price: "90,000" },
  { id: 3, src: Mercedes3, title: "Mercedes E-Class", price: "100,000" },
  { id: 4, src: Mercedes4, title: "Luxury Mercedes", price: "190,000" },
];

function Mercedes() {
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
            button={<button className="buy-btn">View Details</button>}
          />
        ))}
      </div>
    </div>
  );
}

export default Mercedes;