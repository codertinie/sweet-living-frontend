import "./singleproperty.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Singleproperty = () => {
  const [property, setProperty] = useState([])
  const newId = useParams()  

  useEffect(() => {
    fetch("/properties")
    .then((res) => res.json())
    .then((resp) => {
      console.log(resp)
        // const propertiie = resp.filter(propertiie => propertiie.id == newId.id)
        setProperty(resp.filter(properties => properties.id == newId.id))

        console.log(property)
    });

},[])

let images = property.map(item => item.image_url);
console.log(images)
  
    return ( 
      

    <div className="grid-container">
      <div className="grid-item grid-item-1">
        <img src={images} alt="" />
        {/* <h2>10.2million</h2> */}
      </div>
      <div className="grid-item grid-item-2">
        <img src={images} alt="" />
      </div>
      <div className="grid-item grid-item-3">
        <img src={images} alt="" />
      </div>
      <div className="grid-item grid-item-4">
      <img src={images} alt="" />
      </div>
      <div className="grid-item grid-item-5">
      <img src={images} alt="" />
      </div>
        <br />
      <div className="grid-item grid-item-6">
        <h3>House Description</h3>
       
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe molestias veritatis iste laudantium, sunt repellat expedita culpa deleniti aliquid temporibus numquam ipsam dolore vitae eum nobis? Eveniet, laboriosam delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor autem fuga, omnis quam, impedit sed nisi voluptates obcaecati doloribus ullam dicta, laboriosam quas in molestias voluptas! Dolore, deserunt voluptatibus?
        lore
        </p>
      </div>

      <div className="grid-item grid-item-7">
        <h3>Seller info</h3>
        <li>Name</li>
        <li>Email</li>
        <li>Phone Number</li>
        <button>BOOK NOW</button>
      </div>
      
      <div className="grid-item grid-item-8">
        <h3>Location</h3>
        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic impedit adipisci veniam repellendus sit error quidem facere similique delectus suscipit eos, sapiente necessitatibus nihil perspiciatis provident quam. Porro, laudantium.</p>
         */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16422.824307378964!2d36.77685855760907!3d-1.278784440052078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19e50d31fd07%3A0x26d8fb13dd6f3964!2sKenya%20High%20School!5e0!3m2!1sen!2ske!4v1672915317158!5m2!1sen!2ske" width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
     
     
      
   );;
   
  };
  
export default Singleproperty;