import React from "react";
import "./Help.css";
import { FaSearch } from "react-icons/fa";

const Help = () => {
  return (
    <div className="help-container">
      <h1>See how Trulia can help</h1>
      <div className="card-container">
        <div className="card" onClick="">
          <img
            src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg"
            alt="Buy a home"
            className="card-image"
          />
          <h2>Buy a home</h2>
          <p>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
          <button className="card-button">Find a home</button>
        </div>
        <div className="card" onClick="">
          <img
            src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg"
            alt="Buy a home"
            className="card-image"
          />
          <h2>Rent a home</h2>
          <p>
            With 35+ filters and custom keyword search, Trulia can help you
            easily find a home or apartment for rent that you'll love..
          </p>
          <button className="card-button">Find a rental</button>
        </div>
        <div className="card" onClick="">
          <img
            src="https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg"
            alt="Buy a home"
            className="card-image"
          />
          <h2>See neighborhoods</h2>
          <p>
            With more neighborhood insights than any other real estate website,
            we've captured the color and diversity of communities.
          </p>
          <button className="card-button">Learn more</button>
        </div>
      </div>
      <div className="helpSearch">
        <h4>Check out a neighborhood</h4>
        <div className="help-search">
          <input
            type="text"
            placeholder="Search for City,Neighborhood,Zip,Country"
            className="search-input"
          />
          <button className="helpSearch-button">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
