import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CarDetails = () => {
  const cars = useSelector((state) => state.cars.cars);
  console.log(cars);
  const params = useParams();
  const currentCar = cars.find((car) => car.id === params.carId);
  console.log(currentCar);

  return (
    <div className="car-details-container">
      <div className="car-image-wrap">
        <img src={currentCar.image} alt={currentCar.model} />
      </div>
      <div>
        <h2>{ currentCar.model }</h2>
        <p>{ currentCar.brand }</p>
        <p>{ currentCar.specifications }</p>
        <p>{ currentCar.released_year }</p>
      </div>
    </div>
  );
};

export default CarDetails;
