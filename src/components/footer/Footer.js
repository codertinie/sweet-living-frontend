import React, { useState, useEffect } from 'react';
import './Footer.css'
import { FaPhoneSquareAlt, FaRegEnvelope, FaWhatsapp, FaTwitter, FaGithub, FaFacebook, FaWhatsappSquare, } from "react-icons/fa";
import { useLocation } from 'react-router-dom';


function Footer() {


  const location = useLocation();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [location]);

  return(
    <footer className={`${hide ? 'hide-footer' : ''}`}>
<div className='footer'>
      {/* <div className='section1'>
        <h2>SWEET-LIVING</h2>
        <p><FaPhoneSquareAlt/>
                +254712222356</p>
                <p><FaRegEnvelope/>
                sweetliving@gmail.com</p>
                <p><FaWhatsapp/></p>
                <p><FaFacebook/></p>
                <p><FaTwitter/></p>
                <p><FaGithub/></p>
      </div>
                <div className='section2'>
                <p> &copy; {new Date().getFullYear()} Copyright:Sweet Living Homes Kenya|All Rights Reserved </p>
                </div> */}
                <div className="footer">
      <div className="footer-links">
        <div className="f-message">
          <h2>MOVIE FORUM</h2>
        </div>
        <div className="f-social">
          <h3>Join Us</h3>
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="about">
          <h3>About MovieForum</h3>
          <ul>
            <li>About Us</li>
            <li>Latest Shows</li>
            <li>Privacy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="about">
          <h3>Help</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Policy</li>
          </ul>
        </div>
        <div className="subscribe">
          <h3>Subscribe</h3>
          <p>Get out Newsletters</p>
          <input type="email" placeholder="Enter your email" required />
          <button id="btn" type="submit" name="" value="Subscribe">
            Subscribe
          </button>
        </div>
      </div>
      <div class="end">
        <p>
          © 2022 movieforum.com or its affiliates | All rights reserved,terms
          and conditions applied
        </p>
      </div>
    </div>

    </div>  
  
  
    
    </footer>
    
  ) 
}
export default Footer;