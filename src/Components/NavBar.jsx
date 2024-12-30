import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar(){
    let navigate = useNavigate();
    return(
        <nav>
            <div className="logo">
                <p>QTrip</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li onClick={()=> navigate("/")}>Home</li>
                    <li>Reservations</li>
                    <li className="loginHere" onClick={() => navigate("/login")}>Login Here</li>
                    <li><button className="registerBtn" onClick={() => navigate("/register")}>Register</button></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;