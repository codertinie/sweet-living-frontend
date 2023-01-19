import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Landing from "./components/landing";
import Footer from "./components/footer/Footer.js";
import Login from "./components/login";
import Signup from "./components/signup";
import Singleproperty from "./components/singleproperty";
import Navbar from "./components/navbar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About.js";
import Nopage from "./components/nopage";
import AllApartments from "./components/home/AllApartments"
import AllHouses from "./components/home/AllHouses"
import SellerPage from "./components/SellerPage";
import { useState, useEffect } from "react";




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
        if (res.ok) {
            res.json().then((user) => setUser(user));
        }
    });
}, []);


  return (
  <>
  
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home /> } >
            <Route index element={<Footer/>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login onLogin={setUser}/>} />
          <Route path="signup" element={<Signup onSignup={setUser} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/apartments" element={<AllApartments />} />
          <Route path="/houses" element={<AllHouses />} />
          <Route path="singleproperty/:id" element={<Singleproperty />} />
          <Route path="/seller" element={<SellerPage />}/>
          <Route path="*" element={<Nopage />} />
            
        </Routes>

      </>
  );
}

export default App;
