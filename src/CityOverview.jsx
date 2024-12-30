import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { useLocation } from "react-router-dom";

function CityOverview() {
  const [cityState, setCityState] = useState({ images: [] });
  const location = useLocation();
  const cityId = location.state.places;
  
  useEffect(() => {
    fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${cityId.id}`)
      .then(res => res.json())
      .then(val => setCityState(val))
      .catch(err => console.error(err));
  }, []);
  

  if (!cityState) {
    return <h1>Loading...</h1>;
  }
  
  return (  
      <div className="cityOverViewContent">
        <h1>{cityState.name}</h1>
        <p>{cityState.subtitle}</p>

        <Carousel showThumbs={false}
          infiniteLoop
          autoPlay
          dynamicHeight={true}
          width={"100%"}
          style={{ margin: "20px 0" }}>
          {cityState.images && cityState.images.map((res, index) => (
            <div key={index}>
              <img src={res} alt={`city images ${index}`} style={{ width: "100%", height: "500px" }} />
            </div>
          ))}
        </Carousel>

        <div className="overViewDescription">
          <span><p>About the Experience:</p></span>
          <p>{cityState.content}</p>
        </div>
      </div>

  );
}

export default CityOverview;
