import React from 'react';
import propTypes from 'prop-types';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const CarCard = ({ image, model, description }) => (
  <div>
    <div className="image-wrap">
      <img src={image} alt={model} />
    </div>
    <h2>{ model }</h2>
    <p>{description}</p>
    <div className=" d-flex socials justify-content-center">
      <div className="d-flex justify-content-center align-items-center icons-wrap">
        <FaFacebookF />
      </div>
      <div className="d-flex justify-content-center align-items-center icons-wrap">
        <BsTwitter />
      </div>
      <div className="d-flex justify-content-center align-items-center icons-wrap">
        <BsInstagram />
      </div>
    </div>
  </div>
);

CarCard.propTypes = {
  image: propTypes.string.isRequired,
  model: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default CarCard;
