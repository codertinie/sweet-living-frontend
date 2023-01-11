import React, { useRef} from 'react';
import './AboutUs.css'


function About() {
    return(
        <div className="about ">
                <div className='about-img'> 
                </div> 
            <div className ='content'>
                <h1>About Us</h1>
                <p>Sweet Living Homes is a pre-eminent real estate focussed in delivering high quality and customised servises to our client.<br/>
                     <span>Our Vision</span> <br/> We offer affodable houses for sale, rent and also allow property owners to showcase, sell or rent their houses to our clients 
                     by posting the houses on our website.<br/>
                     We are renowned for our impresive house sales, and appartment renting in different counties where we have gained excellent reputation
                     because we deliver services that provide proffesionalism,integrity and safisfaction to our clients.</p>
                     <p><span>Our Aim</span> <br/>is creating property ownership through selling and Renting commercial and private Properties</p>
            </div>
        </div>
    );

}

export default About;
