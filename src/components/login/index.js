import React, {useState} from "react";
import "../LoginSignupStyle/LoginSignup.css";
//import { Link } from 'react-router-dom';
//import bootstrap



function Login() {
   
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [notify, setNotify] = useState(false);

//function notify user
    function notifyuser() {
        setNotify((notify)=>!notify);
        setTimeout(() => {
            setNotify(false);
        }, 3000);
    }

    function submitHandler(event){
        setError(null);
        event.preventDefault();
        fetch(" http://127.0.0.1:3000/buyers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        }).then((res) => {
            if (res.ok){
                res.json().then((user) => {
                    notifyuser();
                    //use session storage to store user data
                    sessionStorage.setItem("user", JSON.stringify(user));
                    //redirect to home page
                    window.location.href = "/home";

                });
                //handle error and notify user
            } else {
                res.json().then((error) => {
                    setError(error);
                    notifyuser();
                });
            }
        });
    }

    function endNotification() {
        setNotify(false);
    }


  
   
      return (
        <div className="boddy">
        <div className="container1">
          <form>
            <p>Sweet Living</p>
            <input type="email" placeholder="Email" id="email"required="required" value={email} onChange={e=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder="Password" required="required" value={password} onChange={e=>setPassword(e.target.value)} /><br />
            <input type="submit" value="Sign in" onClick={submitHandler}/><br />
           
            
       
            
            {/* <Link to='/signup'>Sign up?</Link> */}
          </form>
          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>
        </div>
        </div>
        
      );
    }
    
    export default Login;