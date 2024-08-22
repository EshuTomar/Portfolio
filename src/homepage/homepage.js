import "./App.css";
import ParticlesComponent from "./particles";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function HomePage() {
    return (
      <>
   
    <div className="welcome-container">
    <ParticlesComponent id="particles" />
      <div className="image-container">
        <img src='/homepage.jpg' alt="Your Image" className="image" />
      </div>

      <div className="greetings-container">
        <h1>Welcome to my portfolio!!</h1>
        <h3>I'm Eshu Tomar,</h3>
        <p>a full stack web developer with a passion for building innovative and scalable applications.</p>
      </div>

      <div className="social-container">
      <div className="social">
        <a href="https://www.linkedin.com/in/eshutomar1/"><FaLinkedin className="id"/>  Linkedin   </a>
        <a href="https://github.com/EshuTomar"><FaGithubSquare className="id" />  Github </a>
        <a href="https://x.com/TomarEshu28"><FaSquareXTwitter className="id" />  Twitter</a>
        <a href="https://www.naukri.com/code360/profile/Eshu_tomar"><SiCodingninjas className="id"/>  Coding Platform </a>
      </div>
      </div>


    </div>
  
      <Footer/>

      </>
     
     
    );
  }
  
  export default HomePage;