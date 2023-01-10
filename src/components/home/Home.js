import React from 'react'
import Apartment from './Apartment'
import './home.css'
import House from './House'

function Home() {
  return (
    <div className='view-page'>
      <h2>Featured Listings</h2>
      {/* <Navbar /> */}
      <House />
        <h3 id='more'>View More</h3>
        <Apartment />
        <h3 id='more'>View More</h3>
      {/* <Footer /> */}
    </div>
  )
}

export default Home