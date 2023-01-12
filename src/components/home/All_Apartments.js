import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import './home.css'

function All_Apartments() {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/apartments")
    .then((res) => res.json())
    .then((resp) => {
        setApartments(resp)
    });
},[])

    return (
        <div>
        <div className='rentals'>
                    <h2 className='view-title'>Apartments Listings</h2>
                    <div className='rental-card'>
                        {apartments.map((card) => {
                        return(
                        <Card key={card.id} card={card}/>)
                    })}
                    </div>
        </div>
        </div>
    )
}

export default All_Apartments