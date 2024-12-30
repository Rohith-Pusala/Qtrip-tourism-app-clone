import React from "react";
import NavBar from "./Components/NavBar";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import Bengaluru from "./Pages/Bengaluru";
import Goa from "./Pages/Goa";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CityOverview from "./CityOverview";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


function App(){
    return (
        <div>
            
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Section/>}></Route>
                <Route path=":cities" element={<Bengaluru/>}></Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/cityOverview" element={<CityOverview/>}></Route>
            </Routes>
            </BrowserRouter>
            <Footer/>
            
        </div>
    )
}
export default App;