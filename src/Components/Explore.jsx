import React from "react";

function Explore(){
    return(
        <div>
            <div className="exploreContent">
                <h1>Explore all adventures</h1>
                <p>Here's a list of places that you can explore in city</p>
            </div>
            <div className="filterDetails">
                <div className="filters">
                    <p>Filters:</p>
                </div>
                <div className="filterByDuration">
                    <select name="" id="">
                        
                        <option value="">Filter by Duration (Hours)</option>
                        <option value="">0-2 Hours</option>
                        <option value="">2-6 Hours</option>
                        <option value="">6-12 Hours</option>
                        <option value="">12+ Hours</option>
                    </select>
                    <button className="clearBtn">Clear</button>
                </div>
                <div className="addCategory">
                    <select name="" id="">
                        <option value="">Add Category</option>
                        <option value="">Cycling Routes</option>
                        <option value="">Hillside Getaways</option>
                        <option value="">Serene Beaches</option>
                        <option value="">Party Spots</option>
                    </select>
                    <button className="clearBtn">Clear</button>
                </div>
                <div className="searchAdventures">
                    <input type="text" placeholder="Search adventures"/>
                    <button className="clearBtn">Clear</button>
                </div>
            </div>
        </div>
    )
}
export default Explore;