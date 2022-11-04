import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import logo from '../../images/cars-bnb-logo.png';
import '../../styles/signin_signup.css';

const Splash = () => (
  <div>
    <div>
      <div className="splash-logo d-flex justify-content-center align-items-center">
        <img src={logo} alt="Cars bnb logo" />
      </div>
      <div className="d-flex align-items-center flex-column">
        <Link to="/login" className="text-decoration-none">
          <button
            type="button"
            className="sign-btn"
          >
            Sign In
          </button>
        </Link>
        <Link to="/signup" className="text-decoration-none">
          <button
            type="button"
            className=" sign-btn"
          >
            Create Account
          </button>
        </Link>
      </div>
      <div className=" d-flex socials justify-content-center">
        <div className="d-flex justify-content-center align-items-center icons-wrap">
          <FaFacebookF />
        </div>
        <div className="d-flex justify-content-center align-items-center icons-wrap">
          <FaLinkedinIn />
        </div>
        <div className="d-flex justify-content-center align-items-center icons-wrap">
          <AiOutlineGooglePlus />
        </div>
        <div className="d-flex justify-content-center align-items-center icons-wrap">
          <BsTwitter />
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
