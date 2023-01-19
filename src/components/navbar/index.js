import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import img from "../../logo.jpeg";
import { FaHome } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesome } from "react-icons/fa";

function Navbar({ user, setUser}) {

  const menu = () => {
    const links = document.querySelector('.middle-nav')
    const menu = document.querySelector('.menu')
    links.classList.toggle('active')
    menu.classList.toggle('clicked')
  }

  const aLink = () => {
    const links = document.querySelector('.middle-nav')
    const menu = document.querySelector('.menu')
    links.classList.remove('active')
    menu.classList.remove('clicked')
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
  })
      .then((r) => {
          if (r.ok) {
              setUser(null)
          }
      })
  }

  return (
    <nav>
      <div className="left-nav">
      <div>
        <NavLink to="/" >
            <img src={img} alt="house" id="logo" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" className="navlink" id="header" onClick={aLink}>
          SWEET - LIVING
        </NavLink>
      </div>
      </div>

      <div className="middle-nav">
      <div className="container1-nav">

        { user ? (
          <NavLink to="/home" className="navlink" onClick={aLink}>
                  <FaHome size={50} color="black" id="home-icon"/>
        </NavLink>
        ) : (
          <NavLink to="/signup" className="navlink" onClick={aLink}>
          <FaHome size={40} color="black"/>
        </NavLink>
        )}

        
        <NavLink to="/about" className="navlink" onClick={aLink}>
          <FaInfoCircle size={40} color="black" id="about-icon"/>
        </NavLink>
        <NavLink to="/contact" className="navlink" onClick={aLink}>
          <FaPhone size={39} color="black" id="contact-icon"/>
        </NavLink>
      </div>
      </div>

      {user ? (
        <div className="right-nav">
        <NavLink to="/login" className="navlink">
          <button id="navButton" onClick={handleLogout}>Logout</button>
        </NavLink>
        <div className="menu" onClick={menu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      ) : (
        <div className="right-nav">
        <NavLink to="/login" className="navlink">
          <button id="navButton">Login</button>
        </NavLink>
        <div className="menu" onClick={menu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      )}
    </nav>
  );
}

export default Navbar;
