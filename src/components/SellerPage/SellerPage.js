// import React, { useState } from "react";
// import "./seller.css";

// export const SellerPage = () => {
// const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [image2, setImage2] = useState("");
//   const [image3, setImage3] = useState("");
//   const [image4, setImage4] = useState("");
//   const [image5, setImage5] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [location, setLocation] = useState("");
//   const [rooms, setRooms] = useState("");


//     const[formData, setValue] =useState({
//         house_features:'',
//         url1:'',
//         url2:'',
//         url3:'',
//         url4:'',
//         url5:'',
//         location:'',
//         number_of_rooms:'',
//         price:'',
//         category:'',
//         description:''
//     })
//     function handleSubmit(e){
//         e.preventDefault();
//         fetch('http://localhost:3000/properties',{
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json"
//             },
//             body:JSON.stringify(formData)
//           })
//           .then(res=>res.json())
//           .then(data=>console.log(data))
//           let form = document.querySelector('form');
//           let p = document.createElement('p');
//             document.getElementById('ct').appendChild(p);
//             p.style.fontFamily="Lato,Helvetica,Arial,sans-serif";
//             p.style.fontSize="40px"
//             p.style.textAlign="center"
//             p.style.marginTop="40px"
//             p.style.color="#F18F01"
//             p.innerText="Your property has been uploaded!!!."
//             document.querySelector('.auth-form-container').querySelector('h2').remove();
//             form.remove();

//     }
//     function handleChange(e){
//         setValue((previouState)=>{
//              return {...previouState, [e.target.id]:e.target.value}
//         })
//     }
//     console.log(formData)

//   return (
//      <>
//       <div className="seller">
//         <div className="seller-image">
//           <img src=''/>
//         </div>
//         <div class="register-form">
//             <h4>seller page</h4>
//           <div className="card-login-display">
//               <label htmlFor="name">House Features</label>
//               <input
//               value={name}
//               name="name"
//               onChange={(e) => setName(e.target.value)}
//               id="house-type"
//               placeholder="house type"
//             />
//             <div className="image-url">
//               <div className="cont_1">
//                 <div>
//                   <label htmlFor="Image">Image 1</label>
//                   <input
//                     value={image}
//                     name="name"
//                     onChange={(e) => setImage(e.target.value)}
//                     id="name"
//                     placeholder="image url"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="name">Image url 2</label>
//                   <input
//                     value={image2}
//                     name="image"
//                     onChange={(e) => setImage2(e.target.value)}
//                     id="name"
//                     placeholder="image url"
//                   />
//                 </div>
//               </div>
//               <div className="const_2">
//                 <div>
//                   <label htmlFor="name">Image url 3</label>
//                   <input
//                     value={image3}
//                     name="image"
//                     onChange={(e) => setImage3(e.target.value)}
//                     id="name"
//                     placeholder="image url"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="name">Image url 4</label>
//                   <input
//                     value={image4}
//                     name="image"
//                     onChange={(e) => setImage4(e.target.value)}
//                     id="name"
//                     placeholder="image url"
//                   />
//                 </div>
//               </div>
//               <div className="const_3">
//                 <div>
//                 <label htmlFor="name">Image url 5</label>
//                 <br />
//                 <input
//                   value={image5}
//                   name="image"
//                   onChange={(e) => setImage5(e.target.value)}
//                   id="name"
//                   placeholder="image url"
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="name">Description</label>
//                 <input
//                value={description}
//                name="name"
//                onChange={(e) => setDescription(e.target.value)}
//                 id="name"
//                 placeholder="description"
//             />
//             </div>
//             </div>
//               <div className="const_4">
//                 <div>
//                 <label htmlFor="location">Location</label>
//                 <input
//                 value={location}
//                 name="name"
//                 onChange={(e) => setLocation(e.target.value)}
//                 id="name"
//                 placeholder="location"
//               />
//               </div>
//               <div>
//                 <label htmlFor="password">Number of Rooms</label>
//                 <input
//                 value={rooms}
//                onChange={(e) => setRooms(e.target.value)}
//                 type="rooms"
//                 placeholder="number of rooms"
//                id="rooms"
//                 name="rooms"
//               />
//               </div>
//               </div>
//             <div className="const_5">
//               <div>
//                <label htmlFor="name">price</label>
//             <input
//               value={price}
//               name="name"
//               onChange={(e) => setPrice(e.target.value)}
//               id="name"
//               placeholder="price"
//             />
//               </div>
//               <div>
//                <label htmlFor="Category">Category</label>
//             <input
//               value={category}
//               name="name"
//               onChange={(e) => setCategory(e.target.value)}
//               id="name"
//               placeholder="category"
//             />
//               </div>
//             </div>
//             </div>
//             <button type="submit">Submit</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SellerPage;
import React, { useState } from "react";
import "./seller.css";

export const SellerPage = () => {
    const[formData, setValue] =useState({
        house_features:'',
        url1:'',
        url2:'',
        url3:'',
        url4:'',
        url5:'',
        location:'',
        number_of_rooms:'',
        price:'',
        category:'',
        description:''
    })
    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/properties',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body:JSON.stringify(formData)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
          let form = document.querySelector('form');
          let p = document.createElement('p');
            document.getElementById('ct').appendChild(p);
            p.style.fontFamily="Lato,Helvetica,Arial,sans-serif";
            p.style.fontSize="40px"
            p.style.textAlign="center"
            p.style.marginTop="40px"
            p.style.color="#F18F01"
            p.innerText="Your property has been uploaded!!!."
            document.querySelector('.auth-form-container').querySelector('h2').remove();
            form.remove();
    }
    function handleChange(e){
        setValue((previouState)=>{
             return {...previouState, [e.target.id]:e.target.value}
        })
    }
    console.log(formData)
  return (
    <div className="auth-form-container" id='ct'>
      <h2>Seller Page</h2>
      <form onSubmit={handleSubmit}>
        <div class="register-form">
          <label htmlFor="house_features">House Features</label>
          <input
            value={formData.house_features}
            name="House_features"
            onChange={handleChange}
            id="house_features"
            placeholder="Enter house features"
            required
          />
          <label htmlFor="url1">Image url 1</label>
          <input
            value={formData.url1}
            name="Image_url_1"
            onChange={handleChange}
            id="url1"
            placeholder="Enter image url 1"
            required
          />
          <label htmlFor="url2">Image url 2</label>
          <input
             value={formData.url2}
             name="Image_url_2"
             onChange={handleChange}
             id="url2"
             placeholder="Enter image url 2"
             required
          />
          <label htmlFor="url3">Image url 3</label>
          <input
            value={formData.url3}
            name="Image_url_3"
            onChange={handleChange}
            id="url3"
            placeholder="Enter image url 3"
            required
          />
          <label htmlFor="url4">Image url 4</label>
          <input
          value={formData.url4}
          name="Image_url_4"
          onChange={handleChange}
          id="url4"
          placeholder="Enter image url 4"
          required
          />
          <label htmlFor="url5">Image url 5</label>
          <input
            value={formData.url5}
            name="Image_url_5"
            onChange={handleChange}
            id="url5"
            placeholder="Enter image url 5"
            required
          />
          <label htmlFor="location">Location</label>
          <input
            value={formData.location}
            name="Location"
            onChange={handleChange}
            id="location"
            placeholder="Enter location"
            required
          />
          <label htmlFor="number_of_rooms">Number of Rooms</label>
          <input
             value={formData.number_of_rooms}
             name="Number_of_rooms"
             onChange={handleChange}
             id="number_of_rooms"
             placeholder="Enter number of rooms"
             required
          />
          <label htmlFor="price">price</label>
          <input
             value={formData.price}
             name="Price"
             onChange={handleChange}
             id="price"
             placeholder="Enter price"
             required
          />
          <label htmlFor="category">Category</label>
          <input
           value={formData.category}
           name="Category"
           onChange={handleChange}
           id="category"
           placeholder="Enter category"
           required
          />
          <label htmlFor="description">Description</label>
          <input
            value={formData.description}
            name="Description"
            onChange={handleChange}
            id="description"
            placeholder="Enter description"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SellerPage;







