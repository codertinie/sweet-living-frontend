import React from 'react'
import "../sellerpage/seller.css"
function CoverDiv(props) {
  return (
    <div className='cover-container-display'>{props.children}</div>
  )
}

export default CoverDiv