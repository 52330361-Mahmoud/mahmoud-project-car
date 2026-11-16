import Cards from "../Components/Cards";
import BMW1 from "../assets/Bmw1.jpg";
import BMW2 from "../assets/Bmw2.jpg";
import BMW3 from "../assets/Bmw3.jpg";
import BMW4 from "../assets/Bmw4.jpg";
import "./BMW.css";

const cars = [
  { id: 1, src: BMW1, title: "BMW M3 Coupe", price: "62,000" },
  { id: 2, src: BMW2, title: "BMW x5 M-Sport", price: "75,000" },
  { id: 3, src: BMW3, title: "BMW i7 Electric", price: "98,000" },
  { id: 4, src: BMW4, title: "BMW M8 Competition", price: "130,000" },
];

function BMW() {
  return (
    <div className="BMW-page">
      <h2 className="page-title">BMW أحدث سيارات</h2>

      <div className="cards">
        {cars.map((car) => (
          <div className="card-box" key={car.id}>
            <Cards src={car.src} title={car.title} Price={car.price} />
           
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default BMW;