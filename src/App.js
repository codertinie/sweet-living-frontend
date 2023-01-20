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
import SellerPage from "./components/SellerPage/SellerPage";
import SellerSignup from "./components/sellersignup/SellerSignup";
import { useState, useEffect } from "react";
import SellerLogin from "./components/sellerlogin/SellerLogin";



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
  
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Landing user={user}/>} />
          <Route path="home" element={<Home user={user}/> } >
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
          <Route path="/sellersignup" element={<SellerSignup onSignup={setUser}/>}/>
          <Route path="/sellerlogin" element={<SellerLogin onLogin={setUser}/>}/>


        </Routes>

      </>
  );
}

export default App;
