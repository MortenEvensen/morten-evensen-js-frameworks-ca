import React, { useState, useEffect } from "react";
import GameData from "./GameData";
import { BASE_URL } from "../constants/GameApi";


function GameDetails() {
    const [ cardDetails, setCardDetails] = useState([]);
    const name = cardDetails.name;
    const rating = cardDetails.rating;
    const released = cardDetails.released;
    const background_image = cardDetails.background_image;
    const description = cardDetails.description
const id = "https://api.rawg.io/api/games/4"
    
    useEffect(function() {
        fetch(id)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            setCardDetails(json)
        })
        .catch(function(error) {
            console.log(error)
        })
    }, [])

    return (
        
                    <div className="wrap">  
                        <img className="image" src={background_image} alt={name}/>
                        <h3 className="gameTitle">Title: {name}</h3>
                        <p className="gameTitle">Rating: {rating}</p>
                        <p className="gameTitle">Release date: {released}</p>
                        <p className="gameTitle">Description: {description}</p>
                    </div> 
                )

}

export default GameDetails;