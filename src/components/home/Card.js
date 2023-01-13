import React from 'react';
import './home.css'

function Card({card}) {

    return (
        <div className='card-container' >
            <div className='card shadow bg-white rounded' >
                <img src={card.image_url} alt=''/>
                <h4 className='card-price'>{card.price}</h4>
                <button id='view-btn'>View</button>
                <h4 className='location-description'>{card.location}</h4>
                <h4 className='location-description'>{card.description}</h4>
            </div>
        </div>
    )
}

export default Card