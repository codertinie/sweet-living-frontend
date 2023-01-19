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
      <div className='section1'>
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
                </div>
    </div>  
  
  
    
    </footer>
    
  ) 
}
export default Footer;