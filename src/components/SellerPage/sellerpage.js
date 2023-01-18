import React, { useState } from "react";
import "./seller.css"

export const SellerPage = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [description, setdescrion] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
     const [rooms, setRooms] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Seller Page</h2>
        <form onSubmit={handleSubmit}>
            <div class="register-form">
                <label htmlFor="name">House Features</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="house-type" placeholder="house type" />

                <label htmlFor="Image">Image url</label>
                <input value={name} name="name" onChange={(e) => setImage(e.target.value)} id="name" placeholder="image url" />

                <label htmlFor="name">Image url</label>
                <input value={name} name="image" onChange={(e) => setName(e.target.value)} id="name" placeholder="image url" />

                 <label htmlFor="name">Image url</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="image url" />

                <label htmlFor="name">Image url</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="image url" />

                <label htmlFor="name">Image url</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="image url" />

                <label htmlFor="location">Location</label>
                <input value={rooms} name="name" onChange={(e) => setRooms(e.target.value)} id="name" placeholder="location" />

                <label htmlFor="password">Number of Rooms</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)}type="rooms" placeholder="number of rooms" id="rooms" name="rooms" />

                <label htmlFor="price">price</label>
                <input value={price} name="name" onChange={(e) => setPrice(e.target.value)} id="name" placeholder="price" />


                 <label htmlFor="Category">Category</label>
                <input value={name} name="name" onChange={(e) => setCategory(e.target.value)} id="name" placeholder="category" />


                 <label htmlFor="name">Description</label>
                <input value={description} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="description" />

            </div>
            
            <button type="submit">Submit</button>
            
           
        </form>
        
    </div>
    )
}
export default SellerPage