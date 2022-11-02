import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaPinterest, FaVimeoV, FaGooglePlusG,
} from 'react-icons/fa';
import '../../styles/navbar.css';
import logo from '../../images/cars-bnb-logo.png';

function Navbar() {
  return (
    <div className="my-navbar">
      <div>
        <div className="logo">
          <img src={logo} alt="carsBnb Logo" />
        </div>
        <div className="my-nav-links">
          <NavLink to="/cars" className="active">CARS</NavLink>
          <NavLink to="/addcar">ADD CAR</NavLink>
          <NavLink to="/reserve">RESERVE</NavLink>
          <NavLink to="/reservation-list">MY RESERVATIONS</NavLink>
        </div>
      </div>

      <div className="nav-footer">
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
        <p>2022 © All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Navbar;
