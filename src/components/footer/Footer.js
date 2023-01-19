import React, { useState, useEffect } from 'react';
import './Footer.css'
import {  FaRegEnvelope, FaWhatsapp, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
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
      <div className='footer-links'>

        <div className='f-link1'>
          <h3 className='footer-header'>SWEET-LIVING</h3>
          <ul>
            <li>Sifa Towers, Ring Road Kilimani</li>
            <li>P.O. Box 2202-00100</li>
            <li>Nairobi, Kenya</li>
            <li>+254 711 123 123</li>
            <li>info@sweetliving.co.ke</li>
          </ul>
        </div>
        
        <div className='f-link2'>
        <h3 className='footer-header'>COMPANY</h3>
          <ul>
            <li>ABOUT US </li>
            <li>EXPLORE</li>
            <li>SERVICES</li>
            <li>GET IN TOUCH</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div className='f-link3'>
        <h3 className='footer-header'>EXPLORE</h3>
          <ul>
            <li>DEVELOPMENTS</li>
            <li>FOR SALE</li>
            <li>FOR RENT</li>
            <li>TO SELL</li>
            <li>NEWS</li>
          </ul>
        </div>
    </div>  
    </div>
  
    <div className='contact-links'>
    <ul>
            <li><FaWhatsapp/></li>
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaGithub/></li>
            <li><FaRegEnvelope/></li>
        </ul>

    </div>
    <div className='end'>
                <p> &copy; {new Date().getFullYear()} Copyright:Sweet Living Homes Kenya|All Rights Reserved </p>
    </div>
    
    </footer>
    
  ) 
}
export default Footer;