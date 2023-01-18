import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'


function Card({card}) {


    return (
        <div className='card-container' >
            <figure>
            <div className="card shadow s-white rounded text-white">
                <img className="card-img" src={card.image_url} alt="Card image"/>
                <figcaption>
                <div class="card-img-overlay d-flex flex-column my-text">
                        <p id='overlay-text'><em>KSH.{card.price}/m</em></p>
                        <p id='overlay-text'><em>{card.description}</em></p>
                        <p id='overlay-text'>{card.location}</p>
                        <Link to={`/singleproperty/${card.id}`} >
                            <span class= 'v-btn'><button></button></span>                        
                        </Link>
                </div>
                </figcaption>
            </div>
            </figure>
        </div>
    )
}

export default Card