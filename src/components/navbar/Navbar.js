import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useParams } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaPinterest, FaVimeoV, FaGooglePlusG,
} from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import '../../styles/navbar.css';
import logo from '../../images/cars-bnb-logo.png';
import { addFromNav } from '../../redux/Reservations/ReserveSlice';

function Navbar() {
  const dispatch = useDispatch();
  const carId = useParams().carId || 'choose';

  return (
    <header className="my-navbar">
      <div className="logo">
        <img src={logo} alt="carsBnb Logo" />
      </div>
      <nav className="menu">
        <div className="mobile-nav desktop-nav">
          <div className="my-nav-links">
            <NavLink to="/cars" className="active">CARS</NavLink>
            <NavLink to="/addcar">ADD CAR</NavLink>
            <NavLink
              to={`/cars/${carId}/reservations/add`}
              onClick={() => {
                dispatch(addFromNav(true));
              }}
            >
              RESERVE
            </NavLink>
            <NavLink to="/reservations">MY RESERVATIONS</NavLink>
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
    </header>
  );
}

export default Navbar;
