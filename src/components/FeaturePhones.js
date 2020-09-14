import React from "react";
import "./FeaturePhones.css";
import Card from "./Card";
import "./HotspotBanner.css";
import "./SeniorBanner.css";
import "./Carousel.css"

const FeaturePhones = (props) => {
  
    return (
      
    <div className= "phone-list">
        {props.phones.map(phones => 
        (
          <Card key={phones.model} phones={phones} />
        ))} 
    </div>
    )
        }
        


export default FeaturePhones