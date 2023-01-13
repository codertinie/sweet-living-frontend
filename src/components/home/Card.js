import React from 'react';
import './home.css'

function Card({card}) {

    return (
        <div className='card-container' >
            <div className="card shadow s-white rounded text-white">
                <img className="card-img" src={card.image_url} alt="Card image"/>
                <div class="card-img-overlay d-flex flex-column">
                    <div className="mt-auto">
                        <p id='overlay-text'><em>{card.price}</em></p>
                        <p id='overlay-text'><em>{card.description}</em></p>
                        <button id='view-btn'>View</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card