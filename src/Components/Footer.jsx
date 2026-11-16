import email from "../assets/Gmail.png";
import face from "../assets/facebook.png";
import instagram from "../assets/instagram.jpg";
import "../Components/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        
   <div>
    
         <img src={email} alt="error" />
       <p>MohdSaleh102@gmail.com</p>
   </div>
       <div>
        <img src={face} alt="error" />
       </div>
       <div>
        <img src={instagram} alt="error" />
       </div>
      
      </div>
    </footer>
  )
};

export default Footer;



