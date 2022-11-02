import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <Link to={`/cars/${car.id}`} key={car.id} className="car-link">
            <CarCard
              key={car.id}
              model={car.model}
              image={car.featured_image}
              specifications={car.specifications}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cars;
