import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from "./homepage/homepage.js"
import Skills from "./skills/skills.js";
import Navbar from "./navbar/Navbar.js";
import About from "./about/About.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </Router>
    <ToastContainer />
   
   
   </>
  );
}

export default App;
