import React, {useState} from "react";
import "./Login.css";
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
        fetch("http://localhost:3000/buyer", {
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
                    window.location.href = "/";

                });
            } else {
                res.json().then((error) => setError(error.message));


            }
        });
    }

    function endNotification() {
        setNotify(false);
    }



   
      return (
        <div className="container">
          <form>
            <p>Sweet Living</p>
            <input type="email" placeholder="Email" id="email"required="required" value={email} onChange={e=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder="Password" required="required" value={password} onChange={e=>setPassword(e.target.value)} /><br />
            <input type="button" value="Sign in" onClick={submitHandler}/><br />
       
            <a href="./signup/index.js">Sign up?</a>
          </form>
          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>
        </div>
      );
    }
    
    export default Login;