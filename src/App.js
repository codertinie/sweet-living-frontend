import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Landing from "./components/landing";
// import Footer from "./components/footer/Footer.js";
import Login from "./components/login";
import Signup from "./components/signup";
import Singleproperty from "./components/singleproperty";
import Navbar from "./components/navbar";
import Contact from "./components/contact/Form";
import About from "./components/about/About.js";
import Nopage from "./components/nopage";
import AllApartments from "./components/home/AllApartments"
import AllHouses from "./components/home/AllHouses"
import SellerPage from "./components/sellerpage";

function App() {
  return (
  <>
  
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="home" element={<Home /> } />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/apartments" element={<AllApartments />} />
          <Route path="/houses" element={<AllHouses />} />
          <Route path="singleproperty/:id" element={<Singleproperty />} />
          <Route path="/sellerpage" element={<SellerPage />}/>
          <Route path="*" element={<Nopage />} />
        </Routes>
        {/* <Footer/>   */}
      </>
  );
}

export default App;
