import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(){
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();

    let loginForm = (e)=>{
        e.preventDefault();

        const storedEmail = sessionStorage.getItem("email");
        const storedPassword = sessionStorage.getItem("password");

        if(!email.trim()){
            alert("Email is a mandatory field");
            return;
        }

        if(!password.trim()){
            alert("Password is a mandatory field");
            return;
        }

        if(email!== storedEmail) {
            alert("Invalid Email");
            return;
        }

        if(password!==storedPassword) {
            alert("Invalid Password");
            return;
        }

        alert("Sign-In Successful");
        navigate("/");

    }
    return(
        <div className="formDisplay">
             <div className="formMsg">
                <h1>Welcome to QTrip</h1>
                <p>Explore the world with fantastic places to venture around</p>
            </div>
            <div className="loginFormContainer">
                <form action="" onSubmit={loginForm} className="loginForm">
                    <h1 style={{color:"#f19537"}}>Login</h1>
                    <input type="email" placeholder="Enter email" id="username" name="username" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Enter Password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" value={`Login`} id="loginBtn"/>

                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;