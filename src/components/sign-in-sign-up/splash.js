import React from 'react';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import logo from '../../images/cars-bnb-logo.png';
import '../../styles/signin_signup.css';

const Splash = () => (
  <div>
    <div>
      <div className="logo d-flex justify-content-center align-items-center">
        <img src={logo} alt="Cars bnb logo" />
      </div>
      <div className="d-flex align-items-center flex-column">
        <button
          type="button"
          className="mb-5 sign-btn"
        >
          Sign In
        </button>
        <button
          type="button"
          className="mb-3 sign-btn"
        >
          Create Account
        </button>
      </div>
      <div className=" d-flex socials justify-content-center">
        <div className="d-flex justify-content-center align-items-center icons-wrap">
          <BsFacebook />
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
