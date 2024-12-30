import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Section() {
  let [api, setApi] = useState({ tripDetails: [] });
  let [search, setSearch] = useState("");

//   pages api reference    https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa
  useEffect(() => {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/cities")
      .then((res) => res.json())
      .then((val) => setApi({ tripDetails: val }))
      .catch((err) => console.log(err));
  }, [api]);

  function searchPlaces(e) {
    setSearch(e.target.value.toLowerCase());
  }

  const filteredCities = api.tripDetails.filter((cards) =>
    cards.city.toLowerCase().includes(search)
  );

  return (
    <div>
      <div className="hero-image">
        <div className="searchContainer">
          <h1>Welcome to QTrip</h1>
          <p>Explore the world with fantastic places to venture around</p>
          <div className="searchInput">
            <input type="text" placeholder="Search a City" onChange={searchPlaces} />
          </div>
          {/* Display matching city names or 'City not found' message */}
          {search && (
            <div className="searchResults">
              {filteredCities.length > 0 ? (
                filteredCities.map((card, cardInd) => (
                  <p key={cardInd}>{card.city}</p>
                ))
              ) : (
                <p>City not found</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="cardContainer">
        {filteredCities.map((card, cardInd) => (
          <div key={cardInd} className="cardContent">
            <Link to={`/${card.id}`}>
            <div className="cardImg">
              <img src={card.image} alt="placesImage" />
            </div>
            </Link>
            <div className="cardInfo">
              <h5>{card.city}</h5>
              <p>{card.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;