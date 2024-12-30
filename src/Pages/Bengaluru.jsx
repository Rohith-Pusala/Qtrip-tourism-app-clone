import React, { useEffect, useState } from "react";
import Explore from "../Components/Explore";
import NavBar from "../Components/NavBar";
import "./citiesStyling.css";
import { useNavigate, useParams } from "react-router-dom";
function Bengaluru(){

    let [api, setApi] = useState({cityPlaces: []})
    let {cities} = useParams();
    let navigate = useNavigate();
    useEffect(() =>{
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=${cities}`)
        .then(res => res.json())
        .then(val => setApi({cityPlaces: val}))
        .catch(err => console.log(err))
    })
    return(
        <div className="cities">
            <Explore/>
            {
                api.cityPlaces.map((places) => {
                    return <div key={places.id} className="places" >
                                <div className="placesImage">
                                    <img src={places.image} alt="placesImg" onClick={() => navigate("/cityOverview",{state : {places}})}/>
                                    <div className="placeCategory">
                                        <h5>{places.category}</h5>
                                    </div>
                                </div>
                                <div className="placeDetails">
                                    <h5>{places.name}</h5>
                                    <p>₹ {places.costPerHead}</p>
                                </div>
                                <div className="duration">
                                        <h5>Duration</h5>
                                        <p>{places.duration} hours</p>
                                </div>
                            </div>
                })
            }
        </div>
    )
}
export default Bengaluru;