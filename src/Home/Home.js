import React from "react";
import './Home.css';

function Home(){
    return(
        <div>
            <h1 className="app-title">whether</h1>

            <input className="search-bar" type="text" placeholder="Enter your city"/>

            <h1 className="temprature-text">Temprature:</h1>
        </div>
    )
}

export default Home