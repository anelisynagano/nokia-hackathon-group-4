import React from "react";
import "./Card.css"
 
const Card = props => (
 <div className="flip-card">
     <div className="flip-card-inner">
         <div className="flip-card-front">
            <img className="image-flip"
                
                src={props.phones.pictures[0]} 
            />
            <h1 className="h1-cards">{props.phones.model}</h1>
        </div>
            <div className="flip-card-back"> 
                <h2 className="h2-cards">{props.phones.model}</h2>
                <p className="new-p-tag">{props.phones.salesPackage}</p>
                
                <button className="buy-button">Buy</button>
                
            </div>
        </div>
    </div>
);

export default Card