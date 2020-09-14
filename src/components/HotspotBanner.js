import React, { Component } from 'react';
import './HotspotBanner.css'

class HotspotBanner extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className="senior-banner hotspot-banner"> {/* image container*/}
            <div className="banner-photo sec-banner-photo">
              <img className="banner-img sec-banner-img" src="./phone-hotspot.png" alt="hear-your-loved-ones"/>
            </div>
            <div className="banner-teaser"> {/* textcontainer*/}
              <div className="content-teaser"> 
                <h4 className="banner-h4"><span style={{color: '#124191', fontSize: '1.2em', fontWeight: '900'}}>NOKIA</span> Everywhere You Go </h4>
                <p className="banner-paragraph"><span style={{fontWeight: '700'}}>FREE</span> to Connect with family and friends whenever, wherever</p>
                <p className="banner-paragraph"><span style={{fontWeight: '700'}}>FREE</span> to Travel by staying connected wherever you go around the world</p>
                <p className="banner-paragraph"><span style={{fontWeight: '700'}}>FREE</span>to Play with the money you’ll save, you’ll have time for the things you enjoy!</p>
              </div>
              <button className="button-banner">Learn more  +</button>
            </div>
          </div>
        )
      }
}


export default HotspotBanner;