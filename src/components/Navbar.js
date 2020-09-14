import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar () {



  return (
    <>
      <div className="topnavbar">
        <Link to='/'><img src="./NOKIA_LOGO_RGB_HR.png" alt="logo" className="navbarlogo"/></Link>
        <ul className="navbarul">
          <li className="navbarli"><Link to='/featurephones'>Feature Phones</Link></li>
          <li className="navbarli"><Link to='/seniors'>For Seniors</Link></li>
          <li className="navbarli"><Link to='/hotspot'>For HotSpot</Link></li>
          <li className="navbarli"><Link to='/contact'>Contact Us</Link></li>
          <FontAwesomeIcon icon={faShoppingBag} className="cart" />
        </ul>
      </div>
      <div className="burger">
        <Link to='/'><img src="./NOKIA_LOGO_RGB_HR.png" alt="logo" className="burgerlogo"/></Link>
        <ul className="burgerul">
          <li className="burgerli"><Link to='/featurephones'>Feature Phones</Link></li>
          <li className="burgerli"><Link to='/seniors'>For Seniors</Link></li>
          <li className="burgerli"><Link to='/hotspot'>For HotSpot</Link></li>
          <li className="burgerli"><Link to='/contact'>Contact Us</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;