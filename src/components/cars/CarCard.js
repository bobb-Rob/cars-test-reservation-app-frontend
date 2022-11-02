import React from 'react';
import propTypes from 'prop-types';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const CarCard = ({ image, model, specifications }) => (
  <div className="car-card">
    <div className="car-image-wrap">
      <img src={image} alt={model} />
    </div>
    <h2>{ model }</h2>
    <p>--------------</p>
    <p>{specifications}</p>
    <div className="d-flex socials justify-content-center">
      <div className="d-flex justify-content-center align-items-center cars-icons-wrap">
        <FaFacebookF />
      </div>
      <div className="d-flex justify-content-center align-items-center cars-icons-wrap">
        <BsTwitter />
      </div>
      <div className="d-flex justify-content-center align-items-center cars-icons-wrap">
        <BsInstagram />
      </div>
    </div>
  </div>
);

CarCard.defaultProps = {
  specifications: 'No specifications',
};

CarCard.propTypes = {
  image: propTypes.string.isRequired,
  model: propTypes.string.isRequired,
  specifications: propTypes.string,
};

export default CarCard;
