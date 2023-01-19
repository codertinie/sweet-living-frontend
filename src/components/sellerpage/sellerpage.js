import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CoverDiv from "../reusable/CoverDiv";
import "./seller.css";

export const SellerPage = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <div className="seller">
        <div className="seller-image">
          <img src=''/>
        </div>
          
        <div class="register-form">
            <h4>seller page</h4>

          <div className="card-login-display">

           
           


          
              <label htmlFor="name">House Features</label>
              <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="house-type"
              placeholder="house type"
            />
 
            
            
            <div className="image-url">
              <div className="cont_1">
                <div>
                  <label htmlFor="Image">Image 1</label>
                  <input
                    value={image}
                    name="name"
                    onChange={(e) => setImage(e.target.value)}
                    id="name"
                    placeholder="image url"
                  />
                </div>
                <div>
                  <label htmlFor="name">Image url 2</label>
                  <input
                    value={image2}
                    name="image"
                    onChange={(e) => setImage2(e.target.value)}
                    id="name"
                    placeholder="image url"
                  />
                </div>
              </div>


              <div className="const_2">
                <div>
                  <label htmlFor="name">Image url 3</label>
                  <input
                    value={image3}
                    name="image"
                    onChange={(e) => setImage3(e.target.value)}
                    id="name"
                    placeholder="image url"
                  />
                </div>
                <div>
                  <label htmlFor="name">Image url 4</label>
                  <input
                    value={image4}
                    name="image"
                    onChange={(e) => setImage4(e.target.value)}
                    id="name"
                    placeholder="image url"
                  />
                </div>
              </div>


              <div className="const_3">
                <div>
                <label htmlFor="name">Image url 5</label>
                <br />
                <input
                  value={image5}
                  name="image"
                  onChange={(e) => setImage5(e.target.value)}
                  id="name"
                  placeholder="image url"
                />
                </div>
                <div>
                <label htmlFor="name">Description</label>
                <input
               value={description}
               name="name"
               onChange={(e) => setDescription(e.target.value)}
                id="name"
                placeholder="description"
            />
            </div>
            </div>


              <div className="const_4">
                <div>
                <label htmlFor="location">Location</label>
                <input
                value={location}
                name="name"
                onChange={(e) => setLocation(e.target.value)}
                id="name"
                placeholder="location"
              />
              </div>
              <div>
                <label htmlFor="password">Number of Rooms</label>
                <input
                value={rooms}
               onChange={(e) => setRooms(e.target.value)}
                type="rooms"
                placeholder="number of rooms"
               id="rooms"
                name="rooms"
              />
              </div>
              </div>
            

            <div className="const_5">
              <div>
               <label htmlFor="name">price</label>
            <input
              value={price}
              name="name"
              onChange={(e) => setPrice(e.target.value)}
              id="name"
              placeholder="price"
            />
              </div>
              <div>
               <label htmlFor="Category">Category</label>
            <input
              value={category}
              name="name"
              onChange={(e) => setCategory(e.target.value)}
              id="name"
              placeholder="category"
            />
              </div>
            </div>


            
             
            
            </div>
            

            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </Form>
  );
};
export default SellerPage;
