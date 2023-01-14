import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import './home.css'

function AllHouses() {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch("/properties")
        .then((res) => res.json())
        .then((resp) => {
            setHouses(resp)
    });
},[])

    return (
        <div>
            <div className='rentals'>
                <h2 className='view-title'>House Listings</h2>
                <div className='rental-card'>
                    {houses.filter(property => property.category== "house").map((card) => {
                        return(
                            <Card key={card.id} card={card}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllHouses