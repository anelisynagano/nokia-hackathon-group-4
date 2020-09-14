import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {

  return (
    <div className="footer">
      <div className="contact">
        <p className="location"><a href="https://www.nokia.com/language-selector" >Location</a></p>
        <p className="contactus"><a href="https://www.nokia.com/contact-us/" >Contact Us</a></p>
      </div>
      <div className="social">
        <div className="facebook"><a href="https://www.facebook.com/Nokiamobile" ><FontAwesomeIcon icon={faFacebook} size="lg" /></a></div>
        <div className="twitter"><a href="https://twitter.com/NokiaMobile" ><FontAwesomeIcon icon={faTwitter} size="lg" /></a></div>
        <div className="instagram"><a href="https://www.instagram.com/nokiamobile/" ><FontAwesomeIcon icon={faInstagram} size="lg" /></a></div>
        <div className="youtube"><a href="https://www.youtube.com/NokiaMobile" ><FontAwesomeIcon icon={faYoutube} size="lg" /></a></div>
        <div className="envelope"><a href="https://www.nokia.com/phones/en_int/sign-up"><FontAwesomeIcon icon={faEnvelope} size="lg"/></a></div>

      </div>
    </div>
      
  )
}

export default Footer;