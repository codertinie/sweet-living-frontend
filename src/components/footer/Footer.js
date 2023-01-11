import React from 'react';
import './Footer.css'
import { FaPhoneSquareAlt, FaRegEnvelope, FaWhatsapp, FaTwitter, FaGithub, FaFacebook, FaWhatsappSquare, } from "react-icons/fa";


function Footer() {
  return(
    <div className='footer'>
      <div className='section1'>
        <h1>SWEET-LIVING</h1>
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
                <p> &copy; {new Date().getFullYear()} Copyright:Sweet Living Kenya|All Rights Reserved </p>
                </div>
    </div>  
  
  )
    
  
}
export default Footer;