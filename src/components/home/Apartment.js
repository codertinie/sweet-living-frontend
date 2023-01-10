import React from 'react';
import {  useEffect, useState } from 'react';
import Card from './Card';

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
                {apartments.filter((card,ind) => ind < 6).map(card => <Card card={card}/>)}
        </div>
    )
}

export default Apartment