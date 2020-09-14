import React, { Component } from 'react';
import './SeniorBanner.css'

class SeniorBanner extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className="senior-banner"> {/* image container*/}
            <div className="banner-photo">
              <img className="banner-img sec-banner-img" src="./phone-seniors.png" alt="hear-your-loved-ones"/>
            </div>
            <div className="banner-teaser"> {/* textcontainer*/}
              <div className="content-teaser"> 
                <h4 className="banner-h4">Hear Your Loved One's Voice With <span style={{color: '#124191', fontSize: '1.em', fontWeight: '900'}}>NOKIA</span></h4>
                <p className="banner-paragraph">Seniors need to be included in technology, too. With NOKIA feature phones hearing the voice of your loved one’s is easier than ever.</p>
              </div>
              <button className="button-banner">Learn more  +</button>
            </div>
          </div>
        )
      }
}


export default SeniorBanner;