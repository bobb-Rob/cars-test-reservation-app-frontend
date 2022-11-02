import React from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackArrow = ({ myClassName }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={myClassName}
    >
      <BsArrowLeft />
    </button>
  );
};

BackArrow.defaultProps = {
  myClassName: 'back-arrow',
};

BackArrow.propTypes = {
  myClassName: propTypes.string,
};

export default BackArrow;
