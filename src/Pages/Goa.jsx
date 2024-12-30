import React, { useEffect, useState } from "react";
import Explore from "../Components/Explore";
import "./citiesStyling.css";

function Goa(){
    let [api, setApi] = useState({cityPlaces: []})

    useEffect(() =>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa")
        .then(res => res.json())
        .then(val => setApi({cityPlaces: val}))
        .catch(err => console.log(err))
    })
    return (
        <div className="cities">
            {
                api.cityPlaces.map((places) => {
                    return <div key={places.id} className="places">
                                <div className="placesImage">
                                    <img src={places.image} alt="goaPlaces" />
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
export default Goa;