import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cars = ({image, }) => {
  
  return (
    <div>
      <div className="image-wrap">
        <img src={image} alt={model} />
      </div>
      <h2></h2>
      <p></p>
    </div>
  );
};

export default Cars;
