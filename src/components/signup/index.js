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
      
    }
    export default Signup;