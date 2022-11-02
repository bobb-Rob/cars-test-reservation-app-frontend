import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import CarCard from './CarCard';

const Cars = () => {
  const carState = useSelector((state) => state.cars);
  const threeCars = carState.cars.slice(0, 3);

  return (
    <div className="main-car-container">
      <h1>Latest Models</h1>
      <p>Please select a car model</p>
      <div className="car-container">
        { threeCars.map((car) => (
          <CarCard
            key={car.id}
            model={car.model}
            image={car.featured_image}
            specifications={car.specifications}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
