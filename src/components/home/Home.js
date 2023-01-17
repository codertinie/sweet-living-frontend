import React from 'react'
import { useNavigate, Link, Outlet } from "react-router-dom";
import Apartment from './Apartment'
import './home.css'
import House from './House'

function Home() {

  return (
    <div className='view-page'>
      <h2 className='view-title' >Featured Listings</h2>
            <House />
        <Link to='/houses' id='more'>View More</Link>
        <Apartment />
        <Link to='/apartments' id='more'>View More</Link>
        <Outlet/>
    </div>
  )
}

export default Home