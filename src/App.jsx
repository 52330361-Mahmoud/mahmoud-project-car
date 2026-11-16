import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cards from './Components/Cards';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import BMW from './Pages/Bmw';
import Mercedes from './Pages/Mercedes';
import Audi from './Pages/Audi';
import Ferrari from './Pages/Ferrari';

function App() {

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BMW" element={<BMW />} />
          <Route path="/Mercedes" element={<Mercedes />} />
          <Route path="/Audi" element={<Audi />} />
          <Route path="/Ferrari" element={<Ferrari />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;