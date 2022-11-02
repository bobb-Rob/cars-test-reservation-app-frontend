import React from 'react';
import { Link } from 'react-router-dom';
//facebook react icon
import {
  FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaVimeoV,
  FaGooglePlusG,

} from 'react-icons/fa';

function Navbar() {
  return (
    <div>
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="nav-links">
        <Link to="#" className='active'>MODELS</Link>
        <Link to="#">LIFESTYLE</Link>
        <Link to="#">SHOP</Link>
        <Link to="#">TEST DRIVE</Link>
      </div>

      <div className="nav-icons">

        <Link to="#">
          <FaTwitter />
        </Link>
        <Link to="#">
          <FaFacebookF />
        </Link>
        <Link to="#">
          <FaGooglePlusG />
        </Link>
        <Link to="#">
          <FaVimeoV />
        </Link>
        <Link to="#">
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
