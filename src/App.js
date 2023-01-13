import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Landing from "./components/landing";
import Footer from "./components/footer/Footer.js";
import Login from "./components/login";
import Signup from "./components/signup";
import Singleproperty from "./components/singleproperty";
import Navbar from "./components/navbar";
import Contact from "./components/contact/Form";
import About from "./components/about/About.js";
import Nopage from "./components/nopage";
import All_Apartments from "./components/home/All_Apartments"
import All_Houses from "./components/home/All_Houses"

function App() {
  return (
  <>
  
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home /> } />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/apartments" element={<All_Apartments />} />
          <Route path="/houses" element={<All_Houses />} />
          <Route path="singleproperty" element={<Singleproperty />} />
          <Route path="*" element={<Nopage />} />
            <Route index element={<Footer/>} />
        </Routes>
        <Footer/>  
      </>
  );
}

export default App;
