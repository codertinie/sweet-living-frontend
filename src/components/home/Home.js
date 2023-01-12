import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import Apartment from './Apartment'
import './home.css'
import House from './House'

function Home() {


  return (
    <div className='view-page'>
      <h2>Featured Listings</h2>
      {/* <Navbar /> */}
      <House />
        <Link to='/houses' id='more'>View More</Link>
        <Apartment />
        <Link to='/apartments' id='more'>View More</Link>
      {/* <Footer /> */}
    </div>
  )
}

export default Home