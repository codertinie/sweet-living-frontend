import React from 'react';
import { NavLink} from 'react-router-dom';
import "../style.css"



function Navbar(){

    return(
        <nav>
             <div>
                <NavLink   to="/"  className="navlink" id='header'>
                SWEET - LIVING 
                </NavLink>
             </div>
        
           <div className='container1-nav'>
                <NavLink   to="/home" className="navlink">
                    Home
                </NavLink>
                <NavLink   to="/about" className="navlink">
                    About
                </NavLink>
                <NavLink   to="/contact" className="navlink">
                    Contact us
                </NavLink>
               
           </div>
           <div>
           <NavLink   to="/login" className="navlink">
                <button id='navButton'>Signin</button>
            </NavLink>
           </div>
           
        </nav>
    )
}

export default Navbar;

