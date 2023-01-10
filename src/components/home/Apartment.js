import React from 'react';
import {  useEffect, useState } from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Apartment() {
    const [apartments, setApartments] = useState([])
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2  
        },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 
        }
    }

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
            <Carousel responsive={responsive} >
                {apartments.filter((card,ind) => ind < 6).map(card => <Card card={card}/>)}
            </Carousel>
        </div>
    )
}

export default Apartment