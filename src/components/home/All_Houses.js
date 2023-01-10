import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import './home.css'

function All_Houses() {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/houses")
        .then((res) => res.json())
        .then((resp) => {
            setHouses(resp)
    });
},[])

    return (
        <div>
            <div className='rentals'>
                <h2>House Listings</h2>
                <div className='rental-card'>
                    {houses.map((card) => {
                        return(
                            <Card key={card.id} card={card}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default All_Houses