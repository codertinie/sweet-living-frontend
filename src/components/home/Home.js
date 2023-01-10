import React from 'react'
import './home.css'
import House from './House'
function Home() {
  return (
    <div className='view-page'>
      <h2>Featured Listings</h2>
      <House/>
    </div>
  )
}

export default Home