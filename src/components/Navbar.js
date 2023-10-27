import React from 'react';
import './Navbar.css';
import backgroundImage from '../assets/navbarBackground.png';
import logoImage from '../assets/logo.png';
import wbtImage from '../assets/logoWBT.png';  // Görüntünün tam yolunu kullanarak buraya ekleyin.


function Navbar() {
  return (
    <div className="navbar" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
      <img src={logoImage} alt="Logo" className="nav-logo" />
      <img src={wbtImage} alt="Logo" className="nav-logo-wbt" />
     
      <div className= "nav-button-div">
      <button className="nav-button">Home</button>
      <button className="nav-button">About Us</button>
      <button className="nav-button">Contact</button>
      <button className="nav-button">Buy Token</button>
      </div>
      
    </div>
  );
}

export default Navbar;
