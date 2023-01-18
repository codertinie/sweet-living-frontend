import "./singleproperty.css"
// import "./button.scss"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'



const Singleproperty = () => {
  const [property, setProperty] = useState([])
  const newId = useParams()  
  const navigate = useNavigate()
  const [mode, setMode] = useState("display");
  const [des, setDes] = useState()

  // let description = property.map(item => item.description)
  
  useEffect(() => {
    fetch("/properties")
    .then((res) => res.json())
    .then((resp) => {
        setProperty(resp.filter(properties => properties.id == newId.id))
        setDes(resp.filter(properties => properties.id == newId.id).map(item => item.description))
    });
  
},[])

let image = property.map(item => item.image_url);
let image2 = property.map(item => item.image_url2);
let image3 = property.map(item => item.image_url3);
let image4 = property.map(item => item.image_url4);
let image5 = property.map(item => item.image_url5);
let description = property.map(item => item.description)
let seller = property.map(item => item.seller)


console.log(property)
console.log(description)
  function handleClick (){
    fetch(`/properties/${newId.id}`, {
      method : 'DELETE',
    })
    navigate("/home")
  }

  function handleButtonClick() {
    setMode(mode === "display" ? "edit" : "display");
    setDes(description)
  }

  function saveDescription() {
    setMode(mode === "display" ? "edit" : "display");
    console.log(des)

    fetch(`/properties/${newId.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: des})
    })
    .then (response => response.json())
    .then( data => {
      console.log(data)
      setDes(data.description)
    })
  }

//   const textArea = document.querySelector('.myInput');
// textArea.style.height = 'auto';
// textArea.style.height = textArea.scrollHeight + 'px';

  
    return ( 
      
      

    <div className="sellerpage-container">
      <div className="image-1">
        <img src={image} alt="" />
        {/* <h2>10.2million</h2> */}
      </div>
      <div className="image-2">
        <img src={image2} alt="" />
      </div>
      <div className="image-3">
        <img src={image3} alt="" />
      </div>
      <div className="image-4">
      <img src={image4} alt="" />
      </div>
      <div className="image-5">
      <img src={image5} alt="" />
      </div>
      
        <br />
        {mode === "display" ? (
  <div className="description">
    <h3>Description</h3>
    {des}
  <button className="btn btn-edit" onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
  </div>
) : (
  <div className="grid-item grid-item-6">
    <h3>Description</h3>
  <textarea className="myInput" type="text" value={des} onChange={(e) => setDes(e.target.value)}/>
    <button onClick={saveDescription}>Save</button>
  </div>
  

  
)}


      <div className="seller-info">
        <h3>Seller info</h3>
        <li>Name : {seller.map(item => item.username)}</li>
        <li>Email : {seller.map(item => item.email)}</li>
        <li>Phone Number</li>
        <button>BOOK NOW</button>
      </div>
      
      <div className="location">
        <h3>Location</h3>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16422.824307378964!2d36.77685855760907!3d-1.278784440052078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19e50d31fd07%3A0x26d8fb13dd6f3964!2sKenya%20High%20School!5e0!3m2!1sen!2ske!4v1672915317158!5m2!1sen!2ske" width="700" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
       
         <div className="delete-btn">
         <button className="btn btn-delete" onClick={handleClick}>
          <FontAwesomeIcon icon={faTrash} size="2x" />
      
    </button>
         </div>

    </div>
     
     
      
   );;
   
  };
  
export default Singleproperty;