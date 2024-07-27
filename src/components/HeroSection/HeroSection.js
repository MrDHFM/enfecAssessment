import React from "react";
import { FaSearch } from "react-icons/fa";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSection-img">
        <img
          className=""
          src="https://www.trulia.com/images/app-shopping/homePage/extraLarge.jpg"
          alt="trulia"
        />
      </div>
      <div className="centered">
        <h1>
          Discover a place <br /> you'll love to live
        </h1>
        <div className="heroSection-menu">
          <button>Buy</button>
          <button>Rent</button>
          <button>Sold</button>
        </div>
        <div className="heroSection-search">
          <input
            type="text"
            placeholder="Hyderabd,TG"
            className="search-input"
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
