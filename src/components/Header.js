import React, { Component} from 'react';
import './Header.css';
import Feature from "./Feature";
import SeniorBanner from "./SeniorBanner";
import HotspotBanner from "./HotspotBanner";
import Carousel from "./Carousel";

class Header extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          isClicked: false,
          
        }
      }

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked })
      }

    render(){
        return(
            <>
            <div id="header">
                <div className='header-teaser'>
                    
                    <h1 className="header-h1">Be empowered.</h1>
                    <h1 className="header-h1 header-h1-biger">Stay connected.</h1>
                </div>
                <div className='header-phone'>
                    <img className="phone-img" src="./nokia_5310-header.png" alt="nokia_5310"/>
                </div>
             </div>
             
              
              <Feature isClicked={this.state.isClicked} selection='./N105.png' title= "Talk to everyone" name='Nokia 105' semi= "Talk from sunrise to sunset" info= "Make the conversation last even longer, with a long-lasting battery that lets you chat for hours. Giving you one less reason to say goodbye." />
            <Carousel handleClick={this.handleClick} />
             <SeniorBanner />
              <HotspotBanner /> 
              </>
        )
    }
}

export default Header;