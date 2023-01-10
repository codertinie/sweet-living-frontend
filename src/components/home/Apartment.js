import React from 'react';
import {  useEffect, useState } from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Apartment() {
    const [apartments, setApartments] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/apartments")
        .then((res) => res.json())
        .then((resp) => {
            setApartments(resp)
        });
    },[])

    return (
        <div className='apartment'>
            <h3><strong>Apartment Listings</strong></h3>
            <Carousel >
                {apartments.filter((card,ind) => ind < 6).map(card => <Card card={card}/>)}
            </Carousel>
        </div>
    )
}

export default Apartment