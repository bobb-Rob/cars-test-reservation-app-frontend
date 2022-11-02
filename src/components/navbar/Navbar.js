import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaPinterest, FaVimeoV,
  FaGooglePlusG,

} from 'react-icons/fa';
import './navbar.css';
import logo from '../cars/car.jpg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="carsBnb Logo"
        />
      </div>
      <div className="nav-links">
        <Link to="/cars" className="active">CARS</Link>
        <Link to="/reserve">RESERVE</Link>
        <Link to="/reservation-list">RESERVATION LIST</Link>
        <Link to="/addcar">ADD CAR</Link>
      </div>

      <div className="nav-icons">

        <Link to="/">
          <FaTwitter />
        </Link>
        <Link to="/">
          <FaFacebookF />
        </Link>
        <Link to="/">
          <FaGooglePlusG />
        </Link>
        <Link to="/">
          <FaVimeoV />
        </Link>
        <Link to="/">
          <FaPinterest />
        </Link>
      </div>

      <div className="nav-footer">
        <p>2022 © All Rights Reserved</p>

      </div>

    </div>
  );
}

export default Navbar;
