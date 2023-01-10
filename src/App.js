import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Landing from "./components/landing";
import Footer from "./components/footer";
import Login from "./components/login";
import Signup from "./components/signup";
import Singleproperty from "./components/singleproperty";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import About from "./components/about";
import Nopage from "./components/nopage";

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home /> } >
            <Route index element={<Footer/>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="singleproperty" element={<Singleproperty />} />
          <Route path="*" element={<Nopage />} />
        </Routes>

      </>
   
  );
}

export default App;
