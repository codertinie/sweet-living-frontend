import React from 'react'
import {  useEffect, useState } from 'react';
import Card from './Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function House() {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/houses")
        .then((res) => res.json())
        .then((resp) => {
            setHouses(resp)
            console.log(resp)
        });
    },[])

    return (
        <div className='house'>
            <h3><strong>Houses Listings</strong></h3>
            <Carousel>
                {houses.filter((card,ind) => ind < 6).map(card => <Card card={card}/>)}
            </Carousel>        
        </div>
    )
}

export default House