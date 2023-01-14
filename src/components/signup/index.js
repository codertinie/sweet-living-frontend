import React, {useState} from "react";
import "./Signup.css";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [notify, setNotify] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const [phone, setPhone] = useState("");
    const [notification, setNotification] = useState(false);

    function handleNotification() {
        setNotification((notification)=>!notification);
        setTimeout(() => {
            setNotification(false);
        }, 3000);
    }

    function submitHandler(e) {
        e.preventDefault();
        fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            p_number: phone,
            password,
            password_confirmation: passwordConfirm,
          }),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => handleNotification());
          } else {
            res.json().then((error) => setError(error));
          }
        });
      }

      function endNotification() {
        setNotification(false);
      }
      return (
        <div className="boddy">
        <div className="container">
          <form>
            <p>Sweet Living</p>
            <input type="text" placeholder="Username" required="required" value={username} onChange={e=>setUsername(e.target.value)} /><br />
            <input type="email" placeholder="Email" id="email"required="required" value={email} onChange={e=>setEmail(e.target.value)}/><br />
            <input type="number" placeholder="Phone Number" required="required" value={phone} onChange={e=>setPhone(e.target.value)} /><br />
            <input type="password" placeholder="Password" required="required" value={password} onChange={e=>setPassword(e.target.value)} /><br />
            <input type="password" placeholder="Confirm Password" required="required" value={passwordConfirm} onChange={e=>setPasswordConfirm(e.target.value)} /><br />
            <input type="button" value="Sign in" onClick={submitHandler}/><br />
            <a href="#">Log in?</a>
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
    export default Signup;