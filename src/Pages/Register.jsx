import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert("Email is compulsory");
            return;
        }
        if (password.length < 6) {
            alert("Password should be at least 6 characters");
            return;
        }
        if (!password.trim()) {
            alert("Password must be given");
            return;
        }
        if (password !== retypePassword) {
            alert("Passwords do not match");
            return;
        }

        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);

        alert("Registration Successful");
        navigate("/login");
    };

    return (
        <div className="formDisplay">
            <div className="formMsg">
                <h1>Welcome to QTrip</h1>
                <p>Explore the world with fantastic places to venture around</p>
            </div>
            <div className="registerFormContainer">
            <form action="" onSubmit={submitForm} className="registerForm">
                <h1 style={{color:"#f19537"}}>Register</h1>
                <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Re-type the password"
                    value={retypePassword}
                    onChange={(e) => setRetypePassword(e.target.value)}
                />
                <input type="submit" value={`Register now`} id="registerBtn"/>

                <p>
                    Already have an account?{" "}
                    <Link to={navigate("/login")}>Login</Link>
                </p>
            </form>
            </div>
        </div>
    );
}

export default Register;
