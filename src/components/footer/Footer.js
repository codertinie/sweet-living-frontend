import React from 'react';
import './Footer.css'
import { FaPhoneSquareAlt, FaRegEnvelope, FaWhatsapp, FaTwitter, FaGithubSquare, FaFacebook, FaWhatsappSquare, } from "react-icons/fa";


function Footer() {
  return(
    <div className='footer'>
      <div className='section1'>
        <h4>contact us</h4>
        <p><FaPhoneSquareAlt/>
                +254712222356</p>
                <p><FaRegEnvelope/>
                sweetliving@gmail.com</p>
                <p><FaWhatsapp/></p>
                <p><FaFacebook/></p>
                <p><FaTwitter/></p>
                <p><FaGithubSquare/>All rights reserved &trade; inc</p>
                </div>
                <div className='section2'>
                <p>Copyright By SweetLiving Properties&Developers</p>
                </div>
      
    </div>
  )
    
  
}
export default Footer;