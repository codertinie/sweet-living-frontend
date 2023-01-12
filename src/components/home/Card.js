import React from 'react';
// import './home.css'

function Card({card}) {

    return (
        <div className='card-container' >
        <div className='card shadow bg-white rounded' style={{width: "15rem"} }>
            <img src={card.image_url} alt=''/>
        <div className='card-title'>
            <h4>{card.price}</h4>
            <button className='view-btn'>View</button>
        </div>
        </div>
        </div>
    )
}

export default Card