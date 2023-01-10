import React from 'react'
import Apartment from './Apartment'
import './home.css'
import House from './House'

function Home() {
  return (
    <div className='view-page'>
      <h2>Featured Listings</h2>
      <House/>
      <Apartment/>
    </div>
  )
}

export default Home