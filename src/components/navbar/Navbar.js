import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useParams } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaVimeoV,
  FaGooglePlusG,
} from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import '../../styles/navbar.css';
import logo from '../../images/cars-bnb-logo.png';
import { addFromNav } from '../../redux/Reservations/ReserveSlice';
import { logout } from '../../redux/Auth/authenticationSlice';

function Navbar() {
  const dispatch = useDispatch();
  const carId = useParams().carId || 'choose';

  return (
    <header>
      <div className="my-navbar">
        <div className="logout">
          <button
            type="button"
            className="logout-btn"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
        <div className="logo">
          <img src={logo} alt="carsBnb Logo" />
        </div>
        <nav className="menu">
          <div className="mobile-nav desktop-nav">
            <div className="my-nav-links">
              <NavLink to="/cars">
                CARS
              </NavLink>
              <NavLink to="addcar">ADD CAR</NavLink>
              <NavLink
                to={`/cars/${carId}/reservations/add`}
                onClick={() => {
                  dispatch(addFromNav(true));
                }}
              >
                RESERVE
              </NavLink>
              <NavLink to="reservations">MY RESERVATIONS</NavLink>
              <NavLink to="delete">DELETE CAR</NavLink>
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
          <button type="button" className="hamburger">
            <HiMenu />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
