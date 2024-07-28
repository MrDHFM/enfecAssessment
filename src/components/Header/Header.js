import React, { useState } from 'react';
import './Header.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">trulia</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-left">
          <ul className="nav-menu">
            <li><a href="#buy">Buy</a></li>
            <li><a href="#rent">Rent</a></li>
            <li><a href="#mortgage">Mortgage</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-menu">
            <li><a href="#saved-homes">Saved Homes</a></li>
            <li><a href="#saved-searches">Saved Searches</a></li>
            <li><button className="signup-login">Sign up or Login</button></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </header>
  );
};

export default Header;
